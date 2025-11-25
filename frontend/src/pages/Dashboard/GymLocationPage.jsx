import { InboxOutlined } from "@ant-design/icons"
import { useQuery } from "@tanstack/react-query"
import { Button, Form, Image, Input, message, Modal, Table } from "antd"
import Dragger from "antd/es/upload/Dragger"
import { useState } from "react"
import { getGymlocation, useCreateGymLocation } from "../../utils/gymlocationApi"



function GymLocationPage() {

    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [form]= Form.useForm()

    const {data,isLoading,refetch} = useQuery({
        queryKey:"getGymLocation",
        queryFn:()=>getGymlocation()
    })

    const {mutate:createGym}=useCreateGymLocation()

    console.log({data});
    

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
            render:(text)=>(
                    <Image src={`${text}`} />
            )
        },

        
    ]

    
    const onCreateFormSubmit = (values)=>{
           console.log(values);
            let image;
           if (values.cardImage.file.originFileObj){
                image=values.cardImage.file.originFileObj
           }else{
            message.error("image required")
           }

           const payLoad = {
            name:values.name,
            cardImage:image
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
           
            
    }

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
                    <Form.Item name={'cardImage'} label="Image" rules={[{required:true,message:"image required"}]}>
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