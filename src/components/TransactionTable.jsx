import {useState} from "react";
function TransactionTable({ transactions,role,addTransaction }) {
  const [filter, setfilter] = useState("all");
  const [search, setSearch] = useState("");

 const [showForm, setShowForm] = useState(false);
 

  //filter logic
  const filterData = transactions
    .filter((t) => {
      if (filter === "all") return true;
      return t.type === filter;
    })
    .filter((t) => t.category.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="container bg-white p-3 rounded shadow-sm ">
      <p>See All Transactions</p>
      <div className="d-flex flex-column flex-md-row  justify-content-between  mb-3">
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
        <div className="mb-4 p-4 border rounded">
          <input
            type="text"
            placeholder="Category"
            className="border p-2 mr-2 px-2 mx-2"
            id="category"
          />
          <input
            type="number"
            placeholder="Amount"
            className="border p-2 mr-2"
            id="amount"
          />
          <select id="type" className="border p-2 mr-2 px-4 mx-2">
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

           <button
            onClick={() => {
              const category = document.getElementById("category").value;
              const amount = document.getElementById("amount").value;
              const type = document.getElementById("type").value;

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
      <div className = "table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {filterData.length > 0? ( filterData.map((transaction, index) => {
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
          })):(
            <tr>
              <td className="p-2 text-center fw-bold text-danger" colSpan="4" >
                No transactions found
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
