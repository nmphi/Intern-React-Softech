// src/components/SettingsPanel.tsx
import React from 'react';
import { Card } from 'antd';
import DisplaySetting from './DisplaySetting';

type SettingsPanelProps = {
  theme: 'light' | 'dark';
};

const SettingsPanel = ({ theme }: SettingsPanelProps) => {
  const isDark = theme === 'dark';

  return (
    <Card
      title="Settings Panel"
      style={{
        margin: '1rem auto',
        width: 400,
        backgroundColor: isDark ? '#1f1f1f' : '#ffffff',
        color: isDark ? '#ffffff' : '#000000',
        border: isDark ? '1px solid #434343' : '1px solid #d9d9d9',
        borderRadius: 12,
      }}
      headStyle={{
        backgroundColor: isDark ? '#141414' : '#fafafa',
        color: isDark ? '#ffffff' : '#000000',
      }}
      bodyStyle={{
        color: isDark ? '#ffffff' : '#000000',
      }}
    >
      <DisplaySetting theme={theme} />
    </Card>
  );
};

export default SettingsPanel;
