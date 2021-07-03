import CRUD from "../data/crud.js";
import transaction from "../data/index.js";
import printDisplay from "./displayBalance.js";
import Element from "./element.js";
import print from "./printScreen.js";

const addTrasactionsDom = (props) => {
  const { value, name, id } = props;

  if (value === 0) return;
  const operator = props.value < 0 ? "-" : "+";
  const cssClass = props.value < 0 ? "minus" : "plus";
  const $trasactionsUl = document.querySelector(".transactions");

  const valueWithoutOperator = Math.abs(value);

  const span = Element({
    type: "span",
    class: [`${cssClass}`],
    text: `${operator} R$ ${valueWithoutOperator}`,
  });

  const button = Element({
    type: "button",
    class: [`delete-btn`],
    text: `x`,
  });

  const li = Element({
    type: "li",
    class: [`${cssClass}`],
    text: `${name}`,
    id: id,
  });

  button.addEventListener("click", () => {
    CRUD.delete(id);
    print(CRUD.get());
    const balancePositive = CRUD.someValueReceit();
    const balanceNegative = CRUD.someValueExpense();
    const balance = CRUD.someBalance();

    printDisplay({
      balancePositive: balancePositive,
      balanceNegative: balanceNegative,
      balance: balance,
    });
  });

  li.append(span, button);

  $trasactionsUl.appendChild(li);
};

export default addTrasactionsDom;
