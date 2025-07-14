import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleButton from './components/ToggleButton'
import Counter from './components/Counter'
import InputDisplay from './components/InputDisplay'
import ColorPicker from './components/ColorPicker'
import Form from './components/Form'
import CheckBoxList from './components/CheckBoxList'
import HoverBox from './components/HoverBox'
import SearchFilter from './components/SearchFilter'


function App() {
  const taskStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1.5rem',
  backgroundColor: 'black',
};

  return (
    <>
      <div style={taskStyle}>
        <h2>1. Toggle Button</h2>
        <ToggleButton />
      </div>

      <div style={taskStyle}>
        <h2>2. Counter</h2>
        <Counter />
      </div>

      <div style={taskStyle}>
        <h2>3. Input Display</h2>
        <InputDisplay />
      </div>
      <div style={taskStyle}>
        <h2>4. Color Picker</h2>
        <ColorPicker />
      </div>
      <div style={taskStyle}>
        <h2>5. Form</h2>
        <Form />
      </div>
      <div style={taskStyle}>
        <h2>6. CheckBox List</h2>
        <CheckBoxList />
      </div>
      <div style={taskStyle}>
        <h2>7. Hover Box</h2>
        <HoverBox />
      </div>
      <div style={taskStyle}>
        <h2>8. Search Filter</h2>
        <SearchFilter />
      </div>
    </> 
  )
}

export default App
