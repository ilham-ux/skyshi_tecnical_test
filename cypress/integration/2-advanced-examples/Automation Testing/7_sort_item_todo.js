describe('To do list app', function () {
  it('sort item todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)
    cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()
    cy.get('[data-cy="todo-sort-button"]').click()//show list sort
    cy.get('[data-cy="sort-parent"] > :nth-child(2)').click()//sort long
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get('[data-cy="sort-parent"] > :nth-child(3)').click()//sort a-z
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get('[data-cy="sort-parent"] > :nth-child(4)').click()////sort z-a
  })
  it('sort item todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)
    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()
    cy.get('[data-cy="todo-sort-button"]').click()//show list sort
    cy.get('.modal-add-dropdown-content > :nth-child(2)').click()//sort long
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get('.modal-add-dropdown-content > :nth-child(3)').click()//sort a-z
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get('.modal-add-dropdown-content > :nth-child(4)').click()////sort z-a
  })
  it('sort item todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app')//(react)
    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click()
    cy.get('[data-cy="todo-sort-button"]').click()//show list sort
    cy.get(':nth-child(2) > [data-cy="false"]').click()//sort long
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get(':nth-child(3) > [data-cy="false"]').click()//sort a-z
    cy.get('[data-cy="todo-sort-button"]').click()
    cy.get(':nth-child(4) > [data-cy="false"]').click()//sort z-a
  })
})