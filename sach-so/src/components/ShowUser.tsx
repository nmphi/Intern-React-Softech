import React, { useEffect, useState } from 'react';
import { Table, Select, Input, Button, Tag, Space, message } from 'antd';
import { EditOutlined, EyeOutlined, DeleteOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import axios from 'axios';
import AddUserModal from './AddUserModal.tsx';
import EditUserModal from './EditUserModal.tsx';
import type { ColumnsType } from 'antd/es/table';


const { Option } = Select;

interface User {
  id: number;
  name: string;
  email: string;
  password?: string;
  avatar: string;
  role: string;
  creationAt?: string;
  updatedAt?: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterEmail, setFilterEmail] = useState<string>('');
  const [filterRole, setFilterRole] = useState<string>('Tất cả');

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get<User[]>('https://api.escuelajs.co/api/v1/users');
      const dataWithCreatedAt = response.data.map(user => ({
        ...user,
        createdAt: user.creationAt
      }));
      setUsers(dataWithCreatedAt);
      setFilteredUsers(dataWithCreatedAt);
    } catch (error) {
      message.error('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const fetchAndSetUser = async (userId: number) => {
    try {
      const res = await axios.get<User>(`https://api.escuelajs.co/api/v1/users/${userId}`);
      setSelectedUser(res.data);
      setEditModalOpen(true);
    } catch (err) {
      message.error('Không thể tải dữ liệu người dùng');
    }
  };

  const handleEditUser = (user: User) => {
    if (user?.id) {
      fetchAndSetUser(user.id);
    }
  };

  const handleFilter = () => {
    let filtered = [...users];

    if (filterEmail.trim()) {
      filtered = filtered.filter(user => user.email.toLowerCase().includes(filterEmail.toLowerCase()));
    }

    if (filterRole !== 'Tất cả') {
      filtered = filtered.filter(user => user.role === filterRole);
    }

    setFilteredUsers(filtered);
  };

  const columns: ColumnsType<User> = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (avatar: string) => <img src={avatar} alt="avatar" style={{ width: 32, height: 32, borderRadius: '50%' }} />,
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Vai trò',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date?: string) => date ? new Date(date).toLocaleString() : '',
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_: unknown, record: User) => (
        <Space>
          <Button icon={<EditOutlined />} onClick={() => handleEditUser(record)} />
          <Button icon={<EyeOutlined />} />
          <Button icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      
      <h2>Quản lý người dùng</h2>
      
      <Space style={{ marginBottom: 16 }} wrap>
        <Select value={filterRole} onChange={setFilterRole} style={{ width: 120 }}>
          <Option value="Tất cả">Tất cả</Option>
          <Option value="customer">customer</Option>
          <Option value="admin">admin</Option>
        </Select>
        <Input
          placeholder="Email"
          value={filterEmail}
          onChange={(e) => setFilterEmail(e.target.value)}
          style={{ width: 200 }}
        />
        <Button type="primary" onClick={handleFilter}>Tìm kiếm</Button>
        <Button icon={<PlusOutlined />} type="primary" onClick={() => setModalOpen(true)}>
          Thêm người dùng
        </Button>
        <Button icon={<UploadOutlined />}>Nhập từ excel</Button>
      </Space>
      <Table
        dataSource={filteredUsers}
        columns={columns}
        rowKey="id"
        loading={loading}
        pagination={{ pageSize: 10 }}
      />

      <AddUserModal
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false);
          fetchUsers();
        }}
      />

      <EditUserModal
        open={editModalOpen}
        onCancel={() => setEditModalOpen(false)}
        user={selectedUser}
        onSuccess={() => {
          setEditModalOpen(false);
          fetchUsers();
        }}
      />
    </div>
  );
};

export default UserManagement;
