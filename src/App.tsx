import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Privacy from './pages/Privacy'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Privacy />} path="/apps/motorsport-weekend/privacy" />
      <Route element={<ProjectDetail />} path="/projects/:slug" />
    </Routes>
  )
}

export default App
