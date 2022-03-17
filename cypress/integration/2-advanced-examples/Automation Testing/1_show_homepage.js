describe('To do list app', function () {
  it('show_homepage', function () {
    // expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(web)

    cy.get('[data-cy="header-title"]')//show header title
    cy.get('[data-cy="activity-title"]')//show title activity
    cy.get('[data-cy="activity-add-button"]')//show button add
    cy.get('[data-cy="activity-item"]')//show list activity
    //cy.get('[data-cy="activity-empty-state"]')
  })

  it('show_homepage', function () {
    // expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)

    cy.get('[data-cy="header-title"]')//show header title
    cy.get('[data-cy="activity-title"]')//show title activity
    cy.get('[data-cy="activity-add-button"]')//show button add
    cy.get('[data-cy="activity-item"]')//show list activity
    //cy.get('[data-cy="activity-empty-state"]')
  })

  it('show_homepage', function () {
    // expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//react

    cy.get('[data-cy="header-title"]')//show header title
    cy.get('[data-cy="activity-title"]')//show title activity
    cy.get('[data-cy="activity-add-button"]')//show button add
    cy.get('[data-cy="activity-item"]')//show list activity
    //cy.get('[data-cy="activity-empty-state"]')
  })
})