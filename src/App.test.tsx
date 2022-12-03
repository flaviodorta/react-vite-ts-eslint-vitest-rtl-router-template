import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App, WrappedApp } from './App'
import { BrowserRouter } from 'react-router-dom'

describe('App', () => {
  it('should renders hello world', () => {
    render(<WrappedApp />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Hello World'
    )
  })

  it('should renders not found if invalid path', () => {
    window.history.pushState({}, '', '/anything')

    render(<WrappedApp />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Not found'
    )
  })
})
