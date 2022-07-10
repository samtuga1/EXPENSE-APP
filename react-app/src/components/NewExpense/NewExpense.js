import React  from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(),
        }
        props.NewExpense(expenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onAddExpense = {saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;