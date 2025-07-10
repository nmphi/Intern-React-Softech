// src/components/Alert.tsx
import React from 'react';
import { Alert as AntAlert } from 'antd';

type AlertProps = {
  type: 'success' | 'error' | 'info'| 'warning';
  message: string;
};

const Alert = ({ type, message }: AlertProps) => {
  if (!message) return null;

  return <AntAlert message={message} type={type} showIcon />;
};

export default Alert;
