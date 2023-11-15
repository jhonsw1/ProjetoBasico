function logar(){
    var username = document.getElementById("login").value;
    var senha = document.getElementById("password").value;

    if (username == "admin" && senha == "admin"){
        location.href = "Game/home.html";
    }
    else {
        alert('Login ou senha inválidos!!' )
    }

}