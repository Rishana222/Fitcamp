import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Select, Table } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";

import { useCreateGym, getGym } from "../../utils/gymApi";
import { getGymlocation } from "../../utils/gymlocationApi";
import { getFacility } from "../../utils/facilityApi";

function GymPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [form] = Form.useForm()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getGym"],
        queryFn: () => getGym(),
    });

    const gymLocations = useQuery({
        queryKey: ["getGymLocation"],
        queryFn: () => getGymlocation(),
    });

    const facilities = useQuery({
        queryKey: ["getFacility"],
        queryFn: () => getFacility(),
    });

    const { mutate: createGym } = useCreateGym()

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
            render: (text) => text || "—",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (img) => <Image width={70} src={img} />,
        },
        {
            title: "Location",
            dataIndex: "gymLocation",
            key: "gymLocation",
            render: (loc) => loc?.name,
        },
        {
            title: "Facilities",
            dataIndex: "facilites",
            key: "facilites",
            render: (list) =>
                list?.map((f) => f.name).join(", ") || "—",
        },
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
            description: values.description,          
            image:image,                
            gymLocation: values.gymLocationId,        // Selected Gym Location ID
            facilites: values.facilites               // Array of selected Facility IDs
        }
        createGym(payLoad,{
            onSuccess(){
                form.resetFields()
                refetch()
                setOpenCreateModal(false)
            },
            onError(){
                message.error("failed")
            }
        })
    };

    return (
        <>
            <div className="flex items-center justify-end">
                <Button type="primary" onClick={() => setOpenCreateModal(true)}>
                    Add Gym
                </Button>
            </div>

            <div className="w-full mt-3">
                <Table
                    columns={columns}
                    dataSource={data?.data}
                    loading={isLoading}
                    rowKey="_id"
                />
            </div>

            <Modal
                open={openCreateModal}
                onCancel={() => setOpenCreateModal(false)}
                footer={null}
                title={"Create Gym"}
            >
                <Form layout="vertical" onFinish={onCreateFormSubmit} form={form}>
                    <Form.Item
                        name={"name"}
                        label="Gym Name"
                        rules={[{ required: true, message: "Gym name required" }]}
                    >
                        <Input placeholder="Enter gym name" />
                    </Form.Item>

                    <Form.Item name={"description"} label="Description">
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item
                        name={"image"}
                        label="Gym Image"
                        rules={[{ required: true, message: "image required" }]}
                    >
                        <Dragger beforeUpload={() => false}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to upload
                            </p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item
                        name={"gymLocation"}
                        label="Select Location"
                        rules={[{ required: true, message: "location required" }]}
                    >
                        <Select
                            placeholder="Choose a location"
                            loading={gymLocations.isLoading}
                            options={
                                gymLocations.data?.data?.map((l) => ({
                                    label: l.name,
                                    value: l._id,
                                }))
                            }
                        />
                    </Form.Item>

                    <Form.Item name={"facilites"} label="Select Facilities">
                        <Select
                            mode="multiple"
                            placeholder="Choose facilities"
                            loading={facilities.isLoading}
                            options={
                                facilities.data?.data?.map((f) => ({
                                    label: f.name,
                                    value: f._id,
                                }))
                            }
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className="w-full" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default GymPage;
