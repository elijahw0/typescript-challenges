"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TypeScript
function calculatePrice(quantity, pricePerUnit) {
    return quantity * pricePerUnit;
}
var quantity = 5;
var pricePerUnit = 10;
var totalPrice = calculatePrice(quantity, pricePerUnit);
console.log("Total price: $" + totalPrice);
var discount = 2;
var discountedPrice = totalPrice - discount;
console.log("Discounted price: $" + discountedPrice);
var finalPrice = discountedPrice - 5;
console.log("Final price: $" + finalPrice);
var itemsSold = 7;
console.log("Items sold: " + itemsSold);
