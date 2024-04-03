import { render, screen } from '@testing-library/react'

import { expect, describe, it } from 'vitest'
import App from '../src/App'

describe('test', () => {
  it('demo', () => {
    expect(true).toBe(true)
  })
})

describe('App', () => {
  it('renders headline', () => {
    render(<App />)
    const headline = screen.getByText(/BEGIN/i)
    expect(headline).toBeInTheDocument()
  })
})
