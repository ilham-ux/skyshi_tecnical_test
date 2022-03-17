describe('To do list app', function () {

  it('change_title_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)

    cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()//change title todo
    cy.get('[data-cy="todo-title"]')
    cy.get('[data-cy="todo-title-edit-button"]').click()
    cy.get('input[type="text"]').clear()
    cy.get('input[type="text"]').type('Testing')
    cy.get('[data-cy="header-title"]').click()
  })

  it('change_title_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')///(vue)

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()//change title todo
    cy.get('[data-cy="todo-title"]')
    cy.get('[data-cy="todo-title-edit-button"]').click()
    //cy.get('input[type="text"]').clear()
    //cy.get('input[type="text"]').type('Testing')
    //cy.get('[data-cy="header-title"]').click()
  })
  it('change_title_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app//')//(react)

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click()//change title todo
    cy.get('[data-cy="todo-title"]')
    cy.get('[data-cy="todo-title-edit-button"]').click()
    cy.get('input[type="text"]').clear()
    cy.get('input[type="text"]').type('Testing')
    cy.get('[data-cy="header-title"]').click()
  })
})