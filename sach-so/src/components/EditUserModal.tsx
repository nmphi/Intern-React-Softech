import React, { useEffect } from 'react';
import { Modal, Form, Input, message } from 'antd';
import axios from 'axios';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  password?: string;
  role: string;
  creationAt?: string;
  updatedAt?: string;
}

interface EditUserModalProps {
  open: boolean;
  onCancel: () => void;
  onSuccess: () => void;
  user: User | null;
}

const EditUserModal: React.FC<EditUserModalProps> = ({ open, onCancel, onSuccess, user }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUser = async () => {
      if (user?.id && open) {
        try {
          const response = await axios.get<User>(`https://api.escuelajs.co/api/v1/users/${user.id}`);
          const data = response.data;
          form.setFieldsValue({
            email: data.email,
            name: data.name,
            avatar: data.avatar,
            password: '',
          });
          console.log('✅ Loaded user from API:', data);
        } catch (error) {
          console.error('❌ Failed to fetch user data', error);
          message.error('Failed to load user data');
        }
      }
    };

    fetchUser();
  }, [open, user?.id]);

  const handleSubmit = async (values: any) => {
    try {
      await axios.put(`https://api.escuelajs.co/api/v1/users/${user?.id}`, values);
      message.success('User updated successfully');
      form.resetFields();
      onSuccess();
    } catch (error) {
      message.error('Failed to update user');
    }
  };

  return (
    <Modal
      title="Chỉnh sửa người dùng"
      open={open}
      onCancel={onCancel}
      onOk={() => form.submit()}
      okText="Cập nhật"
    >
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Form.Item name="name" label="Họ và tên" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="Mật khẩu">
          <Input.Password />
        </Form.Item>

        <Form.Item name="avatar" label="Avatar URL">
          <Input />
        </Form.Item>

      </Form>
    </Modal>
  );
};

export default EditUserModal;
