function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@") + 1, field.value.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        if (dominio == "gmail.com" || dominio == "hotmail.com" || dominio == "outlook.com" || dominio == "outlook.com.br") {
            document.getElementById("msgEmail").innerHTML = "<font color='blue'>E-mail válido";
            document.getElementById("passField").disabled = false;
            document.getElementById("passField").focus();
            document.getElementById("subBtn").disabled = false;
        }
        else {
            document.getElementById("msgEmail").innerHTML = '"@' + dominio + '" não aceito.';
            document.getElementById("subBtn").disabled = true;
            document.getElementById("emailField").focus();
        }
    }
    else if (field.value.length == 0) {
        document.getElementById("msgEmail").innerHTML = "Nota: Utilize um Gmail, Outlook ou Hotmail.";
        document.getElementById("emailField").focus();
    }
    else {
        document.getElementById("msgEmail").innerHTML = "<font color='red'>E-mail inválido | Ex.: hen.can@hotmail.com </font>";
        document.getElementById("subBtn").disabled = true;
        document.getElementById("emailField").focus();
        // alert("E-mail invalido");
    }
}

function clearMsgEmail() {
    document.getElementById("msgEmail").innerHTML = "Nota: Utilize um Gmail, Outlook ou Hotmail.";
    document.getElementById("subBtn").disabled = true;
    document.getElementById("passField").disabled = true;
    document.getElementById("emailField").focus();
}
