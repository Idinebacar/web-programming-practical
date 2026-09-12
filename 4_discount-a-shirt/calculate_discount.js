function CalculateDiscount(){

    const price = parseFloat(document.getElementById('price').value);
    const discount = parseFloat(document.getElementById('discount').value);
    const quality = parseInt(document.getElementById('quality').value);

    const finalPricePerShirt = price - (price * (discount / 100));

    const totalFinalPrice = finalPricePerShirt * quality;

    const message = `Final price per shirt: ugx${finalPricePerShirt.toFixed(2)} <br>
                    Total for ${quality} shirt: ugx${totalFinalPrice.toFixed(2)}`;

    // utiliser innerHTML au lieu de textContent pour que le <br> soit interprété
    document.getElementById('output').innerHTML = message;
    // document.getElementById('output').textContent = message;
}