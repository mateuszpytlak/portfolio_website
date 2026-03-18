import { useState, type FormEvent } from 'react'

import { contactSchema } from '../lib/contactSchema'

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string

function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')
    setErrors({})

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      title: String(formData.get('title') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    const result = contactSchema.safeParse(payload)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      result.error.issues.forEach((issue) => {
        const field = issue.path[0]
        if (typeof field === 'string' && !fieldErrors[field]) {
          fieldErrors[field] = issue.message
        }
      })
      setErrors(fieldErrors)
      setStatus('idle')
      return
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        form.reset()
        setStatus('success')
        return
      }
    } catch (error) {
      console.error(error)
    }

    setStatus('error')
  }

  return (
    <section
      className="grid gap-10 rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
      id="contact"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          Contact
        </p>
        <h2 className="text-3xl font-semibold">Let&apos;s connect.</h2>
        <p className="text-[var(--muted)]">
          If you are recruiting for frontend roles, share the role details and
          your hiring timeline. I usually reply within 24-48h.
        </p>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-[var(--muted)]">
          <p className="text-white">Links</p>
          <div className="flex flex-wrap gap-3">
            <a
              className="underline decoration-white/30"
              href="https://github.com/mateuszpytlak"
            >
              GitHub
            </a>
            <a
              className="underline decoration-white/30"
              href="https://www.linkedin.com/in/mateusz-pytlak/"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-white">Location</p>
          <p>Poznań, Poland (remote)</p>
        </div>
      </div>
      <form
        action={formEndpoint}
        className="space-y-4"
        onSubmit={handleSubmit}
        method="POST"
      >
        <input
          aria-hidden="true"
          className="hidden"
          name="_gotcha"
          tabIndex={-1}
          type="text"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Full name
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              aria-invalid={errors.name ? 'true' : undefined}
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
            {errors.name ? (
              <p className="text-xs text-red-300" id="contact-name-error">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Work email
            </label>
            <input
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              aria-invalid={errors.email ? 'true' : undefined}
              name="email"
              placeholder="name@company.com"
              required
              type="email"
            />
            {errors.email ? (
              <p className="text-xs text-red-300" id="contact-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Message title
          </label>
          <input
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            aria-describedby={errors.title ? 'contact-title-error' : undefined}
            aria-invalid={errors.title ? 'true' : undefined}
            name="title"
            placeholder="Recruitment opportunity"
            type="text"
          />
          {errors.title ? (
            <p className="text-xs text-red-300" id="contact-title-error">
              {errors.title}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Message
          </label>
          <textarea
            className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            aria-invalid={errors.message ? 'true' : undefined}
            name="message"
            placeholder="Share the role, tech stack, location, start date, and next steps."
            required
          />
          {errors.message ? (
            <p className="text-xs text-red-300" id="contact-message-error">
              {errors.message}
            </p>
          ) : null}
        </div>
        <button
          className="w-full rounded-full border border-black/10 bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(108,246,208,0.28)] transition hover:translate-y-[-1px] hover:brightness-95"
          disabled={status === 'submitting'}
          type="submit"
        >
          {status === 'submitting' ? 'Sending...' : 'Send role details'}
        </button>
        {status === 'success' ? (
          <p className="text-xs text-[var(--accent)]" role="status">
            Message sent. I will reply soon.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className="text-xs text-red-300" role="status">
            Something went wrong. Please try again.
          </p>
        ) : null}
      </form>
    </section>
  )
}

export default Contact
