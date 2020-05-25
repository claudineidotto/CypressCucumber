Feature: Criar Usuario

    Background: Acessar o site da automacao
        Given acesso o site automacaobatista

    @testeum
    Scenario: Cadastrar usuario
        When acesso a pagina automacaoweb
         And acesso a Formulario
         And acesso criarUsuario
         And preencho <nome> <sobrenome> <email> 
         And aperto botao criar 
        Then devo visualizar usuario criado

    @testedois
    Scenario Outline: validar campo obrigatorio 
         When acesso a pagina automacaoweb
         And acesso a Formulario
         And acesso criarUsuario
         And preencho <nome> <sobrenome>  
         And aperto botao criar 
        Then devo visualizar mensagem campo obrigatorio
   
    @testetres
    Scenario Outline: validar botao voltar 
         When acesso a pagina automacaoweb
         And acesso a Formulario
         And acesso criarUsuario
         And preencho <nome> <sobrenome>  
         And aperto botao voltar 
        Then devo visualizar <texto>

        
