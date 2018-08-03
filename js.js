var $btnCalculate = document.getElementById('btnCalculate');
var $inputMoney = document.getElementById('inputMoney');
var $resultOutput = document.getElementById('resultInfo');
var $selectCurrency = document.getElementById('selectCurrency');

var RATE_PRECISION = 3;
var RATES = {
    usd: {
        buy: 26.897,
        sell: 27.228
    },
    eur: {
        buy: 31.179,
        sell: 31.903
    },
    gbr: {
        buy: 34.540,
        sell: 35.700
    },
    aud: {
        buy: 17.950,
        sell: 20.370
    },
    cad: {
        buy: 19.250,
        sell: 20.900
    }
};

$btnCalculate.addEventListener('click', function (event) {
    event.preventDefault();

    var selectedCurrency = $selectCurrency.value;
    if (selectedCurrency === 'none') {
        $resultOutput.textContent = 'Choose currency';
        $resultOutput.style.color = '#ad2926';
        return;
    } else {
        $resultOutput.style.color = '#232541';
    }
    var buy = document.getElementById('buy').checked;
    var operation = buy ? 'buy' : 'sell';

    $resultOutput.textContent = exchange(selectedCurrency, operation, $inputMoney.value);
});

function exchange(currency, operation, amount) {
    var result = RATES[currency][operation] * amount;
    return result.toFixed(RATE_PRECISION);
}