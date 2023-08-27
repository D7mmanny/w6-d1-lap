import './App.css'
import Apibu from './Pages/Apibu'
import {Routes,Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Apibu/>}/>
    </Routes>
    </>
  )
}

export default App
