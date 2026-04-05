import { useState } from "react";
function TransactionTable({ transactions, role, addTransaction, theme }) {
  const [filter, setfilter] = useState("all");
  const [search, setSearch] = useState("");

  const [showForm, setShowForm] = useState(false);

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  //filter logic
  const filterData = transactions
    .filter((t) => {
      if (filter === "all") return true;
      return t.type === filter;
    })
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()));

  const [sortOrder, setSortOrder] = useState("asc");

  const sortedData = [...filterData].sort((a, b) => {
    return sortOrder === "asc" ? a.amount - b.amount : b.amount - a.amount;
  });

  return (
    <div
      className={`container  p-3 p-md-5 rounded shadow-sm  ${
        theme === "dark" ? "bg-dark text-white" : "bg-white"
      }`}
    >
      <p
        className={`fw-bold ${theme === "dark" ? "text-light" : "text-muted"}`}
      >
        See all Transactions
      </p>
      <button
        className="btn btn-sm btn-outline-primary mb-2"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Amount
      </button>

      <div className="d-flex flex-column flex-md-row justify-content-between  mb-3">
        {/*select*/}
        <select
          className="form-select w-auto"
          value={filter}
          onChange={(e) => setfilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>

        {/*input*/}
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {role == "admin" && (
        <button
          onClick={() => setShowForm(true)}
          className="btn btn-primary p-1 mb-3"
        >
          + Add transaction
        </button>
      )}

      {showForm && (
        <div className="mb-4 p-3 p-md-5 border rounded">
          <input
            type="text"
            placeholder="Category"
            className={`mb-2 p-1 p-md-2 border rounded ${
              theme === "dark" ? "border-secondary" : ""
            }`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            className={`mb-2 p-1 p-md-2  border rounded ${
              theme === "dark" ? "border-secondary" : ""
            }`}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select
            id="type"
            className="border rounded p-1 p-md-2 mr-2 px-4 mx-2"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <button
            onClick={() => {
              addTransaction({
                date: new Date().toISOString().split("T")[0],
                category,
                amount: Number(amount),
                type,
              });

              setShowForm(false);
            }}
            className="btn btn-success text-white px-3 py-2 rounded"
          >
            Add
          </button>
        </div>
      )}
      <div className="table-responsive">
        <table
          className={`table table-hover ${
            theme === "dark" ? "table-dark" : ""
          }`}
        >
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{transaction.date}</th>
                    <td>{transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td
                      className={
                        transaction.type === "income"
                          ? "text-success"
                          : "text-danger"
                      }
                    >
                      {transaction.type}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td className="p-2 text-center fw-bold " colSpan="4">
                  <div className="text-center p-3">
                    <p
                      className={`${theme === "dark" ? "text-light" : "text-muted"}`}
                    >
                      No transactions found{" "}
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
