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
  it('renders Home at /', async () => {
    renderAt('/')
    expect(await screen.findByText('Home Page')).toBeInTheDocument()
  })

  it('renders Privacy at /apps/gp-tracker/privacy', async () => {
    renderAt('/apps/gp-tracker/privacy')
    expect(await screen.findByText('Privacy Page')).toBeInTheDocument()
  })

  it('renders ProjectDetail at /projects/:slug', async () => {
    renderAt('/projects/mini-ecommerce-app')
    expect(await screen.findByText('Project Detail Page')).toBeInTheDocument()
  })

  it('renders ProjectDetail for any valid slug', async () => {
    renderAt('/projects/arc-raiders-loot-table')
    expect(await screen.findByText('Project Detail Page')).toBeInTheDocument()
  })

  it('renders NotFound for unknown routes', async () => {
    renderAt('/this-does-not-exist')
    expect(await screen.findByText('Not Found Page')).toBeInTheDocument()
  })

  it('renders NotFound for deeply nested unknown routes', async () => {
    renderAt('/projects/unknown-slug/extra-segment')
    expect(await screen.findByText('Not Found Page')).toBeInTheDocument()
  })

  it('does not render Home content on a wrong route', async () => {
    renderAt('/about')
    await screen.findByText('Not Found Page')
    expect(screen.queryByText('Home Page')).not.toBeInTheDocument()
  })
})
