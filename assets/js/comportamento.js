const cx_preco_g = document.querySelector('#input_gasolina')
const cx_preco_a = document.querySelector('#input_alcool')
const cx_performance = document.querySelector('#input_performance')
const cx_dinheiro = document.querySelector('#input_dinheiro')
const cx_distancia = document.querySelector('#input_distancia')
const btn_calcular = document.getElementById('btn_calcular')
const valores = document.querySelectorAll('.valores');

const todosPreenchidos = () => {
    let preenchidos = true;
    valores.forEach(campo => {
        if (campo.value === '' || campo.value === null) {
            preenchidos = false;
        }
    });
    return preenchidos;
};

valores.forEach(campo => campo.addEventListener('input', () => {
    if (todosPreenchidos()) {
        btn_calcular.removeAttribute('disabled');
    } else {
        btn_calcular.setAttribute('disabled', 'disabled');
    }
}));

btn_calcular.addEventListener('click', () => {
    nome_gasolina.innerText = 'GASOLINA'
    nome_alcool.innerText = 'ALCOOL'

    let preco_gasolina = Number(cx_preco_g.value)
    let preco_alcool = Number(cx_preco_a.value)
    let eficiencia_gasolina = Number(cx_performance.value)
    let eficiencia_alcool = eficiencia_gasolina * 0.7
    let dinheiro = Number(cx_dinheiro.value)
    let distancia = Number(cx_distancia.value)

    let litros_gasolina = distancia / eficiencia_gasolina
    let litros_alcool = distancia / eficiencia_alcool
    let gasto_total_gasolina = litros_gasolina * preco_gasolina
    let gasto_total_alcool = litros_alcool * preco_alcool

    quant_g.innerText = `Você precisara de ${litros_gasolina.toFixed(2)} L`
    quant_a.innerText = `Você precisara de ${litros_alcool.toFixed(2)} L`
    preco_g.innerText = `Saira no total por ${gasto_total_gasolina.toFixed(2)} R$`
    preco_a.innerText = `Saira no total por ${gasto_total_alcool.toFixed(2)} R$`

    if (gasto_total_gasolina > dinheiro) {
        let falt_g = (gasto_total_gasolina - dinheiro).toFixed(2)
        suficiente_g.innerText = `Você não tem o suficiente para viajar falta ${falt_g} R$`
    }
    else if (gasto_total_gasolina <= dinheiro) {
        let sobra_g = (dinheiro - gasto_total_gasolina).toFixed(2)
        suficiente_g.innerText = `Você tem o suficiente para viajar e ira sobrar ${sobra_g} R$`
    }

    if (gasto_total_alcool > dinheiro) {
        let falt_a = (gasto_total_alcool - dinheiro).toFixed(2)
        suficiente_a.innerText = `Você não tem o suficiente para viajar falta ${falt_a} R$`
    }
    else if (gasto_total_alcool <= dinheiro) {
        let sobra_a = (dinheiro - gasto_total_alcool).toFixed(2)
        suficiente_a.innerText = `Você tem o suficiente para viajar e ira sobrar ${sobra_a} R$`
    }

    if (gasto_total_alcool > gasto_total_gasolina) {
        red = (gasto_total_alcool - gasto_total_gasolina).toFixed(2)
        dica.innerText = `Recomendo você viajar com gasolina pois economizará R$ ${red} em relação ao outro combustível`
    }

    else if (gasto_total_alcool < gasto_total_gasolina) {
        red = (gasto_total_gasolina - gasto_total_alcool).toFixed(2)
        dica.innerText = `Recomendo você viajar com alcool pois economizará R$ ${red} em relação ao outro combustível`
    }

    else if (gasto_total_alcool == gasto_total_gasolina) {
        dica.innerText = `Recomendo você viajar com qualquer um dos combustivel pois eles terão o mesmo custo`
    }
}
)
