import addTrasactionsDom from "./addTransactionDom.js";

const $trasactionsUl = document.querySelector(".transactions");

const print = async (props) => {
  $trasactionsUl.innerHTML = "";

  const list = await props;

  list.forEach((item) => {
    addTrasactionsDom(item);
  });
};

export default print;
