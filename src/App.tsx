import './App.css'
import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { PaniniForm } from './components/PaniniForm/PaniniForm'

function App() {
  const [isAppBegan, setIsAppBegan] = useState(false)
  const [isFormEnd, setIsFormEnd] = useState(false)

  const handleOpenForm = () => {
    setIsAppBegan((prev) => !prev)
  }
  const handleEndForm = () => {
    setIsFormEnd(true)
  }

  return (
    <>
      {!isFormEnd && (
        <>
          <SplashScreen
            header="Panini Creator"
            btnText="BEGIN"
            btnFnc={() => {
              handleOpenForm()
            }}
            isClosing={isAppBegan}
          />
          <PaniniForm isOpened={isAppBegan} endFormFnc={handleEndForm} />
        </>
      )}

      {isFormEnd && (
        <SplashScreen
          header="Panini ordered"
          btnText="START AGAIN"
          btnFnc={() => {
            null
          }}
          isClosing={isAppBegan}
        />
      )}
    </>
  )
}

export default App
