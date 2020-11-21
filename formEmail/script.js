// Função de Valiidação do Campo de Email do Formulário
function validacaoEmail(field) {
    user = field.value.substring(0, field.value.indexOf("@")); // Trecho até o @
    domain = field.value.substring(field.value.indexOf("@") + 1, field.value.length); //Trecho após o @
    console.log(user)
    console.log(domain)

    // Verificação de tamanho mínimo, existência de espaços vazios e caracteres especiais.
    if ((user.length >= 1) &&
        (domain.length >= 3) &&
        (user.search("@") == -1) &&
        (domain.search("@") == -1) &&
        (user.search(" ") == -1) &&
        (domain.search(" ") == -1) &&
        (domain.search(".") != -1) &&
        (domain.indexOf(".") >= 1) &&
        (domain.lastIndexOf(".") < domain.length - 1)) {
        // Verificação do dominio do email
        if (domain == "gmail.com" || domain == "hotmail.com" || domain == "outlook.com" || domain == "outlook.com.br") {
            document.getElementById("msgEmail").innerHTML = "<font color='blue'>E-mail válido"; //Msg de Validação
            document.getElementById("passField").disabled = false;
            document.getElementById("passField").focus(); // Focus forçado para o próximo campo a ser preenchido.
            document.getElementById("subBtn").disabled = false;
        }
        else {
            document.getElementById("msgEmail").innerHTML = '"@' + domain + '" não aceito.';
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
// Função que retorna as configurações iniciais do formulário
function clearMsgEmail() {
    document.getElementById("msgEmail").innerHTML = "Nota: Utilize um Gmail, Outlook ou Hotmail.";
    document.getElementById("subBtn").disabled = true;
    document.getElementById("passField").disabled = true;
    document.getElementById("emailField").focus();
}
