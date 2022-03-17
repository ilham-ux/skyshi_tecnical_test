describe('To do list app', function () {
  it('ceklist_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)
    cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()
    cy.get('[data-cy="todo-item"]')
    cy.get(':nth-child(2) > .jss28 > .jss31 > .jss32').click()//status checkbox
    cy.get('[data-cy="todo-sort-button"]').click()//sort belum selesai
    cy.get('[data-cy="sort-parent"] > :nth-child(5)').click()
  })

  it('ceklist_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)
    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()//show detail activity
    cy.get('[data-cy="todo-item"]')
    cy.get(':nth-child(1) > .todo-item-content > .todo-item-content-name > [data-cy="todo-item-checkbox"]').click()//status checkbox
    cy.get('[data-cy="todo-sort-button"]').click()//sort belum selesai
    cy.get('.modal-add-dropdown-content > :nth-child(5)').click()
  })
  it('ceklist_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)
    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click()//status checkbox
    cy.get('[data-cy="todo-empty-state"]')
    cy.get('[data-cy="todo-sort-button"]').click()//sort belum selesai
    cy.get(':nth-child(4) > [data-cy="false"]').click()
    //only empty state because response 4000
  })
})