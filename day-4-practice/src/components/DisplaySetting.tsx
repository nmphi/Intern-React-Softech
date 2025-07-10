// src/components/DisplaySetting.tsx
import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

type DisplaySettingProps = {
  theme: 'light' | 'dark';
};

const DisplaySetting = ({ theme }: DisplaySettingProps) => {
  return (
    <Text>
      🌗 Current theme: <strong>{theme}</strong>
    </Text>
  );
};

export default DisplaySetting;
