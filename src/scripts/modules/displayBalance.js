const $displayExpense = document.getElementById("money-minus");
const $displayRevenue = document.getElementById("money-plus");
const $balance = document.getElementById("balance");

const printDisplay = (props) => {
  const { balanceNegative, balancePositive, balance } = props;

  $displayExpense.textContent = "";
  $displayRevenue.textContent = "";
  $balance.textContent = "";

  $displayRevenue.textContent = "R$" + balancePositive;
  $displayExpense.textContent = "R$" + Math.abs(balanceNegative);
  $balance.textContent = `R$ ${balance}`;
};

export default printDisplay;
