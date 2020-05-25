/* global Given, Then, When */

import CriarUsuarioPage from '../pageobjects/CriarUsuarioPage'
const criarUsuarioPage = new CriarUsuarioPage

Given("acesso o site automacaobatista", () => {
    criarUsuarioPage.acessarSite();
})

When("acesso a pagina automacaoweb", () => {
    criarUsuarioPage.clicarBotaoPaginaLogin();
})

And("acesso a Formulario", () => {
    criarUsuarioPage.informarEmail(email);
})

And("acesso criarUsuario", () => {
    criarUsuarioPage.informarSenha(senha);
})

And("preencho {} {} {} ", (nome,sobrenome,email) => {
    criarUsuarioPage.informarSenha(nome,sobrenome,email);
})

And("aperto botao criar", () => {
    criarUsuarioPage.informarSenha(senha);
})

Then("devo visualizar usuario criado", () => {
    criarUsuarioPage.visualizarBotaoRecuperarSenha();
})

And("preencho {} {} ", (nome,sobrenome) => {
    criarUsuarioPage.informarSenha(nome,sobrenome);
})

Then("devo visualizar mensagem campo obrigatorio", () => {
    criarUsuarioPage.visualizarBotaoRecuperarSenha();
})

And("aperto botao voltar", () => {
    criarUsuarioPage.informarSenha(senha);
})

Then("devo visualizar texto inicio", () => {
    criarUsuarioPage.visualizarErroLogin();
})