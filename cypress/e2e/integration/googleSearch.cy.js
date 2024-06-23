// cypress/integration/googleSearch.spec.js

describe('Google Search Functionality', () => {
    const wordToTest = 'Hola mundo';
    const wordToTestFail = 'adhcjddeckcdlnddndkjndlkdlkdcdnsdldsklncf';
    beforeEach(() => {
        cy.visit('https://www.google.com');
    });
    const performSearch = (term) => {
        cy.get('textarea[class="gLFyf"]').type(`${term}{enter}`);
    };
    context('Successful search', () => {
        beforeEach(() => {
            performSearch(wordToTest);
        });
        it('should search for a term using the search bar', () => {
            cy.url().should('include', '/search');
        });

        it('should display the number of results found', () => {
            cy.get('div#result-stats').should('exist').then(($stats) => {
                const resultText = $stats.text();
                cy.log('Number of search results: ' + resultText);
                console.log('Number of search results: '+resultText);
                cy.addContext('Number of search results: '+resultText)
            });
        });

        it('should display the time taken for the search', () => {
            cy.get('nobr').should('exist').and('contain', 'segundos').then(($time) => {
                const timeText = $time.text();
                cy.log('Search time: ' + timeText);
                console.log('Search time: '+timeText);
                cy.addContext('Search time: '+timeText)
            });
        });
    });
    context('Unsuccessful search', () => {
        beforeEach(() => {
            performSearch(wordToTestFail);
        });
        it('should display an error message if no results are found', () => {
            cy.get('div#result-stats').should('exist').and('contain', 'Cerca de 0 resultados');
        });
    });
});
