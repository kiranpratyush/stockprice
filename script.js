"use strict";

const inputPurchase = document.querySelector("#purchase-price");
const inputQuantity = document.querySelector("#quantity");
const inputSell = document.querySelector("#sellprice");
const btn = document.querySelector(".value");
const h3 = document.querySelector(".result");
const item2 = document.querySelector(".item2");

function calcProfitOrLoss(costPrice, quantity, sellingPrice) {
  let profit;
  let loss;
  let percentProfit;
  let percentloss;
  if (costPrice > sellingPrice) {
    loss = (costPrice - sellingPrice) * quantity;
    percentloss = Math.round((loss / (costPrice * quantity)) * (100));
    console.log(percentloss);
    if (percentloss > 50) {
      h3.textContent = `You have Made total ${loss} rupees loss(in ${percentloss}%)`;
      item2.style.backgroundColor = "red";
    } else {
      h3.textContent = `You have Made total ${loss} rupees loss(in ${percentloss}%))`;
      item2.style.backgroundColor = "red";
    }
  } else if (sellingPrice > costPrice) {
    profit = (sellingPrice - costPrice) * quantity;
    percentProfit = Math.round((profit / (costPrice * quantity)) * 100);
    h3.textContent = `You have Made total ${profit} rupees profit(in ${percentProfit}%)`;
    item2.style.backgroundColor = "green";
  } else {
    h3.textContent = `No Gain No Loss`;
  }
}
function checkValidity(costPrice, quantity, sellingPrice) {
  if (costPrice <= 0 || quantity <= 0 || sellingPrice <= 0) {
    return true;
  }
}

btn.addEventListener("click", function () {
  let costPrice = Number(inputPurchase.value);
  const quantity = Number(inputQuantity.value);
  const sellingPrice = Number(inputSell.value);
  if (checkValidity(costPrice, quantity, sellingPrice)) {
    h3.textContent = "Enter Positive Values in all the fields";
  } else {
    calcProfitOrLoss(costPrice, quantity, sellingPrice);
  }
});
