import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Header />

        <main className="page-content">
          <Outlet />
        </main>

        <footer className="footer">
          © 2026 Dashboard App | Developed by Rehan
        </footer>

      </div>

    </div>
  );
}

export default Dashboard;