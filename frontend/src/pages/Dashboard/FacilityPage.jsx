import { InboxOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Table, Space } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { getFacilities, createFacility } from "../../utils/facilityApi"; // <-- your API file

function FacilityDashboard() {
    const [openModal, setOpenModal] = useState(false);
    const [form] = Form.useForm();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getFacilities"],
        queryFn: () => getFacilities(),
    });

    // Convert uploader event -> file list
    const normFile = (e) => {
        if (Array.isArray(e)) return e;
        return e?.fileList;
    };

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Description",
            dataIndex: "description",
        },
        {
            title: "Image",
            dataIndex: "image",
            render: (img) => <Image src={img} width={120} />,
        },
        {
            title: "Icons",
            dataIndex: "icons",
            render: (icons) => (
                <Space wrap>
                    {icons?.map((icon, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-200 rounded">
                            {icon}
                        </span>
                    ))}
                </Space>
            ),
        },
    ];

    const onCreate = async (values) => {
        const file = values.image?.[0]?.originFileObj;

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description || "");
        if (file) formData.append("image", file);
        formData.append("icons", JSON.stringify(values.icons || []));

        await createFacility(formData);

        refetch();
        form.resetFields();
        setOpenModal(false);
    };

    return (
        <>
            <div className="flex justify-between items-center mb-3">
                <Button type="primary" onClick={() => setOpenModal(true)}>
                    Add Facility
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={data?.data}
                loading={isLoading}
                rowKey={(row) => row._id}
            />

            <Modal
                title="Create Facility"
                open={openModal}
                onCancel={() => setOpenModal(false)}
                footer={null}
            >
                <Form layout="vertical" form={form} onFinish={onCreate}>
                    <Form.Item
                        name="name"
                        label="Facility Name"
                        rules={[{ required: true, message: "Name is required" }]}
                    >
                        <Input placeholder="Enter facility name" />
                    </Form.Item>

                    <Form.Item name="description" label="Description">
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item
                        name="image"
                        label="Image"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        rules={[{ required: true, message: "Image is required" }]}
                    >
                        <Dragger beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p>Click or drag image to upload</p>
                        </Dragger>
                    </Form.Item>

                    {/* Icons Array Input */}
                    <Form.List name="icons">
                        {(fields, { add, remove }) => (
                            <div>
                                <label className="font-medium">Icons</label>
                                {fields.map((field) => (
                                    <Space
                                        key={field.key}
                                        style={{ display: "flex", marginBottom: 8 }}
                                        align="start"
                                    >
                                        <Form.Item
                                            {...field}
                                            rules={[{ required: true, message: "Icon required" }]}
                                        >
                                            <Input placeholder="Enter icon name" />
                                        </Form.Item>
                                        <DeleteOutlined
                                            onClick={() => remove(field.name)}
                                            className="text-red-500 cursor-pointer"
                                        />
                                    </Space>
                                ))}

                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    block
                                    icon={<PlusOutlined />}
                                >
                                    Add Icon
                                </Button>
                            </div>
                        )}
                    </Form.List>

                    <Form.Item className="mt-3">
                        <Button type="primary" htmlType="submit" className="w-full">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default FacilityDashboard;
