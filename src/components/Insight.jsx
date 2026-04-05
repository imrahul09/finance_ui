function Insights({ transactions, theme }) {
  // 🔹 Total Income & Expense
  let income = 0;
  let expense = 0;

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "income") income += t.amount;
    else {
      expense += t.amount;

      // Category tracking
      if (!categoryMap[t.category]) {
        categoryMap[t.category] = 0;
      }
      categoryMap[t.category] += t.amount;
    }
  });

  // 🔹 Top spending category
  let topCategory = "N/A";
  let max = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > max) {
      max = categoryMap[key];
      topCategory = key;
    }
  }

  // 🔹 Savings insight
  const savings = income - expense;

  let message = "";
  if (savings > 0) {
    message = "Good job! You are saving money.";
  } else if (savings < 0) {
    message = "Warning: You are spending more than you earn.";
  } else {
    message = "You are breaking even.";
  }

  return (
    <div
      className={`container p-3 p-md-5 rounded shadow-sm mb-5 ${
        theme === "dark" ? "bg-dark text-white" : "bg-white"
      }`}
    >
      <h2 className="fs-4 fw-bold mb-4" text-center>
        Insights
      </h2>

      <div className=" row g-3  ">
        {/* Top Category */}
        <div className="col-12 col-md-4">
          <div
            className="px-3 px-md-5 py-3 text-center rounded shadow h-100"
            style={{ backgroundColor: "#cbd1cd" }}
          >
            <h3 className="text-secondary fs-5 mt-2">Top Spending</h3>
            <p className="fw-bold">{topCategory}</p>
          </div>
        </div>
        {/*expense*/}
        <div className="col-12 col-md-4">
          <div
            className="px-3 px-md-5 py-3 text-center rounded shadow h-100"
            style={{ backgroundColor: "#dea097" }}
          >
            <h3 className="text-secondary fs-5 mt-2">Total Expense</h3>
            <p className="fw-bold text-danger">₹ {expense.toLocaleString()}</p>
          </div>
        </div>

        {/* Savings */}
        <div className="col-12 col-md-4">
          <div
            className="px-3 px-md-5 py-3 text-center rounded shadow h-100"
            style={{ backgroundColor: "#8cdba4" }}
          >
            <h3 className="text-secondary fs-5 mt-2">Savings</h3>
            <p className="fw-bold text-success">₹ {savings.toLocaleString()}</p>
          </div>
        </div>
      </div>

      {/* 🔹 Message */}
      <div
        className="mt-4 mx-auto p-3 text-center fw-bold rounded"
        style={{ backgroundColor: "#91bccf" }}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Insights;
