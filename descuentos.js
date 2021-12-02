
// const OriginalPrice = 100;
// const discount = 15;

function calculateDiscountPrice(price, discount) {
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}

function buttonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const priceWithDiscount = calculateDiscountPrice(priceValue, discountValue);

    const resultPrice = document.getElementById("ResultPrice");
    resultPrice.innerText = `Your price with discount is : $${priceWithDiscount}`

}

// console.log({
//     OriginalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// });