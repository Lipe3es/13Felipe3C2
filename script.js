document.getElementById("calcular").addEventListener("click", function() {
    let Lblresultado = document.getElementById("lbl_resultado")
    let resultado = document.getElementById("resultado")

    let Valor = parseFloat(document.getElementById("valor").value)
    let Taxa = parseFloat(document.getElementById("taxajuros").value / 100)
    let Parcelas = parseFloat(document.getElementById("parcelas").value)

    if (Valor != NaN && Taxa != 0 && Parcelas != NaN) {
        var formatter = new Intl.NumberFormat(undefined, {
            style: 'currency',
            currency: 'BRL',
        });

        let Valorfut = (Valor * ((((1 + Taxa) ** Parcelas) - 1) / Taxa)).toFixed(2)
        resultado.style.display = "block"
        Lblresultado.innerHTML = `José da Silva, se você aplicar ${formatter.format(Valor)}, à taxa de juros de ${Taxa * 100}% ao mês, durante ${Parcelas} meses, acumulará uma poupança de ${Valorfut}.`
    } else {
        resultado.style.display = "block"
        Lblresultado.innerHTML = "Complete o formulário acima"
    }
})