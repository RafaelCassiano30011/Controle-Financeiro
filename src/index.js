import CRUD from "./scripts/data/crud.js";
import transaction from "./scripts/data/index.js";

import printDisplay from "./scripts/modules/displayBalance.js";
import print from "./scripts/modules/printScreen.js";

const $form = document.querySelector(".form");

const balancePositiveInitial = CRUD.someValueReceit();
const balanceNegativeInitial = CRUD.someValueExpense();
const balanceInitial = CRUD.someBalance();

print(CRUD.get());

printDisplay({
  balancePositive: balancePositiveInitial,
  balanceNegative: balanceNegativeInitial,
  balance: balanceInitial,
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const $inputName = document.querySelector(".input-name");
  const $inputnumber = document.querySelector(".input-number");

  if ($inputName.value === "" || $inputnumber.value === "") return;

  const name = $inputName.value;
  const number = $inputnumber.value;

  CRUD.create({
    name: name,
    value: parseInt(number),
  });

  print(CRUD.get());

  const balancePositive = CRUD.someValueReceit();
  const balanceNegative = CRUD.someValueExpense();
  const balance = CRUD.someBalance();

  printDisplay({
    balancePositive: balancePositive,
    balanceNegative: balanceNegative,
    balance: balance,
  });

  $inputName.value = "";
  $inputnumber.value = "";
});
