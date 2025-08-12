let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, digite um nome.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    atualizarListaAmigos();
    input.value = '';
}

function atualizarListaAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }

    let sorteados = [...amigos];
    embaralhar(sorteados);

    // Ajusta o resultado para garantir que ninguém tire a si mesmo
    for (let i = 0; i < amigos.length; i++) {
        if (amigos[i] === sorteados[i]) {
            if (i === amigos.length - 1) {
                [sorteados[i], sorteados[i - 1]] = [sorteados[i - 1], sorteados[i]];
            } else {
                [sorteados[i], sorteados[i + 1]] = [sorteados[i + 1], sorteados[i]];
            }
        }
    }

    exibirResultado(sorteados);
}

function exibirResultado(sorteados) {
    const ulResultado = document.getElementById('resultado');
    ulResultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${amigos[i]} → ${sorteados[i]}`;
        ulResultado.appendChild(li);
    }
}

function embaralhar(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
}