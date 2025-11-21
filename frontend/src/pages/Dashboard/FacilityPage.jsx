import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Table } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import axios from "axios";

function FacilityPage() {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  // GET Facilities
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getFacilities"],
    queryFn: async () => axios.get("/api/facility").then((res) => res.data),
  });

  // TABLE Columns
  const columns = [
    {
      title: "Facility Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (src) => <Image width={80} src={src} />,
    },
    {
      title: "Icons",
      dataIndex: "icons",
      key: "icons",
      render: (icons) => icons?.join(", "),
    },
  ];

  // Submit Create Facility
  const onCreateFormSubmit = async (values) => {
    const iconsArray = values.icons.split(",").map((i) => i.trim());

    await axios.post("/api/facility", {
      name: values.name,
      description: values.description,
      image: values.image, // from normal input (URL)
      icons: iconsArray,
    });

    setOpenCreateModal(false);
    refetch();
  };

  return (
    <>
      {/* Header Add Button */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Facilities</h2>
        <Button type="primary" onClick={() => setOpenCreateModal(true)}>
          Add Facility
        </Button>
      </div>

      {/* Facility Table */}
      <div className="w-full mt-4">
        <Table
          columns={columns}
          dataSource={data}
          loading={isLoading}
          rowKey="_id"
        />
      </div>

      {/* Create Modal */}
      <Modal
        open={openCreateModal}
        onCancel={() => setOpenCreateModal(false)}
        footer={null}
        title={"Create Facility"}
      >
        <Form layout="vertical" onFinish={onCreateFormSubmit}>
          {/* Facility Name */}
          <Form.Item
            name={"name"}
            label="Facility Name"
            rules={[{ required: true, message: "Facility name required" }]}
          >
            <Input placeholder="Enter facility name" />
          </Form.Item>

          {/* Description */}
          <Form.Item name={"description"} label="Description">
            <Input.TextArea rows={3} placeholder="Enter description" />
          </Form.Item>

          {/* Image URL Input */}
          <Form.Item
            name={"image"}
            label="Image URL"
            rules={[{ required: true, message: "Image URL required" }]}
          >
            <Input placeholder="Enter image URL" />
          </Form.Item>

          {/* Icons */}
          <Form.Item
            name={"icons"}
            label="Icons (comma separated)"
            rules={[{ required: true, message: "Icons required" }]}
          >
            <Input placeholder="ex: icon1, icon2, icon3" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" className="w-full" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default FacilityPage;
