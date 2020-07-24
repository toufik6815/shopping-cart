function priceCalculator(btnId, productQuantityId, productPrice, productRate) {
    const button = document.getElementById(btnId);
    button.addEventListener('click', function () {
    const quantity = parseFloat(document.getElementById(productQuantityId).value);

if (btnId == 'plus-btn-1' || btnId == 'plus-btn-2') {
    let finalQuantity = document.getElementById(productQuantityId).value = quantity + 1;
    document.getElementById(productPrice).innerText = productRate * finalQuantity;
}

else if (btnId == 'minus-btn-1' || btnId == 'minus-btn-2') {
    if (quantity > 0) { // to avoid negative quantity
    document.getElementById(productQuantityId).value = quantity - 1;
}
            
    finalQuantity = document.getElementById(productQuantityId).value;
    document.getElementById(productPrice).innerText = productRate * finalQuantity;
} //click area end

            // Final calculation area start
            
    let totalMobilePrice = parseFloat(document.getElementById("mobile-phone-price").innerText);
    let totalCoverPrice = parseFloat(document.getElementById("cover-price").innerText);
    let totalPrice = totalMobilePrice + totalCoverPrice;
    document.getElementById("total-price").innerText = totalPrice;
    let taxRate = 5; // If tax rate = 5% (can vary)
    document.getElementById("tax").innerText = Math.round(totalPrice * taxRate / 100);
    document.getElementById("grand-total").innerText = totalPrice + Math.round(totalPrice * taxRate / 100);
});
}
    priceCalculator('plus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
    priceCalculator('minus-btn-1', 'phone-quantity', "mobile-phone-price", 1219);
    priceCalculator('plus-btn-2', 'cover-quantity', "cover-price", 59);
    priceCalculator('minus-btn-2', 'cover-quantity', "cover-price", 59);