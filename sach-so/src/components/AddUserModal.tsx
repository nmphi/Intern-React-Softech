import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import axios from 'axios';

interface AddUserModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
}

const AddUserModal: React.FC<AddUserModalProps> = ({ open, onCancel, onSuccess }) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    try {
      await axios.post('https://api.escuelajs.co/api/v1/users', values);
      message.success('User created successfully');
      form.resetFields();
      onSuccess();
    } catch (error) {
      message.error('Failed to create user');
    }
  };

  return (
    <Modal
      title="Thêm người dùng mới"
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText="Tạo mới"
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{
          avatar: 'https://picsum.photos/800'
        }}
      >
        <Form.Item name="name" label="Họ và tên" rules={[{ required: true }]}> <Input /> </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}> <Input /> </Form.Item>
        <Form.Item name="password" label="Mật khẩu" rules={[{ required: true }]}> <Input.Password /> </Form.Item>
        <Form.Item name="avatar" label="Avatar URL"> <Input /> </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddUserModal;