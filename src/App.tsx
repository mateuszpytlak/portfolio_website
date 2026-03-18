import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Privacy = lazy(() => import('./pages/Privacy'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Privacy />} path="/apps/gp-tracker/privacy" />
        <Route element={<ProjectDetail />} path="/projects/:slug" />
        <Route element={<NotFound />} path="*" />
      </Routes>
    </Suspense>
  )
}

export default App
