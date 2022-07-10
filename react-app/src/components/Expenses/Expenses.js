import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses (props) {
  const onSelectedFilterDateHandler = (selectedFilterDate) => {
    console.log('expenses here');
    console.log(selectedFilterDate);
  }
    return (
      <div>
        <ExpensesFilter selectFilterDate = {onSelectedFilterDateHandler} />
        <Card className ="expenses">
            <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      </Card>
      </div>
      
        
    );
}

export default Expenses;