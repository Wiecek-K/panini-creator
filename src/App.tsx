import './App.css'
import { useState } from 'react'
import { SplashScreen } from './components/SplashScreen/SplashScreen'
import { Form } from './components/Form/Form'
import { CSSTransition } from 'react-transition-group'

function App() {
  const [isClosing, setIsClosing] = useState(false)
  const [isEnd, setIsEnd] = useState(false)

  const handleOpenForm = () => {
    // setAppState('form')
    setIsClosing((prev) => !prev)
  }

  return (
    <>
      {!isEnd && (
        <>
          <SplashScreen
            header="Panini Creator"
            btnText="BEGIN"
            btnFnc={() => {
              handleOpenForm()
            }}
            isClosing={isClosing}
          />
          <Form isOpened={isClosing} />
        </>
      )}

      {isEnd && null}
    </>
  )
}

export default App
