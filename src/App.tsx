import './App.css'
import { SplashScreen } from './components/SplashScreen/SplashScreen'

function App() {
  return (
    <>
      <SplashScreen
        header="Panini Creator"
        btnText="BEGIN"
        btnFnc={() => {
          null
        }}
      />
    </>
  )
}

export default App
