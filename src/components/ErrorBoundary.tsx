import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Uncaught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            background: 'var(--bg)',
            color: 'var(--text)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '24px',
            fontFamily: '"Manrope", "Segoe UI", sans-serif',
          }}
        >
          <p
            style={{
              fontSize: '6rem',
              fontWeight: 600,
              color: 'var(--ring)',
              lineHeight: 1,
              userSelect: 'none',
              fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            500
          </p>
          <h1
            style={{
              marginTop: '16px',
              fontSize: '1.75rem',
              fontWeight: 600,
              fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: '12px',
              color: 'var(--muted)',
              maxWidth: '360px',
            }}
          >
            An unexpected error occurred. Try refreshing the page - if the
            problem persists, it's on our end.
          </p>
          <div style={{ marginTop: '32px', display: 'flex', gap: '12px' }}>
            <button
              onClick={() => window.location.reload()}
              style={{
                borderRadius: '999px',
                background: 'var(--accent)',
                color: 'var(--bg)',
                padding: '10px 24px',
                fontSize: '0.875rem',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Refresh page
            </button>
            <a
              href="/"
              style={{
                borderRadius: '999px',
                border: '1px solid var(--ring)',
                color: 'var(--text)',
                padding: '10px 24px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Back to home
            </a>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
