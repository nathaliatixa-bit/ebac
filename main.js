const form = document.getElementById('form_campo')

function validacampos(valorA, valorB){
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const campoA = document.getElementById('campoA')
    const campoB = document.getElementById('campoB')
    const mensagemSucesso = "Sucesso - Campo B maior que campo A"

    formValido = validacampos(Number(campoA.value), Number(campoB.value))
    if (formValido) {
        alert(mensagemSucesso);
    } else {
        alert ('Erro - Campo B menor que campo A')
    }
})