
function calculatePromo()
{
    // get the values from the inputs

    const price = parseFloat(document.getElementById('price').value);
    const paidItems = parseFloat(document.getElementById('paidItems').value);
  
    const promoType = document.getElementById('promoType').value;

    const totalPaid = paidItems * price;

    // just used to show a friendly label in the output
    const promoLabels = {
        "1-1": "Buy 1 Get 1",
        "2-1": "Buy 2 Get 1",
        "1-2": "Buy 1 Get 2"
    };

    const message = `Promo: ${promoLabels[promoType]} | You pay for ${paidItems} items: ${totalPaid.toFixed(2)}`;

    document.getElementById('result').textContent = message;
}