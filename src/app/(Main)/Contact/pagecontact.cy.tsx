import React from 'react'
import contact from './page'

describe('<contact />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<contact />)
  })
})