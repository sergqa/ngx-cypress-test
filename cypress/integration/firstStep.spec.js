/// <reference types="cypress" />

describe('Our first suite', () => {

  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //by Tag Name
    cy.get('input')

    //by ID
    cy.get('#inputEmail')

    //by Class Name
    cy.get('.input-full-width')

    //by Attribute Name
    cy.get('[placeholder]')

    //by Attribute name and value
    cy.get('[placeholder="Email"]')

    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    //by Two different Attributes
    cy.get('[placeholder="Email"][type="email"]')

    //by tag name, Attribute with value, ID and Class Name
    cy.get('input[placeholder="Email"]#inputEmail.input-full-width')

  })

  it('second test', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('Sign in')
    cy.contains('[status="warning"]','Sign in')

    cy.get('#inputEmail3')
      .parents('Form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('Form')
      .find('nb-checkbox')
      .click()

    cy.contains('nb-card', 'Horizontal form')
      .find('[type="Email"]')
  })

  it.only('then and wrap methods', () => {
    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
    cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
    cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
    cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')



  })

})
