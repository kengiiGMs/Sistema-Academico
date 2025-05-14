import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import NaoEncontrado from './pages/NaoEncontrado'
import CadastrarLogin from './pages/CadastrarLogin'
import CadastrarLoginEstudante from './pages/CadastrarLoginEstudante'
import Gestao from './pages/Gestao'

import RotaProtegidaDiretor from './middlewares/RotaProtegidaDiretor'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastrarLogin' element={<CadastrarLogin />} />
        <Route path='/cadastrarLogin/estudante' element={<CadastrarLoginEstudante />} />
        <Route path='/gestao' element={<RotaProtegidaDiretor><Gestao /></RotaProtegidaDiretor>} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;