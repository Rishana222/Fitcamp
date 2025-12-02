import { InboxOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Form, Image, Input, message, Modal, Table } from "antd"
import Dragger from "antd/es/upload/Dragger"
import { useState } from "react"
import { getGymlocation, useCreateGymLocation, useDeleteGymLocation ,useUpdateGymLocation  } from "../../utils/gymlocationApi"
import { toast } from 'react-toastify'




function GymLocationPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [form] = Form.useForm()
    const [updateForm] = Form.useForm()
  

    const [gymId, setGymId] = useState()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['getGymLocation'],
        queryFn: () => getGymlocation(),

    })

    const { mutate: createGym } = useCreateGymLocation()
    const { mutate: deleteGym } = useDeleteGymLocation()
    const { mutate: updateGymlocation } = useUpdateGymLocation()

    console.log({ data });


    const columns = [
        {
            title: "Name",
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: "Image",
            dataIndex: 'cardImage',
            key: 'cardImage',
            render: (text) => (
                <Image src={`${text}`} />
            )
        },
        {
            title: "Action",
            key: "id",
            render: (record) => (
                <div className="flex space-x-4">
                    <button onClick={() => onHandleDelete(record._id)} className="bg-red-500 text-white  px-3 py-1 rounded-xs hover:bg-red-700">Delete</button>
                    <button onClick={() => HandleOpenUpdateModal(record)} className="bg-blue-500 text-white  px-3 py-1 rounded-xs hover:bg-blue-700">update</button>
                </div>
            )
        }

    ]

    const onCreateFormSubmit = (values) => {
        console.log(values);

        let image;

        // Validate image
        if (values?.cardImage?.file?.originFileObj) {
            image = values.cardImage.file.originFileObj;
        } else {
            toast.error("Image is required");
            return; // STOP execution
        }

        const payLoad = {
            name: values.name,
            cardImage: image
        };

        createGym(payLoad, {
            onSuccess(list) {
                form.resetFields();
                refetch();
                setOpenCreateModal(false);
                toast.success(list?.data.message || "Created successfully");
                console.log(list, ":::::::::");
                console.log(message, "dfhhcyghfgh");

            },
            onError(error) {
                console.error(error?.message);
                toast.error(error?.response?.data?.message || error?.message || "Something went wrong");
            }
        });
    };

    const onHandleDelete = (id) => {
        deleteGym(id, {
            onSuccess(list) {
                refetch()
                toast.success(list?.data.message)
                // toast.success('deleted successfully')
            },
            onError() {
                toast.error('failed')
            }
        })
    }

    const HandleOpenUpdateModal = (value) => {
        setGymId(value._id)
        updateForm.setFieldsValue({
            name: value.name,
        })
        setOpenUpdateModal(true)
    }

    const onUpdateFormSubmit = (value) => {
    const payload = {
        name: value.name
    };

    updateGymlocation(
        { id: gymId, data: payload },
        {
            onSuccess(list) {
                updateForm.resetFields();
                setOpenUpdateModal(false);
                refetch();
                toast.success(list?.data?.message || "Updated successfully");
            },
            onError(error) {
                toast.error(error?.response?.data?.message || error?.message || "Something went wrong");
            }
        }
    );
    };           
            


    return (
        <>
            <div className="flex items-center justify-between">
                <div className=""></div>
                <div className="">
                    <Button type="primary" onClick={() => setOpenCreateModal(true)}>Add</Button>
                </div>
            </div>
            <div className="w-full mt-[10px]">
                <Table columns={columns} dataSource={data?.data} loading={isLoading} />
            </div>

            <Modal open={openCreateModal} onCancel={() => setOpenCreateModal(false)} footer={null} title={'Create Gym Location'} >
                <Form layout="vertical" onFinish={onCreateFormSubmit} form={form}>
                    <Form.Item name={'name'} label="Location Name" rules={[{ required: true, message: "location name required" }]}>
                        <Input placeholder="enter location name" />
                    </Form.Item>
                    <Form.Item name={'cardImage'} label="Image" rules={[{ required: true, message: "image required" }]}>
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </Form.Item>
                    <Form.Item>
                        <Button className="w-full" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal open={openUpdateModal} onCancel={() => setOpenUpdateModal(false)} footer={null} title={'update Gym Location'} >
                <Form layout="vertical" onFinish={onUpdateFormSubmit} form={updateForm}>
                    <Form.Item name={'name'} label="Location Name" rules={[{ required: true, message: "location name required" }]}>
                        <Input placeholder="enter location name" />
                    </Form.Item>
                   <Form.Item name={'cardImage'} label="Image">
                        <Dragger >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                                banned files.
                            </p>
                        </Dragger>
                    </Form.Item>
                    <Form.Item>
                        <Button className="w-full" htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default GymLocationPage