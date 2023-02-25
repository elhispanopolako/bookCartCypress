
const categories = [
    { id: 1, category: "Biography" },
    { id: 2, category: "Fiction" },
    { id: 3, category: "Mystery" },
    { id: 4, category: "Fantasy" },
    { id: 5, category: "Romance" },
]


describe('Login page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    categories.map(m => {
        it(`CF${m.id}.Verify ${m.category} category contain a ${m.category} books`, () => {
            cy.get('app-book-card').then(book => {
                let allBooks = book.length
                cy.get('mat-nav-list').contains(`${m.category}`).click()
                cy.request({ method: 'GET', url: '/api/Book' }).then(res => {
                    let length = res.body.length
                    let category = res.body.filter(x => x.category == `${m.category}`)
                    let bookTitle = category[0].title
                    expect(allBooks).to.be.equal(length)
                    cy.get('app-book-card').then(book => {
                        expect(book[0]).to.contain(bookTitle)
                        expect(book.length).to.be.equal(category.length)
                    })
                })

            })
        })

    })
})
