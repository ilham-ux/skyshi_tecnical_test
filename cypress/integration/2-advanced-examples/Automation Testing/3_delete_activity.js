describe('To do list app', function () {
  it('delete_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)

    cy.get(':nth-child(1) > .jss17 > [data-cy="activity-item-delete-button"]').click()//show modal delete
    cy.get('[data-cy="modal-delete-cancel-button"]').click()//function cancel button

    //cy.get(':nth-child(2) > .jss17 > [data-cy="activity-item-delete-button"]').click()
    //cy.get('.body').click()////modalclose belum

    cy.get(':nth-child(1) > .jss17 > [data-cy="activity-item-delete-button"]').click()//show modal delete
    cy.get('[data-cy="modal-delete-confirm-button"]').click()//function confirm button

  })

  it('delete_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-delete-button"]').click()//show modal delete
    cy.get('[data-cy="modal-delete-cancel-button"]').click()//function cancel button

    //cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-delete-button"]').click()
    //cy.get('.body').click()//modalclose belum

    cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-delete-button"]').click()//show modal delete
    cy.get('[data-cy="modal-delete-confirm-button"]').click()//function confirm button
  })

  it('delete_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click()//show modal delete
    cy.get('[data-cy="modal-delete-cancel-button"]').click()//function cancel button

    //cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click()
    //cy.get('.body').click()//modalclose belum

    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-delete-button"]').click()
    cy.get('[data-cy="modal-delete-confirm-button"]').click()//function confirm button
  })
})