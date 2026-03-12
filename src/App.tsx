import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Privacy />} path="/apps/gp-tracker/privacy" />
      <Route element={<ProjectDetail />} path="/projects/:slug" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  )
}

export default App
