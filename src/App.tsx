import './App.css'
import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'

function App() {
  const [appState, setAppState] = useState<'start' | 'form' | 'end'>('start')
  const [isClosing, setIsClosing] = useState(false)

  const handleOpenForm = () => {
    // setAppState('form')
    setIsClosing((prev) => !prev)
  }

  return (
    <>
      {appState === 'start' ? (
        <SplashScreen
          header="Panini Creator"
          btnText="BEGIN"
          btnFnc={() => {
            handleOpenForm()
          }}
          isClosing={isClosing}
        />
      ) : null}
      {appState === 'form' ? 'FORM' : null}
      {appState === 'end' ? 'END' : null}
    </>
  )
}

export default App
