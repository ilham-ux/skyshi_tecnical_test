describe('To do list app', function () {
  it('add_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)
    cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()
    cy.get('[data-cy="todo-add-button"]').click()//add item todo
    cy.get('[data-cy="modal-add-name-input"]').type('testing testing testing testing')//input name todo
    cy.get('[data-cy="modal-add-priority-dropdown"]').click()//select dropdown
    cy.wait(4000); cy.get('.jss41 > :nth-child(3)').click()
    cy.get('[data-cy="modal-add-save-button"]').click()

  })
  it('add_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)
    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()
    cy.get('[data-cy="todo-add-button"]').click()//add item todo
    cy.get('[data-cy="modal-add-name-input"]').type('testing testing testing testing')//input name todo
    cy.get('[data-cy="modal-add-priority-dropdown"]').click()//select dropdown
    cy.get('[style="margin-top: 10px;"] > .modal-add-dropdown-2 > .modal-add-dropdown-content > :nth-child(3)').click()
    cy.get('[data-cy="modal-add-save-button"]').click()

  })
  it('add_item_todo', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)
    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click()
    cy.get('[data-cy="todo-add-button"]').click()//add item todo
    cy.get('[data-cy="modal-add-name-input"]').type('testing testing testing')//input name todo
    cy.get('[data-cy="modal-add-priority-dropdown"]').click()//select dropdown
    cy.get('#react-select-2-option-3').click()
    cy.get('[data-cy="modal-add-save-button"]').click()
  })
})