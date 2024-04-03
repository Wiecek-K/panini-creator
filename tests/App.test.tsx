import { render, screen } from '@testing-library/react'

import { expect, describe, it } from 'vitest'
import App from '../src/App'

describe('base', () => {
  it('demo', () => {
    expect(true).toBe(true)
  })

  it('renders Begin Btn', () => {
    render(<App />)
    const beginBtn = screen.getByText(/BEGIN/i)
    expect(beginBtn).toBeInTheDocument()
  })
})
