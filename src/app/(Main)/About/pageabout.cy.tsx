import React from 'react'
import about from './page'

describe('<about />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<about />)
  })
})