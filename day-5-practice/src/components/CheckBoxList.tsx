import { useState } from 'react';
import { Checkbox } from 'antd';

const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Mango'];

const CheckBoxList = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleChange = (checkedValues: any) => {
    setSelectedItems(checkedValues);
  };

  return (
    <div>
      <Checkbox.Group value={selectedItems} onChange={handleChange}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {items.map((item) => (
            <Checkbox
              key={item}
              value={item}
              style={{ color: 'white' }} // 👈 white font
            >
              {item}
            </Checkbox>
          ))}
        </div>
      </Checkbox.Group>

      <div style={{ marginTop: '1rem', color: 'white' }}>
        <strong>Selected Items:</strong>
        <ul>
          {selectedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CheckBoxList;
