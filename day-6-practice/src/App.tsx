import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/RunOnMount/WelcomeMessage'
import ColorSplash from './components/RunOnMount/ColorSplash'
import MountNotice from './components/RunOnMount/MountNotice'
import PageTitle from './components/RunOnChange/PageTitle'
import CountDisplay from './components/RunOnChange/CountDisplay'
import ThemeBox from './components/RunOnChange/ThemeBox'
import MirrorInputs from './components/RunOnChange/MirrorInputs'

function App() {
  

  return (
    <>
      <WelcomeMessage />
      <ColorSplash />
      <MountNotice />
      <PageTitle />
      <CountDisplay />
      <ThemeBox />
      <MirrorInputs />
    </>
  )
}

export default App
