import transaction from "./scripts/data/data.js";

import printDisplay from "./scripts/modules/displayBalance.js";
import print from "./scripts/modules/printScreen.js";

const $form = document.querySelector(".form");

print(transaction.read());

export const printDisplayAwait = async () => {
  const balancePositiveInitial = await transaction.someValueReceit();
  const balanceNegativeInitial = await transaction.someValueExpense();
  const balanceInitial = await transaction.someBalance();

  printDisplay({
    balancePositive: balancePositiveInitial,
    balanceNegative: balanceNegativeInitial,
    balance: balanceInitial,
  });
};

printDisplayAwait();

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const $inputName = document.querySelector(".input-name");
  const $inputnumber = document.querySelector(".input-number");

  if ($inputName.value === "" || $inputnumber.value === "") return;

  const name = $inputName.value;
  const number = $inputnumber.value;

  await print(
    transaction.create({
      name: name,
      value: parseInt(number),
    })
  );
  printDisplayAwait();

  $inputName.value = "";
  $inputnumber.value = "";
});
