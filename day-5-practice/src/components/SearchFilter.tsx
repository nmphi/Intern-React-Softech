import { useState } from 'react';
import { Input, List } from 'antd';

const dataList = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple', 'Strawberry'];

const SearchFilter = () => {
  const [query, setQuery] = useState<string>('');

  const filteredList = dataList.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Input
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ marginBottom: '1rem' }}
      />

      <List
        bordered
        dataSource={filteredList}
        renderItem={(item) => (
          <List.Item style={{ color: 'white', backgroundColor: '#1f1f1f' }}>
            {item}
          </List.Item>
        )}
        style={{ backgroundColor: '#1f1f1f' }}
      />
    </div>
  );
};

export default SearchFilter;
