import { useState } from "react";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expensesList = [];
  const [expenses, setInitialExpenses] = useState(expensesList);
  const addNewExpenseHandler = (expense) => {
    setInitialExpenses((prevExpenses) => [
      expense,
      ...prevExpenses,
    ]
    );
  }
  return (
    <div>
      <NewExpense newExpense = {addNewExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
