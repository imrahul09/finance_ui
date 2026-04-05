function DashboardCards({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = totalIncome - totalExpense;
  return (
    <div className="container-fluid px-3 px-md-4">
      <div className="row text-center p-3 p-md-5 ">
        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div className="card card-blue shadow-sm h-100 ">
            <div className="card-body">
              <h5 className="card-title fw-normal">Balance</h5>
              <p className="card-text fw-bold fs-1">
                &#8377;{balance.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4 mb-3 mb-md-0">
          <div className="card card-green shadow-sm h-100 ">
            <div className="card-body">
              <h5 className="card-title fw-normal">Income</h5>
              <p className="card-text fw-bold fs-1">
                &#8377;{totalIncome.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        <div className=" col-12 col-md-4 mb-3 mb-md-0">
          <div className="card shadow-sm h-100 card-red">
            <div className="card-body">
              <h5 className="card-title fw-normal">Expenses</h5>
              <p className="card-text fw-bold fs-1">
                &#8377;{totalExpense.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
