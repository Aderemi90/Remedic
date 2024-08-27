import React from 'react'
import register from './page'

describe('<register />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<register />)
  })
})