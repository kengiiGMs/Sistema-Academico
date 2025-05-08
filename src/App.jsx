import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import NaoEncontrado from './pages/NaoEncontrado'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;