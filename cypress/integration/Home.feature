Feature: Acessar Home Page

    Background: Acessar o site da automacao
        Given acesso o site automacaobatista

    @testeum
    Scenario: Visualizar link
        When acesso a pagina home
        Then devo visualizar link correspondente

   @testedois
    Scenario Outline: visualizar acesso a home
         When pagina estiver carregada
        Then devo visualizar mensagem home
