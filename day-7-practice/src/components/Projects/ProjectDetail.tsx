// File: src/components/Projects/ProjectDetail.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Typography, Button } from 'antd';
import styles from './ProjectDetail.module.css';

const { Title, Paragraph } = Typography;

const projectDetails = {
  '1': {
    title: 'Project One',
    description: 'Detailed info about Project One. It demonstrates layout design and component modularity.'
  },
  '2': {
    title: 'Project Two',
    description: 'Project Two focuses on API integration, error handling, and async flows.'
  },
  '3': {
    title: 'Project Three',
    description: 'React context, performance optimization, and advanced hooks in action.'
  },
  '4': {
    title: 'Project Four',
    description: 'Covers animations, transitions, and managing complex app state.'
  }
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id && id in projectDetails ? projectDetails[id as keyof typeof projectDetails] : null;


  if (!project) {
    return (
      <div className={styles.container}>
        <Title level={3}>Project not found.</Title>
        <Link to="/projects">
          <Button type="primary">Back to Projects</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Card bordered className={styles.card}>
        <Title>{project.title}</Title>
        <Paragraph>{project.description}</Paragraph>
        <Link to="/projects">
          <Button type="primary">Back to Projects</Button>
        </Link>
      </Card>
    </div>
  );
};

export default ProjectDetail;
