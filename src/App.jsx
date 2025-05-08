import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Login from './pages/login'
import NaoEncontrado from './pages/NaoEncontrado'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;