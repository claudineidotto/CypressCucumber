/* global Given, Then, When */

import CriarUsuarioPage from '../pageobjects/CriarUsuarioPage'
const criarUsuarioPage = new CriarUsuarioPage
import HomePage from '../pageobjects/HomePage'
const homePage = new HomePage


Given("acesso o site automacaobatista", () => {
    criarUsuarioPage.acessarSite();
})

When("acesso a pagina automacaoweb", () => {
    homePage.clicarBotaoComecarAutomacao();
})

And("acesso a Formulario", () => {
    criarUsuarioPage.clicarBotaoFormulario();
})

And("acesso criarUsuario", () => {
    criarUsuarioPage.clicarBotaoCriarUsuarios();
})

And("preencho {} {} {} ", (nome,sobrenome,email) => {
    criarUsuarioPage.informarNome(nome);
    criarUsuarioPage.informarSobrenome(sobrenome);
    criarUsuarioPage.informarEmail(email);
})

And("aperto botao criar", () => {
    criarUsuarioPage.clicarBotaoCriar();
})

Then("devo visualizar usuario criado", () => {
    criarUsuarioPage.visualizarSucesso();
})

And("preencho {} {} ", (nome,sobrenome) => {
    criarUsuarioPage.informarNome(nome);
    criarUsuarioPage.informarSobrenome(sobrenome);
})

Then("devo visualizar mensagem campo obrigatorio", () => {
    criarUsuarioPage.visualizarErro();
})

And("aperto botao voltar", () => {
    criarUsuarioPage.clicarBotaoVoltar();
})

Then("devo visualizar texto inicio", () => {
    criarUsuarioPage.visualizarVoltar();
})