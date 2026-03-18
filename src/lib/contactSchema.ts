import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Please enter your name.')
    .max(80, 'Name is too long.'),
  email: z.string().trim().email('Please enter a valid email.'),
  title: z
    .string()
    .trim()
    .max(120, 'Message title is too long.')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(10, 'Please add a few details.')
    .max(1000, 'Message is too long.'),
})

export type ContactFormData = z.infer<typeof contactSchema>
