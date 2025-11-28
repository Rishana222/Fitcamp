import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Table, Tag, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { getFacility, usecreateFacility, useDeleteFacility } from "../../utils/facilityApi";
import { icons } from "antd/es/image/PreviewGroup";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FacilityPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [form] = Form.useForm()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getFacility"],
        queryFn: () => getFacility()
    });

    const { mutate: createFacility } = usecreateFacility()
    const {mutate:deleteFacility} = useDeleteFacility()

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
        },
        {
            title: "Action",
            key: "id",
            render: (record) => (
                <div>
                    <button onClick={() => onHandleDelete(record._id)} className="bg-red-500 text-white  px-3 py-1 rounded-xs hover:bg-red-700">Delete</button>
                </div>
            )
        }
    ];

   const onCreateFormSubmit = (values) => {
    console.log(values);

    let mainImage;
    if (values?.image) {
        mainImage = values.image;
    } else {
        toast.error("Main image is required");
        return;
    }

    let iconFiles = [];
    if (values?.icons?.length > 0) {
        iconFiles = values.icons;
    }

    const payload = new FormData();
    payload.append("name", values.name);
    payload.append("description", values.description || "");
    payload.append("image", mainImage);

    iconFiles.forEach((file) => payload.append("icons", file));

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

const onHandleDelete = (id)=>{
    deleteFacility(id,{
         onSuccess(list) {
                refetch()
                toast.success(list?.data.message)
            },
            onError() {
                toast.error('failed')
            }
    }
    )
}

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
                    dataSource={data?.data?.data ?? []}
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

                    <Form.Item
                        name="image"
                        label="Main Image"
                        valuePropName="file"
                        getValueFromEvent={(e) => {
                            return e?.fileList?.[0]?.originFileObj || null;
                        }}
                        rules={[{ required: true, message: "Image required" }]}
                    >
                        <Dragger maxCount={1} beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to upload</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name="icons"
                        label="Icons"
                        valuePropName="files"
                        getValueFromEvent={(e) => {
                            return e?.fileList?.map(f => f.originFileObj) || [];
                        }} rules={[{ required: true }]}
                    >
                        <Dragger multiple beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Upload multiple icons</p>
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
