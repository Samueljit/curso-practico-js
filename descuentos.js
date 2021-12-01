
// const OriginalPrice = 100;
// const discount = 15;

function calculateDiscountPrice(price, discount) {
    const percentagePriceWithDiscount = 100 - discount;
    const priceWithDiscount = (price * percentagePriceWithDiscount) / 100;

    return priceWithDiscount;
}



// console.log({
//     OriginalPrice,
//     discount,
//     percentagePriceWithDiscount,
//     priceWithDiscount
// });