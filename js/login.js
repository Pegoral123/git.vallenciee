const login = {
  emailUser:'',
  senhaUser:'',
    atualizarDados:function(email='',senha="") {
        this.emailUser= email
        this.senhaUser= senha        
    }, 
    enviar: function() {
        var error = "";
        if (error != "") {
            return false;
        }
        return true;
     
    }  


}