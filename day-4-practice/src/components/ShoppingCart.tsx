// src/components/ShoppingCart.tsx
import React, { useState } from 'react';
import { List, Input, Button, Typography, Space } from 'antd';
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';

const { Text } = Typography;

type Product = {
  id: number;
  name: string;
};

const ShoppingCart = () => {
  const [items, setItems] = useState<Product[]>([
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
  ]);
  const [newItem, setNewItem] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');

  // Add new product
  const handleAdd = () => {
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem.trim() }]);
      setNewItem('');
    }
  };

  // Delete product
  const handleDelete = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Start editing a product
  const handleEdit = (id: number, name: string) => {
    setEditingId(id);
    setEditValue(name);
  };

  // Save edited product
  const handleSave = (id: number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, name: editValue.trim() } : item
      )
    );
    setEditingId(null);
    setEditValue('');
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', background: '#f9f9f9', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
    

      {/* Add Product Input */}
      <Space style={{ marginBottom: '1rem' }}>
        <Input
          placeholder="Enter product name"
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          onPressEnter={handleAdd}
        />
        <Button type="primary" onClick={handleAdd}>
          Add Product
        </Button>
      </Space>

      {/* Product List */}
      <List
        bordered
        dataSource={items}
        renderItem={item => (
          <List.Item
            actions={[
              editingId === item.id ? (
                <Button
                  icon={<SaveOutlined />}
                  onClick={() => handleSave(item.id)}
                  type="link"
                />
              ) : (
                <Button
                  icon={<EditOutlined />}
                  onClick={() => handleEdit(item.id, item.name)}
                  type="link"
                />
              ),
              <Button
                icon={<DeleteOutlined />}
                danger
                type="link"
                onClick={() => handleDelete(item.id)}
              />,
            ]}
          >
            {editingId === item.id ? (
              <Input
                value={editValue}
                onChange={e => setEditValue(e.target.value)}
                onPressEnter={() => handleSave(item.id)}
              />
            ) : (
              <Text>{item.name}</Text>
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default ShoppingCart;
