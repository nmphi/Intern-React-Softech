// File: src/components/About/About.tsx
import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { NavLink } from 'react-router-dom';
import styles from './About.module.css';

const { Title, Paragraph } = Typography;

const About: React.FC = () => {
  const [showSkills, setShowSkills] = useState<boolean>(false);

  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];

  return (
    <div className={styles.container}>
      <Card className={styles.card} bordered>
        <Title level={2}>About Me</Title>
        <Paragraph>
          I’m a frontend developer with a passion for clean and user-friendly interfaces. I enjoy turning complex
          problems into simple, beautiful designs. I’ve worked with various tools and technologies to build web
          applications that are fast, responsive, and accessible.
        </Paragraph>
        <Paragraph>
          When I'm not coding, I enjoy reading tech blogs, contributing to open-source projects, and exploring new
          frameworks.
        </Paragraph>

        <Button type="primary" onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? 'Hide Skills' : 'Show Skills'}
        </Button>

        {showSkills && (
          <ul className={styles.skillsList}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        )}

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.inactiveLink
          }
        >
          View My Projects
        </NavLink>
      </Card>
    </div>
  );
};

export default About;
