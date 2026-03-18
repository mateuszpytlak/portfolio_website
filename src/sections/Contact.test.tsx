import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import Contact from './Contact'

const fillValidForm = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.type(screen.getByPlaceholderText('Your name'), 'Jane Smith')
  await user.type(screen.getByPlaceholderText('name@company.com'), 'jane@company.com')
  await user.type(
    screen.getByPlaceholderText(/share the role/i),
    'Hello, I would like to discuss a frontend opportunity with you.',
  )
}

describe('Contact', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders form fields and submit button', () => {
    render(<Contact />)

    expect(screen.getByPlaceholderText('Your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('name@company.com')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Recruitment opportunity')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/share the role/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send role details/i })).toBeInTheDocument()
  })

  describe('validation errors', () => {
    it('shows error when name is too short', async () => {
      const user = userEvent.setup()
      render(<Contact />)

      await user.type(screen.getByPlaceholderText('Your name'), 'J')
      await user.type(screen.getByPlaceholderText('name@company.com'), 'jane@company.com')
      await user.type(
        screen.getByPlaceholderText(/share the role/i),
        'This is a valid message body.',
      )
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(await screen.findByText('Please enter your name.')).toBeInTheDocument()
    })

    it('shows error when email is invalid', async () => {
      // type="email" triggers native HTML5 validation which blocks onSubmit,
      // so we submit the form directly to exercise the Zod validation path.
      const user = userEvent.setup()
      render(<Contact />)

      await user.type(screen.getByPlaceholderText('Your name'), 'Jane Smith')
      await user.type(screen.getByPlaceholderText('name@company.com'), 'notanemail')
      await user.type(
        screen.getByPlaceholderText(/share the role/i),
        'This is a valid message body.',
      )

      const form = screen.getByRole('button', { name: /send role details/i }).closest('form')!
      fireEvent.submit(form)

      expect(await screen.findByText('Please enter a valid email.')).toBeInTheDocument()
    })

    it('shows error when message is too short', async () => {
      const user = userEvent.setup()
      render(<Contact />)

      await user.type(screen.getByPlaceholderText('Your name'), 'Jane Smith')
      await user.type(screen.getByPlaceholderText('name@company.com'), 'jane@company.com')
      await user.type(screen.getByPlaceholderText(/share the role/i), 'Too short')
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(await screen.findByText('Please add a few details.')).toBeInTheDocument()
    })

    it('does not call fetch when validation fails', async () => {
      const fetchSpy = vi.spyOn(globalThis, 'fetch')
      const user = userEvent.setup()
      render(<Contact />)

      await user.type(screen.getByPlaceholderText('Your name'), 'J')
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(fetchSpy).not.toHaveBeenCalled()
    })
  })

  describe('form submission', () => {
    it('disables submit button while submitting', async () => {
      vi.spyOn(globalThis, 'fetch').mockImplementation(
        () =>
          new Promise((resolve) =>
            setTimeout(() => resolve(new Response(null, { status: 200 })), 100),
          ),
      )
      const user = userEvent.setup()
      render(<Contact />)

      await fillValidForm(user)
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(screen.getByRole('button', { name: /sending/i })).toBeDisabled()
    })

    it('shows success message after successful submission', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 200 }))
      const user = userEvent.setup()
      render(<Contact />)

      await fillValidForm(user)
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(await screen.findByText(/message sent/i)).toBeInTheDocument()
    })

    it('shows error message when fetch returns non-ok status', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 500 }))
      const user = userEvent.setup()
      render(<Contact />)

      await fillValidForm(user)
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    })

    it('shows error message when fetch throws a network error', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'))
      const user = userEvent.setup()
      render(<Contact />)

      await fillValidForm(user)
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
    })

    it('success and error messages have role="status" for screen readers', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 200 }))
      const user = userEvent.setup()
      render(<Contact />)

      await fillValidForm(user)
      await user.click(screen.getByRole('button', { name: /send role details/i }))

      await waitFor(() => {
        expect(screen.getByRole('status')).toBeInTheDocument()
      })
    })
  })
})
