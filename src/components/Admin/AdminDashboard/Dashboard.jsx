import "./Dashboard.scss";
import { Nevado } from "../../Nevado";
import { Taco } from "../../Taco";
import { Footer } from "../../Footer";
export const Dashboard = () => {
  const Nombre = JSON.parse(localStorage.getItem("user")).first_name;

  return (
    <>
      <div className="dashboard">
        <div className="dashboard__content">
          <h2 className="dashboard__title">
            Bienvenid@ {Nombre} a tu panel de administración!
          </h2>
          <p className="dashboard__description">
            Aquí podrás administrar tus productos, categorías y pedidos{" "}
          </p>
        </div>
      </div>
      <div className="container_productos">
        <div className="productos">
          <h3>Agrega aqui los tacos!</h3>
          <Taco />
        </div>
        <div className="productos">
          <h3>Agrega aqui los nevados!</h3>
          <Nevado />
        </div>
      </div>
      <Footer />
    </>
  );
};
