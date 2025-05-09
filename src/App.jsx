import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import NaoEncontrado from './pages/NaoEncontrado'
import Home from './pages/Home'
import RotaProtegida from './middlewares/RotaProtegida'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<RotaProtegida><Home /></RotaProtegida>} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;