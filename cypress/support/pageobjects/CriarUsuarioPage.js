// <reference types="Cypress" />

import CriarUsuarioElements from '../elements/CriarUsuarioElements'
import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

const criarusuarioElements = new CriarUsuarioElements
const url = Cypress.config("baseUrl")

class LoginCriarUsuarioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    clicarBotaoComecarAutomacao() {
        cy.get(homeElements.botaoAutomacaoWeb()).click()
    }

    clicarBotaoFormulario() {
        cy.get(criarusuarioElements.botaoFormulario()).click()
    }
    clicarBotaoCriarUsuarios() {
        cy.get(criarusuarioElements.botaoCriarusuario()).click()
    }

    informarNome(nome) {
        cy.get(criarusuarioElements.inputNome()).type(nome)
    }
    informarEmail(email) {
        cy.get(criarusuarioElements.inputEmail()).type(email)
    }
    informarSobrenome(sobrenome) {
        cy.get(criarusuarioElements.inputSobrenome()).type(sobrenome)
    }


    visualizarErro() {
        cy.get(criarusuarioElements.mensagemErro()).should('contain', 'Usuário ou senha inválidos.')
    }
    visualizarSucesso() {
        cy.get(criarusuarioElements.mensagemSucesso()).should('contain', 'Usuário ou senha inválidos.')
    }
    visualizarVoltar() {
        cy.get(criarusuarioElements.mensagemTexto()).should('contain', 'Usuário ou senha inválidos.')
    }
    
}

export default CriarUsuarioPage;
