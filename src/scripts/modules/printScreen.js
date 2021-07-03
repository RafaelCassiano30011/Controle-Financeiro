import CRUD from "../data/crud.js";
import transaction from "../data/index.js";

import addTrasactionsDom from "./addTransactionDom.js";

const $trasactionsUl = document.querySelector(".transactions");

const print = (props) => {
  $trasactionsUl.innerHTML = "";

  props.forEach((item) => {
    addTrasactionsDom(item);
  });
};

export default print;
