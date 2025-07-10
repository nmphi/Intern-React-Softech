// src/components/TaskList.tsx
import React, { useState } from 'react';
import TaskItem from './TaskItem';
import { Typography, Input, Button } from 'antd';

const { Title } = Typography;

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: 'Complete project documentation', completed: false },
    { id: 2, text: 'Review code changes', completed: true },
    { id: 3, text: 'Update dependencies', completed: false },
    { id: 4, text: 'Write unit tests', completed: false },
    { id: 5, text: 'Deploy to staging', completed: true },
    { id: 6, text: 'Conduct team meeting', completed: false },
    { id: 7, text: 'Fix reported bugs', completed: false },
    { id: 8, text: 'Optimize database queries', completed: true },
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  const handleToggle = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleAddTask = () => {
    if (newTaskText.trim()) {
      setTasks(prev => [
        ...prev,
        { id: Date.now(), text: newTaskText, completed: false },
      ]);
      setNewTaskText('');
    }
  };

  const handleClearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto' }}>
      <Title level={4}>Task List</Title>
      <p>{completedCount} of {tasks.length} tasks completed</p>

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          text={task.text}
          completed={task.completed}
          onToggle={() => handleToggle(task.id)}
        />
      ))}

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <Input
          placeholder="New task"
          value={newTaskText}
          onChange={e => setNewTaskText(e.target.value)}
        />
        <Button type="primary" onClick={handleAddTask}>Add Task</Button>
        <Button danger onClick={handleClearCompleted}>Clear Completed</Button>
      </div>
    </div>
  );
};

export default TaskList;
