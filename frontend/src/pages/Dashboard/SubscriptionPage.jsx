import { InboxOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Input, Modal, Table, Tag, message, DatePicker, Select } from "antd";
import { useState } from "react";
import { usecreateSubscription, getAllSubscription, useDeleteSubscription } from "../../utils/subscriptionApi";
import { toast } from 'react-toastify';

const { RangePicker } = DatePicker;

function SubscriptionPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [form] = Form.useForm()

    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getAllSubscription"],
        queryFn: getAllSubscription
    });

    const { mutate: createSub } = usecreateSubscription()
    const { mutate: deleteSub } = useDeleteSubscription()

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
            title: "action",
            key: "id",
            render: (record) => (
                <div>
                    <button onClick={() => onHandleDelete(record._id)}>Delete</button>
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
        </>
    );
}

export default SubscriptionPage;
