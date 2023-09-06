import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './Templates/Layout'
import Home from './Pages/Home'
import Searched from './Pages/Searched'
import Watch from './Pages/Watch'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/watch' element={<Watch />}/>
          <Route path='/results' element={<Searched />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
