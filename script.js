document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const marca = document.getElementById('marca').value;
            const placa = document.getElementById('placa').value;
            const modelo = document.getElementById('modelo').value;
            const ano = document.getElementById('ano').value;

            let veiculos = JSON.parse(localStorage.getItem('garagem')) || [];
            let id = veiculos.length ? veiculos[veiculos.length - 1].id + 1 : 1;
            while (veiculos.some((veiculo) => veiculo.id === id)) {
    		id++;
            }

            const veiculo = { id, placa, marca, modelo, ano };

            veiculos.push(veiculo);

            localStorage.setItem('garagem', JSON.stringify(veiculos));

            // Exibe o modal de sucesso (se existir)
            const modal = document.getElementById("myModal");
            if (modal) {
                modal.style.display = "block";
            }

            // Reseta o formulário
            form.reset();
        });
    }

    // Configurações do modal
    const modal = document.getElementById("myModal");
    const span = document.querySelector(".close");

    if (modal && span) {
        // Quando o usuário clicar no <span> (x), fecha o modal
        span.onclick = function() {
            modal.style.display = "none";
        };

        // Quando o usuário clicar fora do modal, fecha o modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});
