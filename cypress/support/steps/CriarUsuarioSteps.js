/* global Given, Then, When */

import CriarUsuarioPage from '../pageobjects/LoginPage'
const criarUsuarioPage = new CriarUsuarioPage

And("informo {} incorreto", (email) => {
    loginPage.informarEmail(email);
})

And("informo {} incorreta", (senha) => {
    loginPage.informarSenha(senha);
})

Given("acesso o site CWI", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

When("clico no botão de realizar login", () => {
    loginPage.clicarBotaoRealizarLogin();
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})

Then("devo visualizar mensagem de erro", () => {
    loginPage.visualizarErroLogin();
})