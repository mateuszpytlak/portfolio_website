import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect, vi } from 'vitest'

import Projects from './Projects'

// Mock image imports coming from data/projects.ts
vi.mock('../data/projects', () => ({
  projects: [
    {
      slug: 'test-project-one',
      title: 'Test Project One',
      role: 'Frontend Developer',
      stack: ['React', 'TypeScript'],
      stackDetailed: ['React', 'TypeScript'],
      summary: 'A test project summary that describes the work done.',
      result: 'Delivered clean, tested UI components.',
      live: 'https://example.com',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.example.app',
      repo: 'https://github.com/example/repo',
      thumbGallery: ['/thumb1.png', '/thumb2.png'],
      gallery: ['/screen1.png'],
      description: ['Description paragraph.'],
      challenges: ['Challenge one.'],
    },
    {
      slug: 'test-project-no-links',
      title: 'Project Without Links',
      role: 'Android Developer',
      stack: ['Kotlin'],
      stackDetailed: ['Kotlin'],
      summary: 'A project with no live demo or repo link.',
      result: 'Completed as a learning exercise.',
      thumbGallery: [],
      gallery: [],
      description: ['Description.'],
      challenges: ['Challenge.'],
    },
  ],
}))

const renderProjects = () =>
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  )

describe('Projects section', () => {
  it('renders the section heading', () => {
    renderProjects()
    expect(screen.getByText(/recent work that moves the needle/i)).toBeInTheDocument()
  })

  it('renders a card for each project', () => {
    renderProjects()
    expect(screen.getByText('Test Project One')).toBeInTheDocument()
    expect(screen.getByText('Project Without Links')).toBeInTheDocument()
  })
})

describe('ProjectCard', () => {
  it('renders project title', () => {
    renderProjects()
    expect(screen.getByText('Test Project One')).toBeInTheDocument()
  })

  it('renders project role', () => {
    renderProjects()
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument()
  })

  it('renders project summary', () => {
    renderProjects()
    expect(
      screen.getByText('A test project summary that describes the work done.'),
    ).toBeInTheDocument()
  })

  it('renders stack tags', () => {
    renderProjects()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders outcome text', () => {
    renderProjects()
    expect(screen.getByText(/delivered clean, tested UI components/i)).toBeInTheDocument()
  })

  it('renders Live link when project has a live URL', () => {
    renderProjects()
    const liveLink = screen.getByRole('link', { name: /live/i })
    expect(liveLink).toHaveAttribute('href', 'https://example.com')
  })

  it('renders GitHub link when project has a repo URL', () => {
    renderProjects()
    const repoLink = screen.getByRole('link', { name: /github/i })
    expect(repoLink).toHaveAttribute('href', 'https://github.com/example/repo')
  })

  it('renders Google Play link when project has a store URL', () => {
    renderProjects()
    const storeLink = screen.getByRole('link', { name: /google play/i })
    expect(storeLink).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=com.example.app',
    )
  })

  it('does not render Live link when project has no live URL', () => {
    renderProjects()
    // Only one Live link should exist (for project one)
    const liveLinks = screen.getAllByRole('link', { name: /live/i })
    expect(liveLinks).toHaveLength(1)
  })

  it('does not render GitHub link when project has no repo URL', () => {
    renderProjects()
    // Only one GitHub link should exist (for project one)
    const repoLinks = screen.getAllByRole('link', { name: /github/i })
    expect(repoLinks).toHaveLength(1)
  })

  it('links to the correct case study page', () => {
    renderProjects()
    const caseStudyLink = screen.getByRole('link', {
      name: /open test project one case study/i,
    })
    expect(caseStudyLink).toHaveAttribute('href', '/projects/test-project-one')
  })

  it('renders thumbnail images when gallery is provided', () => {
    renderProjects()
    const thumbs = screen.getAllByAltText(/test project one screenshot/i)
    expect(thumbs).toHaveLength(2)
  })

  it('renders screenshot placeholder when gallery is empty', () => {
    renderProjects()
    expect(screen.getByText(/screenshot placeholder/i)).toBeInTheDocument()
  })

  it('renders "View case study" CTA on every card', () => {
    renderProjects()
    const ctas = screen.getAllByText(/view case study/i)
    expect(ctas).toHaveLength(2)
  })
})
