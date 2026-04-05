import Charts from "../components/Charts";
import DashboardCards from "../components/DashboardCards";
import RoleSwitcher from "../components/RoleSwitcher";
import TransactionTable from "../components/TransactionTable";
import Insight from "../components/Insight";
import ToggleButton from"../components/ToggleButton";

function Dashboard({transactions,role,setRole,addTransaction,theme,setTheme}) {
 
  return (
    <div className="container">
      <div className="d-flex justify-content-between  align-items-center my-3">
        <h2>Finance Dashboard</h2>
      <ToggleButton theme = {theme} setTheme = {setTheme}/>
      </div>
      <RoleSwitcher role={role} setRole={setRole} />
      <DashboardCards transactions={transactions} />
      <Charts transactions={transactions} />
      <Insight transactions = {transactions}/>
      <TransactionTable role={role} transactions={transactions} addTransaction ={addTransaction}/>
    </div>
  );
}

export default Dashboard;
