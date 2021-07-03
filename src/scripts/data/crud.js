import generateId from "../modules/generateId.js";
import print from "../modules/printScreen.js";
import transaction from "./index.js";

const CRUD = {
  get: () => {
    const newTransaction = [...transaction.data];

    return newTransaction;
  },
  create: (props) => {
    transaction.data.push({
      id: generateId(),
      name: props.name,
      value: props.value,
    });
  },
  delete: (id) => {
    const data = CRUD.get();

    const newList = data.filter((item) => item.id !== id);

    transaction.data = newList;
  },

  getValue: () => {
    const listTransaction = CRUD.get();
    const valueList = listTransaction.map((transaction) => transaction.value);

    return valueList;
  },
  someValueReceit: () => {
    const arrayValue = CRUD.getValue();

    const someNumber = arrayValue
      .filter((value) => value > 0)
      .reduce((acc, item) => acc + item, 0);

    return someNumber;
  },
  someValueExpense: () => {
    const arrayValue = CRUD.getValue();

    const someNumber = arrayValue
      .filter((value) => value < 0)
      .reduce((acc, item) => acc + item, 0);

    return someNumber;
  },
  someBalance: () => {
    const balancePositiveInitial = CRUD.someValueReceit();
    const balanceNegativeInitial = CRUD.someValueExpense();

    let value = balanceNegativeInitial + balancePositiveInitial;

    return value;
  },
};

export default CRUD;
