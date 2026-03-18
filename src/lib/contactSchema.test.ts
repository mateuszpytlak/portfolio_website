import { describe, it, expect } from 'vitest'

import { contactSchema } from './contactSchema'

const validData = {
  name: 'Jane Smith',
  email: 'jane@company.com',
  title: 'Frontend role',
  message: 'Hello, I would like to discuss an opportunity with you.',
}

describe('contactSchema', () => {
  describe('valid data', () => {
    it('passes with all fields filled', () => {
      const result = contactSchema.safeParse(validData)
      expect(result.success).toBe(true)
    })

    it('passes without optional title', () => {
      const { title: _title, ...data } = validData
      const result = contactSchema.safeParse(data)
      expect(result.success).toBe(true)
    })

    it('passes with empty string title', () => {
      const result = contactSchema.safeParse({ ...validData, title: '' })
      expect(result.success).toBe(true)
    })

    it('trims whitespace from name', () => {
      const result = contactSchema.safeParse({ ...validData, name: '  Jane  ' })
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.name).toBe('Jane')
      }
    })

    it('trims whitespace from email', () => {
      const result = contactSchema.safeParse({ ...validData, email: '  jane@company.com  ' })
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.email).toBe('jane@company.com')
      }
    })

    it('accepts name with exactly 2 characters', () => {
      const result = contactSchema.safeParse({ ...validData, name: 'Jo' })
      expect(result.success).toBe(true)
    })

    it('accepts name with exactly 80 characters', () => {
      const result = contactSchema.safeParse({ ...validData, name: 'A'.repeat(80) })
      expect(result.success).toBe(true)
    })

    it('accepts message with exactly 10 characters', () => {
      const result = contactSchema.safeParse({ ...validData, message: '1234567890' })
      expect(result.success).toBe(true)
    })

    it('accepts message with exactly 1000 characters', () => {
      const result = contactSchema.safeParse({ ...validData, message: 'A'.repeat(1000) })
      expect(result.success).toBe(true)
    })
  })

  describe('name validation', () => {
    it('rejects name shorter than 2 characters', () => {
      const result = contactSchema.safeParse({ ...validData, name: 'J' })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please enter your name.')
      }
    })

    it('rejects name that trims to fewer than 2 characters', () => {
      const result = contactSchema.safeParse({ ...validData, name: ' J ' })
      expect(result.success).toBe(false)
    })

    it('rejects name longer than 80 characters', () => {
      const result = contactSchema.safeParse({ ...validData, name: 'A'.repeat(81) })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Name is too long.')
      }
    })

    it('rejects empty name', () => {
      const result = contactSchema.safeParse({ ...validData, name: '' })
      expect(result.success).toBe(false)
    })
  })

  describe('email validation', () => {
    it('rejects missing @ symbol', () => {
      const result = contactSchema.safeParse({ ...validData, email: 'notanemail' })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please enter a valid email.')
      }
    })

    it('rejects email without domain', () => {
      const result = contactSchema.safeParse({ ...validData, email: 'user@' })
      expect(result.success).toBe(false)
    })

    it('rejects email without local part', () => {
      const result = contactSchema.safeParse({ ...validData, email: '@company.com' })
      expect(result.success).toBe(false)
    })

    it('rejects empty email', () => {
      const result = contactSchema.safeParse({ ...validData, email: '' })
      expect(result.success).toBe(false)
    })
  })

  describe('title validation', () => {
    it('rejects title longer than 120 characters', () => {
      const result = contactSchema.safeParse({ ...validData, title: 'A'.repeat(121) })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Message title is too long.')
      }
    })

    it('accepts title with exactly 120 characters', () => {
      const result = contactSchema.safeParse({ ...validData, title: 'A'.repeat(120) })
      expect(result.success).toBe(true)
    })
  })

  describe('message validation', () => {
    it('rejects message shorter than 10 characters', () => {
      const result = contactSchema.safeParse({ ...validData, message: 'short' })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Please add a few details.')
      }
    })

    it('rejects message longer than 1000 characters', () => {
      const result = contactSchema.safeParse({ ...validData, message: 'A'.repeat(1001) })
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues[0].message).toBe('Message is too long.')
      }
    })

    it('rejects empty message', () => {
      const result = contactSchema.safeParse({ ...validData, message: '' })
      expect(result.success).toBe(false)
    })
  })

  describe('multiple field errors', () => {
    it('reports errors for each invalid field independently', () => {
      const result = contactSchema.safeParse({
        name: 'J',
        email: 'bad-email',
        title: '',
        message: 'short',
      })
      expect(result.success).toBe(false)
      if (!result.success) {
        const paths = result.error.issues.map((i) => i.path[0])
        expect(paths).toContain('name')
        expect(paths).toContain('email')
        expect(paths).toContain('message')
      }
    })
  })
})
