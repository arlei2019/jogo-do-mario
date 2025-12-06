document.addEventListener('DOMContentLoaded', () => {
    // 1. Variáveis do Jogo
    let saldo = 0.00;
    const custoAposta = 10.00; // Ficou mais caro, inflação do Tigre
    let estaGirando = false;
    
    // Lista de emojis (quanto menos leões, mais difícil)
    const simbolos = ['🧼', '🌻', '💎', '💵', '🤑', '📿', '💳', '💰', '🦁', '🧼', '🌻']; 

    // Selecionando elementos da tela
    const saldoDisplay = document.querySelector('footer p');
    const btnApostar = document.querySelector('.apostar');
    const btnDeposito = document.querySelector('.deposito');
    const slots = document.querySelectorAll('.item'); // Pega todos os quadradinhos

    // 2. Função para atualizar o texto do saldo
    function atualizarDisplaySaldo() {
        let status = " (Pobre)";
        if (saldo >= 100) status = " (Trabalhador)";
        if (saldo >= 1000) status = " (Rei do Camarote)";
        if (saldo >= 10000) status = " (Aposentado)";

        // Formata para dinheiro brasileiro R$
        saldoDisplay.innerText = `Saldo: ${saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} ${status}`;
        
        // Muda a cor se tiver sem grana
        if (saldo < custoAposta) {
            saldoDisplay.style.color = 'red';
        } else {
            saldoDisplay.style.color = 'white';
        }
    }

   