import React from "react";
import { MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, onClearItem }) => {
  const { id, title, amount } = expense;
  const handleClearItem = () => {
    onClearItem(id);
  };
  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h1>{title}</h1>
        <h2>${amount}</h2>
      </div>
      <div className="expense-item__buttons">
        {/* leave this edit button here. i will work on it later :))) */}
        {/* <MdEdit className="expense-item__edit" /> */}
        <MdDelete className="expense-item__delete" onClick={handleClearItem} />
      </div>
    </div>
  );
};

export default ExpenseItem;
