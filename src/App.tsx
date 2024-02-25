import { StrictMode } from 'react'
import './App.css'
import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { PaniniForm } from './components/PaniniForm/PaniniForm'

function App() {
  const [isAppBegan, setIsAppBegan] = useState(false)
  const [isFormEnd, setIsFormEnd] = useState(false)

  const handleStartEndButtons = () => {
    setIsAppBegan((prev) => !prev)
  }
  const handleEndForm = () => {
    handleStartEndButtons()
    setIsFormEnd(true)
  }

  return (
    <StrictMode>
      <SplashScreen
        header={isFormEnd ? 'Panini ordered' : 'Panini Creator'}
        btnText={isFormEnd ? 'START AGAIN' : 'BEGIN'}
        btnFnc={handleStartEndButtons}
        isClosing={isAppBegan}
      />
      <PaniniForm isOpened={isAppBegan} endFormFnc={handleEndForm} />
    </StrictMode>
  )
}

export default App
