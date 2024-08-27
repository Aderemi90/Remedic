import React from 'react'
import Services from './page'

describe('<Services />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Services />)
  })
})