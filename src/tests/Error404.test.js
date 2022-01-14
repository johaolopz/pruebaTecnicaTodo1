import { render, screen } from '@testing-library/react'
import Error404 from '../components/Error404'

describe('Error 404', () => {
 it('Component Error404 renders appropriately', () => {
   render(<Error404 />)
   expect(screen.getByText(/error 404/i))
 })
})