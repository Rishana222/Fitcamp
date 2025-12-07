import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Table } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { getFacility, usecreateFacility, useDeleteFacility, useUpdateFacilities } from "../../utils/facilityApi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FacilityPage() {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [form] = Form.useForm()
  const [updateForm] = Form.useForm()
  const [facilityId, setFacilityId] = useState(null);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getFacility"],
    queryFn: () => getFacility()
  });

  const { mutate: createFacility, isLoading: creating } = usecreateFacility()
  const { mutate: deleteFacility, isLoading: deleting } = useDeleteFacility()
  const { mutate: updateFacility, isLoading: updating } = useUpdateFacilities()

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Icons",
      dataIndex: "icons",
      key: "icons",
      render: (icons) =>
        Array.isArray(icons) && icons.length > 0
          ? icons.map((icon, index) => (
            <Image key={index} width={30} src={icon} style={{ marginRight: 4 }} />
          ))
          : "-"
    },
    {
      title: "Action",
      key: "id",
      render: (record) => (
        <div className="flex space-x-2">
          <button
            onClick={() => onHandleDelete(record._id)}
            className="bg-red-500 text-white px-3 py-1 rounded-xs hover:bg-red-700"
            disabled={deleting}
          >
            Delete
          </button>
          <button
            onClick={() => HandleOpenUpdateModal(record)}
            className="bg-blue-500 text-white px-3 py-1 rounded-xs hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      )
    }
  ];

  const onCreateFormSubmit = (values) => {
    const payload = new FormData();
    payload.append("name", values.name);
    payload.append("description", values.description || "");

   
    if (values.image) {
        payload.append("image", values.image);
    } else {
        const blob = new Blob([], { type: 'image/jpeg' });
        payload.append("image", blob, "placeholder.jpg");
    }

    if (values.icons?.length > 0) values.icons.forEach(file => payload.append("icons", file));

    createFacility(payload, {
      onSuccess(res) {
        form.resetFields();
        refetch();
        setOpenCreateModal(false);
        toast.success(res?.data?.message || "Facility created");
      },
      onError(err) {
        console.error(err);
        toast.error(err?.response?.data?.message || "Failed to create");
      }
    });
};

const onHandleDelete = (id) => {
    deleteFacility(id, {
        onSuccess(list) {
            refetch(); 
            toast.success(list?.data?.message || "Deleted successfully");
        },
        onError() {
            toast.error("Failed to delete");
        }
    });
};
  const HandleOpenUpdateModal = (value) => {
    setFacilityId(value._id);
    updateForm.setFieldsValue({
      name: value.name,
      description: value.description,
    });
    setOpenUpdateModal(true);
  };

  const onUpdateFormSubmit = (values) => {
    const payload = new FormData();
    payload.append("name", values.name);
    payload.append("description", values.description || "");

    if (values.icons?.length > 0) values.icons.forEach(file => payload.append("icons", file));

    updateFacility(
      { id: facilityId, data: payload },
      {
        onSuccess(res) {
          toast.success(res?.data?.message || "Updated successfully");
          updateForm.resetFields();
          setOpenUpdateModal(false);
          refetch();
        },
        onError(err) {
          toast.error(err?.response?.data?.message || "Something went wrong");
        }
      }
    );
  };

  return (
    <>
      <div className="flex items-center justify-end mb-4">
        <Button type="primary" onClick={() => setOpenCreateModal(true)}>Add Facility</Button>
      </div>

      <Table
        columns={columns}
        dataSource={data?.data?.data ?? []}
        loading={isLoading}
        rowKey="_id"
      />

     
      <Modal
        open={openCreateModal}
        onCancel={() => setOpenCreateModal(false)}
        footer={null}
        title="Create Facility"
      >
        <Form layout="vertical" onFinish={onCreateFormSubmit} form={form}>
          <Form.Item name="name" label="Facility Name" rules={[{ required: true }]}>
            <Input placeholder="Enter facility name" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} placeholder="Enter description" />
          </Form.Item>

          <Form.Item
            name="icons"
            label="Icons"
            valuePropName="files"
            getValueFromEvent={e => e?.fileList?.map(f => f.originFileObj) || []}
          >
            <Dragger multiple beforeUpload={() => false}>
              <p className="ant-upload-drag-icon"><InboxOutlined /></p>
              <p className="ant-upload-text">Upload multiple icons</p>
            </Dragger>
          </Form.Item>

          <Form.Item>
            <Button className="w-full" type="primary" htmlType="submit" loading={creating}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      
      <Modal
        open={openUpdateModal}
        onCancel={() => setOpenUpdateModal(false)}
        footer={null}
        title="Update Facility"
      >
        <Form layout="vertical" onFinish={onUpdateFormSubmit} form={updateForm}>
          <Form.Item name="name" label="Facility Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} />
          </Form.Item>

          <Form.Item
            name="icons"
            label="Update Icons"
            valuePropName="files"
            getValueFromEvent={e => e?.fileList?.map(f => f.originFileObj) || []}
          >
            <Dragger multiple beforeUpload={() => false}>
              <p className="ant-upload-drag-icon"><InboxOutlined /></p>
              <p>Upload new icons</p>
            </Dragger>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full" loading={updating}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FacilityPage;
