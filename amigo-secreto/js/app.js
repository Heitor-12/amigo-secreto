let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigos.value)) {
        alert('Nome ja adicionado!');
        return
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value)
    
    if(lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value
    }
    amigo.value = ''
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }
  embaralha(amigos);
  let sorteio = document.getElementById('lista-sorteio');

  for (let i = 0; i < amigos.length; i++) {

    if (i == amigos.lenght - 1) {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] +'<br>';
    } else {
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i +1] +'<br>';
    }
  }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

