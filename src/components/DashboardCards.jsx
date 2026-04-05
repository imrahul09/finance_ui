
function DashboardCards({transactions}) {
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
          <div
            className="card shadow-sm h-100 "
            style={{ background: "linear-gradient(135deg, #1E3A8A, #3B82F6)",transition: "transform 0.2s"  }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div class="card-body text-white">
              <h5 class="card-title fw-normal">Balance</h5>
              <p class="card-text fw-bold fs-1">&#8377;{balance.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-4 mb-3 mb-md-0" >
          <div
            class="card shadow-sm h-100 "
            style={{ background: "linear-gradient(135deg, #16A34A, #4ADE80)" ,transition: "transform 0.2s"}}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
          
            <div class="card-body text-white">
              <h5 class="card-title fw-normal">Income</h5>
              <p class="card-text fw-bold fs-1">&#8377;{totalIncome.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div class=" col-12 col-md-4 mb-3 mb-md-0">
          <div
            class="card shadow-sm h-100"
            style={{ background: "linear-gradient(135deg, #DC2626, #F87171)" ,transition: "transform 0.2s"}}
             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
          
            <div class="card-body text-white">
              <h5 class="card-title fw-normal">Expenses</h5>
              <p class="card-text fw-bold fs-1">&#8377;{totalExpense.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
