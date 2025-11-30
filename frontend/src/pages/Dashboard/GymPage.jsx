import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Image, Input, Modal, Select, Table, message } from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useState } from "react";
import { useCreateGym, getGym,useDeleteGym } from "../../utils/gymApi";
import { getGymlocation } from "../../utils/gymlocationApi";
import { getFacility } from "../../utils/facilityApi";
import { toast } from "react-toastify";

function GymPage() {
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [form] = Form.useForm();

    const { data, isLoading, refetch } = useQuery({ queryKey: ["getGym"], queryFn: getGym });
    const gymLocations = useQuery({ queryKey: ["getGymLocation"], queryFn: getGymlocation });
    const facilities = useQuery({ queryKey: ["getFacility"], queryFn: getFacility });

    const { mutate: createGymMutate } = useCreateGym();
    const {mutate: deleteGymMutate} = useDeleteGym();

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Description",
            dataIndex: "description",
            key: "description"
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (text) => <Image width={70} src={text} />
        },
        {
            title: "Location",
            dataIndex: "gymLocation",
            key: "gymLocation",
            render: loc => loc?.name || "—"
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

        if (!values.image?.file?.originFileObj) {
            toast.error("Image is required");
            return;
        }

        const payload = {
            name: values.name,
            description: values.description || "",
            image: values.image.file.originFileObj,
            gymLocation: values.gymLocation,
            facilites: values.facilities || [],
        };

        createGymMutate(payload, {
            onSuccess() {
                form.resetFields();
                refetch();
                setOpenCreateModal(false);
                toast.success("Gym created successfully");
            },
            onError() {
                message.error("Failed to create gym");
            }
        });
    };
     const onHandleDelete = (id) => {
        deleteGymMutate(id, {
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
    
    const locationOptions = Array.isArray(gymLocations.data?.data) ? gymLocations.data.data.map(l => ({ label: l.name, value: l._id })) : [];
    
    
    
    return (
        <>
            <div className="flex items-center justify-end mb-4">
                <Button type="primary" onClick={() => setOpenCreateModal(true)}>Add Gym</Button>
            </div>

            <Table
                columns={columns}
                dataSource={data?.data ?? []}
                loading={isLoading}
                rowKey="_id"
            />

            <Modal open={openCreateModal} onCancel={() => setOpenCreateModal(false)} footer={null} title="Create Gym">
                <Form layout="vertical" form={form} onFinish={onCreateFormSubmit} >
                    <Form.Item name="name" label="Gym Name" rules={[{ required: true }]}>
                        <Input placeholder="Enter gym name" />
                    </Form.Item>

                    <Form.Item name="description" label="Description">
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item name={"image"} label="Gym Image" rules={[{ required: true }]}>
                        <Dragger >
                            <p className="ant-upload-drag-icon"><InboxOutlined /></p>
                            <p className="ant-upload-text">Click or drag file to upload</p>
                        </Dragger>
                    </Form.Item>

                    <Form.Item name="gymLocation" label="Select Location" rules={[{ required: true }]}>
                        <Select placeholder="Choose a location" options={locationOptions} />
                    </Form.Item>

                    <Form.Item>
                        <Button className="w-full" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default GymPage;
