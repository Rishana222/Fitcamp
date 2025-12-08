import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Select, Table, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { useCreateGym, getGym, useDeleteGym, useUpdateGym } from "../../utils/gymApi";
import { getGymlocation } from "../../utils/gymlocationApi";
import { getFacility } from "../../utils/facilityApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function GymPage() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [gymsId, setGymsId] = useState(null);

  const [form] = Form.useForm();
  const [updateForm] = Form.useForm();


  const { data: gymData, isLoading, refetch } = useQuery({ queryKey: ["getGym"], queryFn: getGym });
  const gymLocations = useQuery({ queryKey: ["getGymLocation"], queryFn: getGymlocation });
  const facilitiesQuery = useQuery({ queryKey: ["getFacility"], queryFn: getFacility });

  const { mutate: createGymMutate } = useCreateGym();
  const { mutate: deleteGymMutate } = useDeleteGym();
  const { mutate: updateGym } = useUpdateGym();

  // Map for facilities for table display
  const facilityMap = Object.fromEntries(
    (facilitiesQuery.data?.data?.data || []).map(f => [f._id, f])
  );

  // Dropdown options
  const locationOptions = Array.isArray(gymLocations.data?.data)
    ? gymLocations.data.data.map(l => ({ label: l.name, value: l._id }))
    : [];

  const facilityOptions = Array.isArray(facilitiesQuery.data?.data?.data)
    ? facilitiesQuery.data.data.data.map(f => ({
      label: f.name,
      value: f._id,
      icon: Array.isArray(f.icons) && f.icons[0] ? f.icons[0] : "",
      description: f.description
    }))
    : [];

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Image", dataIndex: "image", key: "image", render: text => <Image width={70} src={text} /> },
    { title: "Location", dataIndex: "gymLocation", key: "gymLocation", render: loc => loc?.name || "—" },
    {
      title: "Facilities",
      dataIndex: "facilities",
      key: "facilities",
      render: facilities => Array.isArray(facilities) && facilities.length > 0
        ? (
          <div className="flex flex-wrap gap-4">
            {facilities.map(fId => {
              const f = facilityMap[fId];
              if (!f) return null;
              return (
                <div key={fId} className="flex flex-col items-center">
                  {f.icons && f.icons[0] && <img src={f.icons[0]} alt={f.name} width={40} height={40} />}
                  <div className="font-semibold text-sm">{f.name}</div>
                  <div className="text-xs text-gray-500">{f.description}</div>
                </div>
              );
            })}
          </div>
        ) : "—"
    },
     {
      title: "Opening Icon",
      dataIndex: "openingIcon",
      key: "openingIcon",
      render: text => text ? <img src={`http://localhost:5000/uploads/${text}`} width={50} /> : "—"
    },
    {
      title: "Action",
      key: "id",
      render: record => (
        <div className="flex space-x-2">
          <button
            onClick={() => onHandleDelete(record._id)}
            className="bg-red-500 text-white px-3 py-1 rounded-xs hover:bg-red-700"
          >Delete</button>
          <button
            onClick={() => HandleOpenUpdateModal(record)}
            className="bg-blue-500 text-white px-3 py-1 rounded-xs hover:bg-blue-700"
          >Update</button>
        </div>
      )
    },
   
  ];


  const onCreateFormSubmit = values => {
  const fileObj = values.image?.[0]?.originFileObj;
  const iconFileObj = values.openingIcon?.[0]?.originFileObj; 

  if (!fileObj) {
    toast.error("Gym image is required");
    return;
  }

  if (!iconFileObj) {  
    toast.error("Opening icon is required");
    return;
  }

  const payload = new FormData();
  payload.append("name", values.name);
  payload.append("description", values.description || "");
  payload.append("image", fileObj);
  payload.append("openingIcon", iconFileObj); 
  payload.append("gymLocation", values.gymLocation);

  if (values.facilities?.length) {
    values.facilities.forEach(f => payload.append("facilities", f));
  }

  createGymMutate(payload, {
    onSuccess: () => {
      form.resetFields();
      setOpenCreateModal(false);
      refetch();
      toast.success("Gym created successfully");
    },
    onError: err => toast.error(err?.response?.data?.message || "Failed to create gym")
  });
};

  const onHandleDelete = id => {
    deleteGymMutate(id, {
      onSuccess: () => {
        refetch();
        toast.success("Deleted successfully");
      },
      onError: () => toast.error("Failed")
    });
  };

  const HandleOpenUpdateModal = gym => {
  setGymsId(gym._id);

  updateForm.setFieldsValue({
    name: gym.name,
    description: gym.description,
    gymLocation: gym.gymLocation?._id,
    facilities: Array.isArray(gym.facilities)
      ? gym.facilities.map(f => (typeof f === "string" ? f : f._id))
      : [],
    openingIcon: gym.openingIcon
      ? [
          {
            uid: "-1",
            name: "icon",
            status: "done",
            url: `http://localhost:5000/uploads/${gym.openingIcon}`,
          },
        ]
      : [],
  });

  setOpenUpdateModal(true);
};

