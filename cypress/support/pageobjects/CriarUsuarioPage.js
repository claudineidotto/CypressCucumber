// <reference types="Cypress" />

import CriarUsuarioElements from '../elements/CriarUsuarioElements'
import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements

const criarusuarioElements = new CriarUsuarioElements
const url = Cypress.config("baseUrl")

class CriarUsuarioPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
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
        cy.get(criarusuarioElements.mensagemErro()).should('contain', '2 errors proibiu que este usuário fosse salvo:')
    }
    visualizarSucesso() {
        cy.get(criarusuarioElements.mensagemSucesso()).should('contain', 'Usuário Criado com sucesso')
    }
    visualizarVoltar() {
        cy.get(criarusuarioElements.mensagemTexto()).should('contain', 'Bem vindo ao Site de Automação do Batista.')
    }
    
}

export default CriarUsuarioPage;
