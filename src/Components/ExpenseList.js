import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ expenses, onClearAll, onClearItem }) => {
  const handleClearItem = (id) => {
    onClearItem(id);
  };
  return (
    <div className="expense-list">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            expense={expense}
            onClearItem={handleClearItem}
          />
        );
      })}
      {expenses.length > 0 && (
        <button className="clear-all" onClick={onClearAll}>
          clear all
          <MdDelete className="clear-icon" />
        </button>
      )}
    </div>
  );
};

export default ExpenseList;
