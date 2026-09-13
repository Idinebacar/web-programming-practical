

function calculateUnitPrice() {

    const price  = parseFloat(document.getElementById('price').value);

    const weight = parseFloat(document.getElementById('weight').value) || 1;

    const unit = document.getElementById('unit').value;



    const pricePer100 = (price / weight) * 100;

    const message = `$${pricePer100.toFixed(2)} per 100 ${unit}`;


    document.getElementById('output').textContent = message;
}