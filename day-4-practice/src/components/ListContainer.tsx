// src/components/ListContainer.tsx
import React, { useState } from 'react';
import { Button } from 'antd';

const ListContainer = () => {
  const [showList, setShowList] = useState(true);

  const items = ['🍎 Apple', '🍌 Banana', '🍇 Grape', '🍉 Watermelon'];

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '2rem auto',
        background: '#fff',
        borderRadius: 10,
        padding: '1.5rem',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      

      <Button
        type="primary"
        onClick={() => setShowList((prev) => !prev)}
        style={{ marginBottom: '1rem' }}
      >
        {showList ? 'Hide List' : 'Show List'}
      </Button>

      {showList && (
        <ul style={{ paddingLeft: '1.2rem' }}>
          {items.map((item, index) => (
            <li key={index} style={{ marginBottom: 6, color: 'black' }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ListContainer;
