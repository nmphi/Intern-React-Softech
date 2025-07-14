import { useState } from 'react';

const HoverBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        padding: '2rem',
        textAlign: 'center',
        border: '2px dashed #999',
        borderRadius: '8px',
        backgroundColor: isHovered ? '#3f3f3f' : '#1f1f1f',
        color: 'white',
        transition: 'all 0.3s ease',
      }}
    >
      {isHovered ? 'You are hovering over me!' : 'Hover over this box'}
    </div>
  );
};

export default HoverBox;
