import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import ProjectDetail from './ProjectDetail'

const renderProjectDetailAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<ProjectDetail />} path="/projects/:slug" />
      </Routes>
    </MemoryRouter>,
  )

const renderLegacySlugAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<ProjectDetail />} path="/projects/:slug" />
        <Route element={<div>GP Tracker Route</div>} path="/projects/gp-tracker" />
      </Routes>
    </MemoryRouter>,
  )

describe('ProjectDetail routing', () => {
  it('renders the GP Tracker case study at the new slug', async () => {
    renderProjectDetailAt('/projects/gp-tracker')
    expect(
      await screen.findByRole('heading', { name: 'GP Tracker', level: 1 }),
    ).toBeInTheDocument()
  })

  it('redirects the legacy slug to the GP Tracker route', async () => {
    renderLegacySlugAt('/projects/f1-weekend-widget')
    expect(await screen.findByText('GP Tracker Route')).toBeInTheDocument()
  })
})
