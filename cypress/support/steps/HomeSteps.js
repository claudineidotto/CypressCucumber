/* global Given, Then, When */

import HomePage from '../pageobjects/HomePage'
const homePage = new HomePage

Given("acesso o site automacaobatista", () => {
    homePage.setarlink();
})

When("acesso a pagina home", () => {
    homePage.acessarSite();
})

Then("devo visualizar link correspondente", () => {
    homePage.acessarSite();
})

When("pagina estiver carregada", () => {
    homePage.acessarSite();
})

Then("devo visualizar mensagem home", () => {
    homePage.visualizarMensagem();
})