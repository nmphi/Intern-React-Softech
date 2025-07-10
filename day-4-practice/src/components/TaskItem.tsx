// src/components/TaskItem.tsx
import React from 'react';
import { Checkbox, Typography } from 'antd';

const { Text } = Typography;

type TaskItemProps = {
  text: string;
  completed: boolean;
  onToggle: () => void;
};

const TaskItem = ({ text, completed, onToggle }: TaskItemProps) => {
  return (
    <div
      style={{
        padding: '0.5rem 1rem',
        marginBottom: '0.5rem',
        backgroundColor: completed ? '#e6f7ff' : '#fff',
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Checkbox checked={completed} onChange={onToggle}>
        <Text delete={completed} type={completed ? 'secondary' : undefined}>
          {text}
        </Text>
      </Checkbox>
    </div>
  );
};

export default TaskItem;
