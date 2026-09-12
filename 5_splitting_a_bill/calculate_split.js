
function CalculateSplit(){

    const totalBill = parseFloat(document.getElementById('totalBill').value);

    const number_of_friends = parseFloat(document.getElementById('num_of_friends').value);

    const roundUp = document.getElementById('roundUp').value;


    let amountPerPerson = totalBill / number_of_friends;

    if (roundUp === 'yes') {
        amountPerPerson =Math.ceil(amountPerPerson);

    }else {
        amountPerPerson = amountPerPerson.toFixed(2);
    }

    const message = `Each person pays: $ ${amountPerPerson}`

    document.getElementById('output').textContent = message;
}