const onUpdateFormSubmit = values => {
  const payload = new FormData();

  payload.append("name", values.name);
  payload.append("description", values.description || "");
  payload.append("gymLocation", values.gymLocation);

  if (values.facilities) {
     values.facilities.forEach(f => payload.append("facilities", f));
  }

  const fileObj = values.image?.[0]?.originFileObj;
  if (fileObj) payload.append("image", fileObj);

  const iconFileObj = values.openingIcon?.[0]?.originFileObj;
  if (iconFileObj) payload.append("openingIcon", iconFileObj);

  updateGym({ id: gymsId, data: payload }, {
    onSuccess: () => {
      updateForm.resetFields();
      setOpenUpdateModal(false);
      refetch();
      toast.success("Updated successfully");
    },
    onError: error => toast.error(error?.response?.data?.message || "Failed")
  });
};
  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <Button type="primary" onClick={() => setOpenCreateModal(true)}>Add Gym</Button>
      </div>

      <Table
        columns={columns}
        dataSource={gymData?.data ?? []}
        loading={isLoading}
        rowKey="_id"
        pagination={{ pageSize: 4 }}
        scroll={{ x: 'max-content' }}
      />


      <Modal open={openCreateModal} onCancel={() => setOpenCreateModal(false)} footer={null} title="Create Gym">
        <Form layout="vertical" form={form} onFinish={onCreateFormSubmit}>
          <Form.Item name="name" label="Gym Name" rules={[{ required: true }]}>
            <Input placeholder="Enter gym name" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter description" />
          </Form.Item>
          <Form.Item
            name="image"
            label="Gym Image"
            rules={[{ required: true, message: "Gym image is required" }]}
            valuePropName="fileList"
            getValueFromEvent={e => e?.fileList || []}
          >
            <Dragger beforeUpload={() => false} maxCount={1}>
              <p className="ant-upload-drag-icon"><InboxOutlined /></p>
              <p className="ant-upload-text">Click or drag file to upload</p>
            </Dragger>
          </Form.Item>
          <Form.Item name="gymLocation" label="Select Location" rules={[{ required: true }]}>
            <Select placeholder="Choose a location" options={locationOptions} />
          </Form.Item>
          <Form.Item name="facilities" label="Select Facilities">
            <Select
              placeholder="Choose facilities"
              mode="multiple"
              options={facilityOptions.map(f => ({
                label: (
                  <div className="flex items-center space-x-2">
                    {f.icon && <img src={f.icon} alt={f.label} width={24} height={24} />}
                    <div>
                      <div className="font-semibold">{f.label}</div>
                      <div className="text-xs text-gray-500">{f.description}</div>
                    </div>
                  </div>
                ),
                value: f.value
              }))}
            />
          </Form.Item>
          <Form.Item
            name="openingIcon"
            label="Opening Icon"
            rules={[{ required: true, message: "Opening icon is required" }]}
            valuePropName="fileList"
            getValueFromEvent={e => e?.fileList || []}
          >
            <Dragger beforeUpload={() => false} maxCount={1}>
              <p className="ant-upload-drag-icon"><InboxOutlined /></p>
              <p className="ant-upload-text">Click or drag file to upload icon</p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal open={openUpdateModal} onCancel={() => setOpenUpdateModal(false)} footer={null} title="Update Gym">
        <Form layout="vertical" form={updateForm} onFinish={onUpdateFormSubmit}>
          <Form.Item name="name" label="Gym Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="gymLocation" label="Select Location" rules={[{ required: true }]}>
            <Select placeholder="Choose a location" options={locationOptions} />
          </Form.Item>
          <Form.Item name="facilities" label="Select Facilities">
            <Select
              placeholder="Choose facilities"
              mode="multiple"
              options={facilityOptions.map(f => ({
                label: (
                  <div className="flex items-center space-x-2">
                    {f.icon && <img src={f.icon} alt={f.label} width={24} height={24} />}
                    <div>
                      <div className="font-semibold">{f.label}</div>
                      <div className="text-xs text-gray-500">{f.description}</div>
                    </div>
                  </div>
                ),
                value: f.value
              }))}
            />
          </Form.Item>
          <Form.Item
            name="openingIcon"
            label="Opening Icon"
            valuePropName="fileList"
            getValueFromEvent={e => e?.fileList || []}
          >
            <Dragger beforeUpload={() => false} maxCount={1}>
              <p className="ant-upload-drag-icon"><InboxOutlined /></p>
              <p className="ant-upload-text">Click or drag file to upload icon</p>
            </Dragger>
          </Form.Item>
          <Form.Item>
            <Button className="w-full" htmlType="submit">Update</Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default GymPage;