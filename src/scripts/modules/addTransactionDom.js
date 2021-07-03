import { printDisplayAwait } from "../../index.js";

import transaction from "../data/data.js";

import Element from "./element.js";
import print from "./printScreen.js";

const addTrasactionsDom = (props) => {
  const { value, name, _id } = props;

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
  });

  button.addEventListener("click", async () => {
    const taskList = await transaction.delete(_id);

    print(taskList);

    printDisplayAwait();
  });

  li.append(span, button);

  $trasactionsUl.appendChild(li);
};

export default addTrasactionsDom;
