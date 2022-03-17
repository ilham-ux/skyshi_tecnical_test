describe('To do list app', function () {
  it('add_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-devcode.web.app/')//(desktop)

    cy.get('[data-cy="activity-add-button"]').click()//add activity
    cy.get(':nth-child(1) > [data-cy="activity-item-title"]')//show title item
    cy.get(':nth-child(1) > .jss17 > [data-cy="activity-item-date"]')//show date item
  })
  it('add_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://todo-4769a.web.app/')//(vue)

    cy.get('[data-cy="activity-add-button"]').click()//add activity
    cy.get(':nth-child(1) > .box-activity-content > .box-activity-title > [data-cy="activity-item-title"]')//show title item
    cy.get(':nth-child(1) > .box-activity-content > .box-activity-footer > [data-cy="activity-item-date"]')//show date item
  })
  it('add_activity', function () {
    //expect(true).to.equal(true)
    cy.visit('https://ivan-todo-devrank.netlify.app/')//(react)

    cy.get('[data-cy="activity-add-button"]').click()//add activity
    cy.get(':nth-child(1) > [data-cy="activity-item"] > .activity-body > [data-cy="activity-item-title"]')//show title item
    cy.get(':nth-child(1) > [data-cy="activity-item"] > .card-footer > [data-cy="activity-item-date"]')//show date item
  })
})