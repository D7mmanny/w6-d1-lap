import './App.css'
import Apibu from './Pages/Apibu'
import {Routes,Route} from 'react-router-dom'
import Card from './Pages/Card'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Apibu/>}/>
      <Route path='/CharDetails/:id' element={<Card/>}/>

    </Routes>
    </>
  )
}

export default App
