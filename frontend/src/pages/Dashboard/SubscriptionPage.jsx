import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Table, Tag, message, DatePicker, Select } from "antd";
import { useState } from "react";
import { usecreateSubscription, getAllSubscription, useDeleteSubscription,useUpdateSubscription } from "../../utils/subscriptionApi";
import { toast } from 'react-toastify';

const { RangePicker } = DatePicker;

function SubscriptionPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false)
    const [form] = Form.useForm()
     const [updateForm] = Form.useForm()

     const [SubscriptionId, setSubscriptionId] = useState()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getAllSubscription"],
        queryFn: getAllSubscription
    });

    const { mutate: createSub } = usecreateSubscription()
    const { mutate: deleteSub } = useDeleteSubscription()
    const {mutate:updateSub} =useUpdateSubscription()

    const columns = [
        {
            title: "Membership ID",
            dataIndex: "membershipId",
            key: "membershipId",
        },
        {
            title: "Start Date",
            dataIndex: "startDate",
            key: "startDate",
        },
        {
            title: "End Date",
            dataIndex: "endDate",
            key: "endDate",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "active" ? "green" : "red"}>{status}</Tag>
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
    ];

    const onCreateFormSubmit = async (values) => {
        console.log(values);

        const [start, end] = values.dateRange;
        const payLoad = {
            membershipId: values.membershipId,
            startDate: start.format("YYYY-MM-DD"),
            endDate: end.format("YYYY-MM-DD"),
            status: values.status
        };
        createSub(payLoad, {
            onSuccess(res) {
                form.resetFields();
                refetch();
                setOpenCreateModal(false);
                toast.success(res?.data?.message || "Subscription created ");
            },
            onError(err) {
                console.error(err);
                toast.error(err?.response?.data?.message || "Failed to create");
            }
        })
    };

    const onHandleDelete = (id) => {
        deleteSub(id, {
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

        const HandleOpenUpdateModal = (value) => {
        setSubscriptionId(value._id)
        updateForm.setFieldsValue({
            membershipId: value.membershipId,
        startDate: value.startDate,
        endDate: value.endDate,
        status: value.status,
        })
        setOpenUpdateModal(true)
    }
    const onUpdateFormSubmit = (value) => {
    const payload = {
         membershipId: value.membershipId,
        startDate: value.startDate,
        endDate: value.endDate,
        status: value.status,
    };

    updateSub(
        { id: SubscriptionId, data: payload },
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
            <div className="flex items-center justify-end mb-4">
                <Button type="primary" onClick={() => setOpenCreateModal(true)}>
                    Add Subscription
                </Button>
            </div>

            <Table
                columns={columns}
                dataSource={data?.data || data}
                loading={isLoading}
                rowKey="_id"
            />

            <Modal
                open={openCreateModal}
                onCancel={() => setOpenCreateModal(false)}
                footer={null}
                title="Create Subscription"
            >
                <Form layout="vertical" onFinish={onCreateFormSubmit} form={form}>
                    <Form.Item
                        name="membershipId"
                        label="Membership ID"
                        rules={[{ required: true, message: "Membership ID is required" }]}
                    >
                        <Input placeholder="Enter membership ID" />
                    </Form.Item>

                    <Form.Item
                        name="dateRange"
                        label="Start & End Date"
                        rules={[{ required: true, message: "Date range required" }]}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[{ required: true, message: "Status required" }]}
                    >
                        <Select>
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="expired">Expired</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item>
                        <Button className="w-full" type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <Modal
                open={openUpdateModal}
                onCancel={() => setOpenUpdateModal(false)}
                footer={null}
                title="Create Subscription"
            >
                <Form layout="vertical" onFinish={onUpdateFormSubmit} form={updateForm}>
                    <Form.Item
                        name="membershipId"
                        label="Membership ID"
                        rules={[{ required: true, message: "Membership ID is required" }]}
                    >
                        <Input placeholder="Enter membership ID" />
                    </Form.Item>

                    <Form.Item
                        name="dateRange"
                        label="Start & End Date"
                        rules={[{ required: true, message: "Date range required" }]}
                    >
                        <RangePicker />
                    </Form.Item>

                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[{ required: true, message: "Status required" }]}
                    >
                        <Select>
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="expired">Expired</Select.Option>
                        </Select>
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

export default SubscriptionPage;
