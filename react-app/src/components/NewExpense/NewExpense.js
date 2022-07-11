import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random(),
        }
        props.newExpense(expenseData);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const endEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm endEditing = {endEditingHandler} onAddExpense = {saveExpenseDataHandler} />}
        </div>
    );
}

export default NewExpense;