function calculateChange() {


    const amountPaid = parseFloat(document.getElementById('amountPaid').value) || 0;

    const itemCost = parseFloat(document.getElementById('itemCost').value) || 0;

    const currency = document.getElementById('currency').value;

    const change = amountPaid - itemCost;

    let message = "";
    
    if (change < 0) {
        message = `Not enough! You still owe ${Math.abs(change).toFixed(2)} ${currency}`;
    } else {
        message = `Your change: ${change.toFixed(2)} ${currency}`;
    }

    document.getElementById('output').textContent = message;
}