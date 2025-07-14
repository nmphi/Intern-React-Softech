import { useState } from 'react';

const colors = ['red', 'green', 'blue', 'orange', 'purple'];

const ColorPicker = () => {
  const [bgColor, setBgColor] = useState<string>('white');

  return (
    <div
      style={{
        backgroundColor: bgColor,
        padding: '1rem',
        borderRadius: '8px',
        transition: 'background-color 0.3s ease',
      }}
    >
      <p>Click a button to change background color:</p>
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setBgColor(color)}
          style={{
            backgroundColor: color,
            color: '#fff',
            marginRight: '0.5rem',
            padding: '0.5rem 1rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;
