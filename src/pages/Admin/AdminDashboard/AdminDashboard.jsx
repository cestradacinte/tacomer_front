import { Dashboard } from "../../../components/Admin";
import { NavBar } from "../../../components/Navbar";
import "./AdminDashboard.scss";

export const AdminDashboard = () => {
  return (
    <>
      <div className="container">
        <NavBar />
        <Dashboard />
      </div>
    </>
  );
};
