
import './App.css'
import WelcomeMessage from './components/RunOnMount/WelcomeMessage'
import ColorSplash from './components/RunOnMount/ColorSplash'
import MountNotice from './components/RunOnMount/MountNotice'
import PageTitle from './components/RunOnChange/PageTitle'
import CountDisplay from './components/RunOnChange/CountDisplay'
import ThemeBox from './components/RunOnChange/ThemeBox'
import MirrorInputs from './components/RunOnChange/MirrorInputs'
import Farewell from './components/RunOnUnmount/Farewell'
import UnmountTracker from './components/RunOnUnmount/UnmountTracker'
import SessionEnd from './components/RunOnUnmount/SessionEnd'
import Stopwatch from './components/Cleanup/Stopwatch'
import MousePosition from './components/Cleanup/MousePosition'
import WindowDimensions from './components/Cleanup/WindowDimensions'
import ColorFlasher from './components/Cleanup/ColorFlasher'
import KeyDisplay from './components/Cleanup/KeyDisplay'

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
      <Farewell />
      <UnmountTracker />
      <SessionEnd />
      <Stopwatch />
      <MousePosition />
      <WindowDimensions />
      <KeyDisplay />
      <ColorFlasher />
    </>
  )
}

export default App
