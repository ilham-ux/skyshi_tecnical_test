describe('To do list app', function () {
    it('delete_item_todo', function () {
        //expect(true).to.equal(true)
        cy.visit('https://todo-devcode.web.app/')//(desktop)
        cy.get(':nth-child(5) > [data-cy="activity-item-title"]').click()//show list item
        cy.get(':nth-child(2) > [data-cy="todo-item-delete-button"]').click()//show modal delete
        cy.get('[data-cy="modal-delete-confirm-button"]').click()//delete todo
    })

    it('delete_item_todo', function () {
        //expect(true).to.equal(true)
        cy.visit('https://todo-4769a.web.app/')//(vue)
        cy.get(':nth-child(1) > .box-activity-content > .box-activity-title').click()//show list item
        cy.get(':nth-child(1) > .todo-item-content > [data-cy="todo-item-delete-button"]').click()//show modal delete
        cy.get('[data-cy="modal-delete-confirm-button"]').click()//delete todo
    })
    it('delete_item_todo', function () {
        //expect(true).to.equal(true)
        cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)
        cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body').click()
        //cy.get('.detail-content > :nth-child(1)').click()
        //cy.get('[data-cy="todo-item-delete-button"]')   
    })
})