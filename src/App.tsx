import { AnimatePresence, motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { pageVariants } from './lib/animations'

const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))
const Privacy = lazy(() => import('./pages/Privacy'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))

function App() {
  const location = useLocation()

  return (
    <Suspense fallback={null}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Routes location={location}>
            <Route element={<Home />} path="/" />
            <Route element={<Privacy />} path="/apps/gp-tracker/privacy" />
            <Route element={<ProjectDetail />} path="/projects/:slug" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  )
}

export default App
