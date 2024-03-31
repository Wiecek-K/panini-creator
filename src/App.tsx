import { StrictMode } from 'react'
import './App.css'
import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { PaniniForm } from './components/PaniniForm/PaniniForm'

function App() {
  const [isAppBegan, setIsAppBegan] = useState(false)
  const [isFormEnd, setIsFormEnd] = useState(false)

  const handleStartEndButtonsReplace = () => {
    setIsAppBegan((prev) => !prev)
  }

  const showSuccessScreen = () => {
    handleStartEndButtonsReplace()
    setIsFormEnd(true)
  }

  return (
    <StrictMode>
      <SplashScreen
        header={isFormEnd ? 'Panini ordered' : 'Panini Creator'}
        btnText={isFormEnd ? 'START AGAIN' : 'BEGIN'}
        btnFnc={handleStartEndButtonsReplace}
        isClosing={isAppBegan}
      />
      <PaniniForm isOpened={isAppBegan} showSuccessScreen={showSuccessScreen} />
    </StrictMode>
  )
}

export default App
