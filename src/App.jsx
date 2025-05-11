import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import NaoEncontrado from './pages/NaoEncontrado'
import Home from './pages/Home'
import RotaProtegida from './middlewares/RotaProtegida'
import CadastrarLogin from './pages/CadastrarLogin'
import Gestao from './pages/Gestao'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastrarLogin' element={<CadastrarLogin />} />
        <Route path='/home' element={<RotaProtegida><Home /></RotaProtegida>} />
        <Route path='/gestao' element={<RotaProtegida><Gestao /></RotaProtegida>} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;