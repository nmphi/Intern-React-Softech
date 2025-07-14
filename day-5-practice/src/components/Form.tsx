import { Form, Input, Button, message } from 'antd';

const CustomForm = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: { name: string; email: string }) => {
    console.log('Submitted:', values);

    // Show notification
    alert(`Submitted:\nName: ${values.name}\nEmail: ${values.email}`);

    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        label={<span style={{ color: 'white' }}>Name</span>}
        name="name"
        rules={[{ required: true, message: 'Please enter your name!' }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>

      <Form.Item
        label={<span style={{ color: 'white' }}>Email</span>}
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Invalid email format!' },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomForm;
