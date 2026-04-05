import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

function Charts({ transactions }) {
  //prepare data for line chart (group by date)
  const groupedData = Object.values(
    transactions.reduce((acc, t) => {
      if (!acc[t.date]) {
        acc[t.date] = {
          date: t.date,
          income: 0,
          expense: 0,
        };
      }
      if (t.type === "income") {
        acc[t.date].income += t.amount;
      } else {
        acc[t.date].expense += t.amount;
      }
      return acc;
    }, {}),
  );

  //prepare data for pie chart(expenses by category)
  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type != "expense") return acc;

      if (!acc[t.category]) {
        acc[t.category] = { name: t.category, value: 0 };
      }

      acc[t.category].value += t.amount;
      return acc;
    }, {}),
  );

  const COLORS = ["#3B82F6", "#16A34A", "#F59E0B", "#DC2626", "#8B5CF6"];

  return (
    <div className="container">
      <div className=" row d-flex flex-row justify-content-between">
        <div className=" col-12 col-md-6 bg-white p-3 rounded shadow-sm mb-5 ">
          <h5>Expenses Over Time</h5>
          {/*Line chart */}
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={groupedData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              {/*income line*/}
              <Line
                type="monotone"
                dataKey="income"
                stroke="#16A34A"
                name="Income"
              />

              {/*expense line  */}
              <Line
                type="monotone"
                dataKey="expense"
                stroke="#DC2626"
                name="Expense"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* <div className="col-1"></div> */}
        <div className="col-12 col-md-5 bg-white p-3 rounded shadow-sm mb-5">
          <h5>Expenses by Category</h5>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {categoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Charts;
