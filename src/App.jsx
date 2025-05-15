import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NaoEncontrado from './pages/NaoEncontrado'
import Login from './pages/Login'
import Gestao from './pages/Gestao'
import Home from './pages/Home'

import RotaProtegidaDiretor from './middlewares/RotaProtegidaDiretor'
import RotaProtegidaUsuario from './middlewares/RotaProtegidaUsuario'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/gestao' element={<RotaProtegidaDiretor><Gestao /></RotaProtegidaDiretor>} />
        <Route path='/home' element={<RotaProtegidaUsuario><Home /></RotaProtegidaUsuario>} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;