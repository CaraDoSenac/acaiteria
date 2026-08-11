function calcularESalvar() {
    let totalAdicionais = 0;
    let inputs = document.querySelectorAll('.qtd-sabor');

    inputs.forEach(function(input) {
        let quantidade = parseInt(input.value);
        let preco = parseFloat(input.getAttribute('data-preco'));
        
        if (quantidade > 0) {
            totalAdicionais += (quantidade * preco);
        }
    });

    let precoBase = 15.00; 
    let valorFinal = precoBase + totalAdicionais;

    localStorage.setItem('valorTotalPedido', valorFinal.toFixed(2));

    // Agora redireciona para a tela de entrega primeiro!
    window.location.href = "entrega.html"; 
}