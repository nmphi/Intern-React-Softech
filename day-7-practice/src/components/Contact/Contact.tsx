// File: src/components/Contact/Contact.tsx
import React, { useState } from 'react';
import { Card, Typography, Input, Button, Form } from 'antd';
import styles from './Contact.module.css';

const { Title } = Typography;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card} bordered>
        <Title level={2}>Contact Me</Title>
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Name">
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </Form.Item>

          <Form.Item label="Email">
            <Input name="email" value={formData.email} onChange={handleChange} required />
          </Form.Item>

          <Form.Item label="Message">
            <Input.TextArea name="message" value={formData.message} onChange={handleChange} rows={4} required />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Send Message
            </Button>
          </Form.Item>
        </Form>
        <div className={styles.footer}>
          <p>Email: yourname@example.com</p>
          <p>LinkedIn: linkedin.com/in/yourname</p>
        </div>
      </Card>
    </div>
  );
};

export default Contact;
