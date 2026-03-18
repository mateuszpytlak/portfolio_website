import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import App from './App'

vi.mock('./pages/Home', () => ({ default: () => <div>Home Page</div> }))
vi.mock('./pages/Privacy', () => ({ default: () => <div>Privacy Page</div> }))
vi.mock('./pages/ProjectDetail', () => ({ default: () => <div>Project Detail Page</div> }))
vi.mock('./pages/NotFound', () => ({ default: () => <div>Not Found Page</div> }))

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )

describe('App routing', () => {
  it('renders Home at /', () => {
    renderAt('/')
    expect(screen.getByText('Home Page')).toBeInTheDocument()
  })

  it('renders Privacy at /apps/gp-tracker/privacy', () => {
    renderAt('/apps/gp-tracker/privacy')
    expect(screen.getByText('Privacy Page')).toBeInTheDocument()
  })

  it('renders ProjectDetail at /projects/:slug', () => {
    renderAt('/projects/mini-ecommerce-app')
    expect(screen.getByText('Project Detail Page')).toBeInTheDocument()
  })

  it('renders ProjectDetail for any valid slug', () => {
    renderAt('/projects/arc-raiders-loot-table')
    expect(screen.getByText('Project Detail Page')).toBeInTheDocument()
  })

  it('renders NotFound for unknown routes', () => {
    renderAt('/this-does-not-exist')
    expect(screen.getByText('Not Found Page')).toBeInTheDocument()
  })

  it('renders NotFound for deeply nested unknown routes', () => {
    renderAt('/projects/unknown-slug/extra-segment')
    expect(screen.getByText('Not Found Page')).toBeInTheDocument()
  })

  it('does not render Home content on a wrong route', () => {
    renderAt('/about')
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  })
})
