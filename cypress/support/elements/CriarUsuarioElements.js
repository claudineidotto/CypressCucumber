class CriarUsuarioElements {
    botaoFormulario = () => { return '.collapsible-header' }

    botaoCriarusuario = () => { return '.<a data-method="get" href="/users/new">Criar Usuários</a>' }

    inputNome = () => { return '#user_name' }

    inputSobrenome = () => { return '#user_lastname' }

    inputEmail = () => { return '#user_email' }

    mensagemSucesso = () => { return '.description' }

    mensagemErro = () => { return '#error_explanation' }

    botaoVoltar = () => { return '.btn waves-light red' }

    mensagemTexto = () => { return '#notice' }
    
    botaoCriar = () => { return '[type="submit"]' }



}

export default CriarUsuarioElements;
