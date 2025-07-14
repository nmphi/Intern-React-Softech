import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span style={{ margin: '0 1rem' }}>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
