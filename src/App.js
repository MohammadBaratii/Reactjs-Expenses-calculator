import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import Alert from "./Components/Alert";
import githubLogo from "./img/GitHub-Mark-120px-plus.png";
import { useState } from "react";

// i used "uuid" for some hard coding expenses but i leave the code here
// import { v4 as uuidv4 } from "uuid";

//these are my hard coding expenses :))
const initialExpenses = [
  // { id: uuidv4(), title: "rent", amount: 1000 },
  // { id: uuidv4(), title: "car payment", amount: 500 },
  // { id: uuidv4(), title: "buy a new phone", amount: 900 },
];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [error, setError] = useState(false);

  let showAlert;
  const handleSaveData = (data) => {
    if (data === "") {
      setError(true);
    } else {
      setError(false);
      setExpenses([data, ...expenses]);
    }
  };

  const handleClearAll = () => {
    setExpenses([]);
  };

  const handleClearItem = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const handleClearAlert = () => {
    clearTimeout(showAlert);
    setError(false);
  };

  return (
    <div className="App">
      {error && (
        <Alert
          title="The inputs shouldn't be empty!"
          onClear={handleClearAlert}
        />
      )}
      <h1>Budget calculator</h1>
      <main>
        <ExpenseForm onSaveData={handleSaveData} />
        <ExpenseList
          expenses={expenses}
          onClearAll={handleClearAll}
          onClearItem={handleClearItem}
        />
      </main>
      <h2>
        total:{" "}
        <span>
          $
          {expenses.reduce((acc, curr) => {
            return (acc += Number(curr.amount.toLocaleString("en-US")));
          }, 0)}
        </span>
      </h2>
      <div className="github">
        <a
          href="https://github.com/MohammadBaratii"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubLogo} alt="" />
        </a>
      </div>
    </div>
  );
};

export default App;
