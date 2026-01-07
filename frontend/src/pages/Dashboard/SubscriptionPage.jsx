import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Table, Tag, message, DatePicker, Select } from "antd";
import { useState } from "react";
import { usecreateSubscription, getAllSubscription, useDeleteSubscription, useUpdateSubscription } from "../../utils/subscriptionApi";
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
    const { mutate: updateSub } = useUpdateSubscription()

    const columns = [
        {
            title: "Membership Name",
            dataIndex: "membershipName",
            key: "membershipName",
        },
        {
            title: "Amount",
            dataIndex: "amount",
            key: "amount",
        },
        {
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
        },
        {
            title: "Features",
            dataIndex: "features",
            key: "features",
            render: (features) =>
                features?.map((f, i) => <Tag key={i}>{f}</Tag>)
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status) => (
                <Tag color={status === "active" ? "green" : "red"}>
                    {status}
                </Tag>
            ),
        },
        {
            title: "Action",
            render: (record) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => HandleOpenUpdateModal(record)}
                        className="bg-blue-500 text-white px-3 py-1"
                    >
                        Update
                    </button>
                    <button
                        onClick={() => onHandleDelete(record._id)}
                        className="bg-red-500 text-white px-3 py-1"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const onCreateFormSubmit = (values) => {
        const payLoad = {
            membershipName: values.membershipName,
            desc: values.desc,
            amount: values.amount,
            duration: values.duration,
            features: values.features,
            status: values.status,
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
            membershipName: value.membershipName,
            desc: value.desc,
            amount: value.amount,
            duration: value.duration,
            features: value.features,
            status: value.status,
        })
        setOpenUpdateModal(true)
    }
    const onUpdateFormSubmit = (value) => {
        const payload = {
            membershipName: value.membershipName,
            desc: value.desc,
            amount: value.amount,
            duration: value.duration,
            features: value.features,
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
                        name="membershipName"
                        label="Membership Name"
                        rules={[{ required: true, message: "Membership Name is required" }]}
                    >
                        <Input placeholder="Enter membership name" />
                    </Form.Item>

                    <Form.Item
                        name="desc"
                        label="Description"
                        rules={[{ required: true, message: "Description is required" }]}
                    >
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item
                        name="amount"
                        label="Amount"
                        rules={[{ required: true, message: "Amount is required" }]}
                    >
                        <Input placeholder="Enter amount" />
                    </Form.Item>

                    <Form.Item
                        name="duration"
                        label="Duration"
                        rules={[{ required: true, message: "Duration is required" }]}
                    >
                        <Input placeholder="Enter duration, e.g., 1 month" />
                    </Form.Item>
                    <Form.Item
                        name="features"
                        label="Features"
                        rules={[{ required: true, message: "Features are required" }]}
                    >
                        <Select mode="tags" placeholder="Enter features">
                            {/* Users can type features freely */}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[{ required: true, message: "Status required" }]}
                    >
                        <Select>
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
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
                        name="membershipName"
                        label="Membership Name"
                        rules={[{ required: true, message: "Membership Name is required" }]}
                    >
                        <Input placeholder="Enter membership name" />
                    </Form.Item>

                    <Form.Item
                        name="desc"
                        label="Description"
                        rules={[{ required: true, message: "Description is required" }]}
                    >
                        <Input.TextArea placeholder="Enter description" />
                    </Form.Item>

                    <Form.Item
                        name="amount"
                        label="Amount"
                        rules={[{ required: true, message: "Amount is required" }]}
                    >
                        <Input placeholder="Enter amount" />
                    </Form.Item>

                    <Form.Item
                        name="duration"
                        label="Duration"
                        rules={[{ required: true, message: "Duration is required" }]}
                    >
                        <Input placeholder="Enter duration, e.g., 1 month" />
                    </Form.Item>
                    <Form.Item
                        name="features"
                        label="Features"
                        rules={[{ required: true, message: "Features are required" }]}
                    >
                        <Select mode="tags" placeholder="Enter features">
                            {/* Users can type features freely */}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="Status"
                        rules={[{ required: true, message: "Status required" }]}
                    >
                        <Select>
                            <Select.Option value="active">Active</Select.Option>
                            <Select.Option value="inactive">Inactive</Select.Option>
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
