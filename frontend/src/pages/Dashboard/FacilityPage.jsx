import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Table, Tag, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import {  getFacility, usecreateFacility } from "../../utils/facilityApi";
import { icons } from "antd/es/image/PreviewGroup";

function FacilityPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [form]= Form.useForm()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getFacility"],
        queryFn: () => getFacility()
    });

    const { mutate: createFacility } = usecreateFacility()

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
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (text) => <Image width={70} src={text} />
        },
        {
            title: "Icons",
            dataIndex: "icons",
            key: "icons",
            render: (icons) =>
                Array.isArray(icons) ? icons.map((icon, index) => (
                    <Tag key={index} color="blue">{icon}</Tag>
                )) : null
        }
    ];

    const onCreateFormSubmit = (values) => {

        console.log(values);
        
        let image;
        if (values.image.file.originFileObj) {
            image = values.image.file.originFileObj
        } else {
            message.error("image required")
        }

        const payLoad = {
            name: values.name,
            description:values.description,
            image: image,
            icons: values.icons
        }

        createFacility(payLoad,{
            onSuccess() {
                form.resetFields()
                refetch()
                setOpenCreateModal(false)
            },
            onError() {
                message.error("failed")
            }
        })
    };

    return (
        <>
            <div className="flex items-center justify-end">
                <Button type="primary" onClick={() => setOpenCreateModal(true)}>
                    Add
                </Button>
            </div>

            <div className="w-full mt-4">
                <Table
                    columns={columns}
                    dataSource={data?.data?.data}
                    loading={isLoading}
                    rowKey="_id"
                />
            </div>

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

                    <Form.Item name="image" label="Main Image">
                        <Dragger beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to upload</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item name="icons" label="Icons">
                        <Dragger multiple beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Upload multiple icon images</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item>
                        <Button className="w-full" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default FacilityPage;
