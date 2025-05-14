import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/Login'
import NaoEncontrado from './pages/NaoEncontrado'
import CadastrarLogin from './pages/CadastrarLogin'
import Gestao from './pages/Gestao'

import RotaProtegidaDiretor from './middlewares/RotaProtegidaDiretor'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/cadastrarLogin' element={<CadastrarLogin />} />
        <Route path='/gestao' element={<RotaProtegidaDiretor><Gestao /></RotaProtegidaDiretor>} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;