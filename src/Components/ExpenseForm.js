import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdSend } from "react-icons/md";
const ExpenseForm = ({ onSaveData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && amount > 0) {
      const newData = { id: uuidv4(), title, amount };
      setTitle("");
      setAmount("");
      onSaveData(newData);
    } else {
      const newData = "";
      onSaveData(newData);
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="expense-form__center">
        <div className="expense-form__group">
          <label htmlFor="title">title</label>
          <input
            type="text"
            className="expense-form__control"
            id="title"
            name="title"
            placeholder="e.g. rent"
            autoFocus
            value={title}
            onChange={handleTitle}
          />
        </div>
        <div className="expense-form__group">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="expense-form__control"
            id="amount"
            name="amount"
            placeholder="e.g. 15.99"
            min="0.01"
            max="99999999999"
            step="0.01"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className="expense-form__submit">
        submit
        <MdSend className="expense-form__send" />
      </button>
    </form>
  );
};

export default ExpenseForm;
