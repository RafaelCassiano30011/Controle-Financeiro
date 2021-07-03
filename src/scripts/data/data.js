import api from "../../api/api.js";

const transaction = {
  create: async (props) => {
    const newList = await api(
      { url: "/create" },
      {
        method: "POST",
        body: JSON.stringify(props),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(newList);

    return newList;
  },
  read: async () => {
    const taskList = await api({ url: "/list" });

    return taskList;
  },

  delete: async (id) => {
    const taskList = await api(
      { url: `/delete/${id}` },
      {
        method: "DELETE",
      }
    );
    return taskList;
  },
  getValue: async () => {
    const listTransaction = await transaction.read();
    const valueList = listTransaction.map((transaction) => transaction.value);

    return valueList;
  },
  someValueReceit: async () => {
    const arrayValue = await transaction.getValue();

    const someNumber = arrayValue
      .filter((value) => value > 0)
      .reduce((acc, item) => acc + item, 0);

    return someNumber;
  },
  someValueExpense: async () => {
    const arrayValue = await transaction.getValue();

    const someNumber = arrayValue
      .filter((value) => value < 0)
      .reduce((acc, item) => acc + item, 0);

    return someNumber;
  },
  someBalance: async () => {
    const balancePositiveInitial = await transaction.someValueReceit();
    const balanceNegativeInitial = await transaction.someValueExpense();

    let value = balanceNegativeInitial + balancePositiveInitial;
    console.log(value);

    return value;
  },
};

export default transaction;
