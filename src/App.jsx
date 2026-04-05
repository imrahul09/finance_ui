import Dashboard from "./pages/Dashboard";
import { useState, useEffect } from "react";
import { transactions as initialData } from "./data/mockData";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [transactions, setTransactions] = useState(() => {
    const stored = localStorage.getItem("transactions");
    return stored ? JSON.parse(stored) : initialData;
  });

  // Saves updated data to localStotrage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const [role, setRole] = useState("viewer");

  const addTransaction = (newTransaction) => {
    setTransactions((prev) => [...prev, { id: Date.now(), ...newTransaction }]);
  };

  return (
    <>
      <div className="p-5">
        <Dashboard
          transactions={transactions}
          role={role}
          setRole={setRole}
          addTransaction={addTransaction}
          theme={theme}
          setTheme={setTheme}
        />
      </div>
    </>
  );
}

export default App;
