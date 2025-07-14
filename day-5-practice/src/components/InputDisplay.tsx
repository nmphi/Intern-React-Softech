import { useState } from 'react';

const InputDisplay = () => {
  const [input, setInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      <p>You typed: {input}</p>
    </div>
  );
};

export default InputDisplay;
