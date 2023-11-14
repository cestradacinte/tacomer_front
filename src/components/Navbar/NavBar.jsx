import { Button } from "semantic-ui-react";
import { useAuth } from "../../utils/useAuth";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";
export const NavBar = () => {
  const Nombre = JSON.parse(localStorage.getItem("user"));
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <div className="Navbar">
        <div className="Navbar__usuario">
          <h1>{Nombre.first_name + " " + Nombre.last_name}</h1>
        </div>
        <Button onClick={handleLogout}>Cerrar Sesion</Button>
      </div>
    </>
  );
};
