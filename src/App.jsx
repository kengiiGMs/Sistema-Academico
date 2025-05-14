import { BrowserRouter, Route, Routes } from 'react-router-dom'

import LoginDiretor from './pages/LoginDiretor'
import NaoEncontrado from './pages/NaoEncontrado'
import CadastrarLoginDiretor from './pages/CadastrarLoginDiretor'
import CadastrarLoginEstudante from './pages/CadastrarLoginEstudante'
import Gestao from './pages/Gestao'

import RotaProtegidaDiretor from './middlewares/RotaProtegidaDiretor'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/diretor' element={<LoginDiretor />} />
        <Route path='/diretor/cadastrarLogin' element={<CadastrarLoginDiretor />} />
        <Route path='/gestao' element={<RotaProtegidaDiretor><Gestao /></RotaProtegidaDiretor>} />

        <Route path='/cadastrarLogin' element={<CadastrarLoginEstudante />} />

        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;