import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

  const [filterYear, setFilterYear] = useState("2020");

  const onSelectedFilterDateHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={onSelectedFilterDateHandler}
        />
        <ExpensesList items = {filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
