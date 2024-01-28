import './App.css'
import { useEffect, useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { Form } from './components/Form/Form'

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
          <Form isOpened={isAppBegan} endFormFnc={handleEndForm} />
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
