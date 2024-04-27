document.getElementById("submitButton").addEventListener("click", function () {
    // Obtém os valores dos campos de entrada
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    
    // Verifica se algum dos campos está vazio
    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

     // Console log para verificar os dados
     console.log("Nome:", name);
     console.log("Email:", email);
     console.log("Telefone:", phone);
});