// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class HomePage {
    // Acessa o site que será testado
    setarlink() {
        url = ("https://automacaocombatista.herokuapp.com")
    }
    acessarSite() {
        cy.visit(url)
    }
 
    
    visualizarLink() {
        cy.get(homeElements.link()).should('contain', cy.location('href'))
    }

    visualizarMensagem() {
        cy.get(homeElements.botaoRecuperarSenha()).should('contain', 'Site para Automação')
    }
}
export default HomePage;
