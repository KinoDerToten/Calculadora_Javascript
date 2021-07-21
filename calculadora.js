onload = () => {
    document.querySelector('#bt-0').onclick = () => digito(0);
    document.querySelector('#bt-1').onclick = () => digito(1);
    document.querySelector('#bt-2').onclick = () => digito(2);
    document.querySelector('#bt-3').onclick = () => digito(3);
    document.querySelector('#bt-4').onclick = () => digito(4);
    document.querySelector('#bt-5').onclick = () => digito(5);
    document.querySelector('#bt-6').onclick = () => digito(6);
    document.querySelector('#bt-7').onclick = () => digito(7);
    document.querySelector('#bt-8').onclick = () => digito(8);
    document.querySelector('#bt-8').onclick = () => digito(9);
    document.querySelector('#bt-comma').onclick = virgula;
    document.querySelector('#bt-ac').onclick = limpa;
    document.querySelector('#bt-divide').onclick = () => digito('/');
    document.querySelector('#bt-times').onclick = () => digito('*');
    document.querySelector('#bt-minus').onclick = () => digito('-');
    document.querySelector('#bt-plus').onclick = () => digito('+');
}

// Variaveis para armazenar o valor do operador e o estado da calculadora
let sValor = '0'; // valor que será apresentado no display
let ehNovoNumero = true; // Indica se o proximo digito sera de um novo numero
let valorAnterior = 0; // valor acumulado para uma operacao
let operacaoPendente = null; // operacao acumulada


// Atualizaçao do visor
const atualizaVisor = () => {
    let [parteInteira, parteDecimal] = sValor.split(',');
    let v = '';
    c = 0;
    for(let i = parteInteira.length - 1; i >= 0; i--){
        if (++c > 3) {
            v = '.' + v;
            c = 1
        }
        v = parteInteira[i] + v;
    }
    v = v + (parteDecimal ? ',' + parteDecimal : '')
    document.querySelector('#display').innerText = v;
}

// Tratamento do clique no botao de digito
const digito = (n) => {
    if (ehNovoNumero) {
        sValor = '' + n;
        ehNovoNumero = false;
    } else {sValor += n;}
    atualizaVisor();
}

// Tratamento do clique no botão de ponto decimal
const virgula = () =>  {
    if (ehNovoNumero) {
        sValor = '0,'
    } else if (sValor.indexOf(',') == -1){
        sValor += ','
        }
    atualizaVisor();
}

// Tratamento do clique do botao AC (All Clear)
const limpa = () => {
    ehNovoNumero = true;
    sValor = '0';
    atualizaVisor();
}

// Converte a string do valor para um numero real
const valorAtual = () => parseFloat(sValor.replace(',', '.');

// Tratamento do clique nos botoes de operadores
const operador = (op) => {
    calcula();
    valorAnterior = valorAtual;
    operacaoPendente = op;
    ehNovoNumero = true;
};