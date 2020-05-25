// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
 
    visualizarLink() {
        cy.get(homeElements.botaoRecuperarSenha()).should('contain', 'https://automacaocombatista.herokuapp.com/home/index')
    }
    visualizarMensagem() {
        cy.get(homeElements.botaoRecuperarSenha()).should('contain', 'Site para Automação')
    }
}
export default LoginPage;
