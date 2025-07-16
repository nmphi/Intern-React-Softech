
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Button, Row, Col } from 'antd';
import styles from './Projects.module.css';

const { Title, Paragraph } = Typography;

const projectData = [
  {
    id: '1',
    title: 'Project One',
    description: 'This is a brief description of Project One. It showcases important skills and design decisions.'
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'This project involved building a responsive UI and connecting to a REST API.'
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'An advanced React application demonstrating routing, context API, and performance optimization.'
  },
  {
    id: '4',
    title: 'Project Four',
    description: 'This project highlights my experience with animations and complex state management.'
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Title level={2} className={styles.heading}>My Projects</Title>
      <Row gutter={[24, 24]} justify="center">
        {projectData.map((project) => (
          <Col key={project.id} xs={24} sm={12} md={8} lg={6}>
            <Card title={project.title} bordered className={styles.card}>
              <Paragraph>{project.description}</Paragraph>
              <Button type="link" onClick={() => navigate(`/projects/${project.id}`)}>
                View Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Projects;
