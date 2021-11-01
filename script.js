function Login() {
    var done = 0;
    var usuario = document.getElementsByName('username')[0].value;
    var senha = document.getElementsByName('password')[0].value;
  
    if (usuario == "BITLAB" && senha == "BITLAB") {
      window.location = "login.html";
      done = 1;
    }
    if (done == 0) {
      alert("Usuário ou senha incorretos, tente novamente");
    }
  }
