document.getElementById("submitButton").addEventListener("click", function () {
    // Obtém os valores dos campos de entrada
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    // Validação do email e do telefone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;
  
    // Verifica se algum dos campos está vazio
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
    // Verifica se o email é válido
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }
    
    // Verifica se o número de telefone é válido
    if (!phoneRegex.test(phone)) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }
    
    // Oculta a div container e mostra a div mensagem
    document.querySelector('.container').style.display = 'none';
    document.querySelector('.side-div').style.display = 'none';
    document.getElementById('mensagem').style.display = 'block';

    // Console log para verificar os dados (opcional)
    console.log("Nome:", name);
    console.log("Email:", email);
    console.log("Telefone:", phone);
});