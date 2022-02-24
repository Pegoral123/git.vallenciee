const mainlogin = {

    enviar: function() {
       
        login.atualizarDados(
            document.getElementById("email").value,
            document.getElementById("senha").value,          
        );
     
        if (login.enviar()) {
            alert("Cadastro foi feito!");
        } else {
            alert("Erro ao efetuar cadastro!");
        }
    }

};