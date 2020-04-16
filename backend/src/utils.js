module.exports = {
  
  handleDbErrors(error) {
    let code = error.code;
    let msg = error.errmsg;
    let nonCodeErrorMsg = error.message;
    let errorName = error.name;
    let retorno;

    if (code && code === 11000) {
      let errorCPF = msg.includes('cpf');
      let errorUsername = msg.includes('username');
      let errorEmail = msg.includes('email');

      if(errorUsername){ retorno = this.montarRetorno(false, "Username já cadastrado")}
      if(errorCPF){ retorno = this.montarRetorno(false, "CPF já cadastrado")}
      if(errorEmail){ retorno = this.montarRetorno(false, "E-mail já cadastrado")}
    }
    
    retorno = this.montarRetorno(false, nonCodeErrorMsg, true, errorName);

    return retorno;
  },

  montarRetorno(status = true, msg = "Sucesso", isError = false, errorName = "") {
    if ( isError ) {
      return ( { "status": status, "msg": msg, "error": errorName} )
    }
    return ( { "status": status, "msg": msg} )
  }


}