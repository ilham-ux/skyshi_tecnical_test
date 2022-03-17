describe('To do list app', function () {
  it('show_detail_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)

    cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()//show detail activity
    cy.get('[data-cy="todo-title"]')//show title todo
    cy.get('[data-cy="todo-add-button"]')//show title add
    cy.get('[data-cy="todo-item"]')//show list todo item  
  })
  it('show_detail_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()//show detail activity
    cy.get('[data-cy="todo-title"]')//show title todo
    cy.get('[data-cy="todo-add-button"]')//show title add
    cy.get('[data-cy="todo-item"]')//show list todo item
  })
  it('show_detail_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)
    cy.get(':nth-child(2) > [data-cy="activity-item"] > .activity-body').click()//show detail activity
    cy.get('[data-cy="todo-title"]')//show title todo
    cy.get('[data-cy="todo-add-button"]')//show title add
    cy.get('[data-cy="todo-empty-state"]')//show list item
  })
})