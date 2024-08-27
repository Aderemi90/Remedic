import React from 'react'
import TermsAndConditions from './page'

describe('<TermsAndConditions />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TermsAndConditions />)
  })
})