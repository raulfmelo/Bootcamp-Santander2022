const somaInput: HTMLInputElement = document.getElementById(
    "soma"
) as HTMLInputElement;
const botaoAtualizar = document.getElementById(
    "atualizar-saldo"
) as HTMLButtonElement;
const botaoLimpar = document.getElementById(
    "limpar-saldo"
) as HTMLButtonElement;
const campoSaldo = document.getElementById("campo-saldo") as HTMLSpanElement;

let total: number = 0;

function somarAoSaldo(total: number, valor: number) {
    total += valor;
    campoSaldo.textContent = String(total);
}

botaoAtualizar.addEventListener("click", () => {
    let valor = parseInt(somaInput.value);
    if (!isNaN(valor)) {
        somarAoSaldo(total, valor);
    }
});

botaoLimpar.addEventListener("click", () => {
    total = 0;
    campoSaldo.textContent = String(total);
});
