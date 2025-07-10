import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile.tsx'
import Button1 from './components/Button.tsx'
import Alert from './components/Alert.tsx'
import PostList from './components/PostList.tsx'
import DataLoader from './components/DataLoader.tsx'
import AuthPanel from './components/AuthPanel.tsx'
import LikeButton from './components/LikeButton.tsx'
import FeedbackForm from './components/FeedbackForm.tsx'
import SettingsPanel from './components/SettingsPanel.tsx'
import { Button, Card } from 'antd';
import BookList from './components/BookList.tsx'
import ProductCard from './components/ProductCard.tsx'
import ProductGrid from './components/ProductGrid.tsx'
import TaskList from './components/TaskList.tsx'
import ShoppingCart from './components/ShoppingCart.tsx'
import ListContainer from './components/ListContainer.tsx'

function App() {

  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };
  const sampleBooks = [
    { id: 1, title: 'The Pragmatic Programmer', author: 'Andy Hunt', year: 1999 },
    { id: 2, title: 'Clean Code', author: 'Robert C. Martin', year: 2008 },
    { id: 3, title: 'Atomic Habits', author: 'James Clear', year: 2018 },
  ];


  return (
    <>
      <div>
        <h2>Task 1, Task 2</h2>
        <UserProfile name="Tung " age={23} bio='hello' />
        <UserProfile name="Minh Phi" age={22} bio='hello' />
      </div>

      <div>
        <h2>Task 3</h2>
        <Button1 text="Submit" type="primary" />
        <Button1 text="Cancel" type="outline" />
        <Button1 text="Default" type="default" />
        <Button1 text="Read More" type="link" />
      </div>
      <div>
        <h2>Task 4</h2>

        <Alert type="success" message="Data saved successfully!" />
        <Alert type="error" message="Something went wrong!" />
        <Alert type="warning" message="This is a warning message." />
        <Alert type="info" message="This is an informational message." />
        <Alert type="info" message="" /> {/* This one won't render */}
      </div>
      <div>
        <h2>Task 5, Task 6, Task 20</h2>
        <PostList />
      </div>
      <div>
        <h2>Task 7</h2>
        <DataLoader />
      </div>
      <div>
        <h2>Task 8</h2>
        <AuthPanel />
      </div>
      <div>
        <h2>Task 9</h2>
        <LikeButton />
      </div>
      <div>
        <h2>Task 10</h2>
        <FeedbackForm />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Task 11, Task 19</h2>
        <Button onClick={toggleTheme} style={{ marginBottom: '1rem' }}>
          Toggle Theme
        </Button>

        <SettingsPanel theme={theme} />
      </div>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Task 12</h2>
        <BookList books={sampleBooks} />
      </div>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Task 13</h2>

        <ProductGrid />
      </div>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Task 14</h2>

        <TaskList />
      </div>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Task 15, Task 17</h2>

        <ShoppingCart />
      </div>
      <div style={{ padding: '2rem' }}>
        <h2 style={{ textAlign: 'center' }}>Task 16</h2>

        <ListContainer />
      </div>
      <div style={{ maxWidth: 500, margin: '2rem auto' }}>
        <h2>Task 18</h2>
      <Card>
        <UserProfile name="Alice" age={28} bio="Frontend Developer from NYC" />
      </Card>

      <Card>
        <Button1 text="Confirm" type="primary" />
        <Button1 text="Cancel" type="default" />
      </Card>
    </div>
    </>

  )
}

export default App
