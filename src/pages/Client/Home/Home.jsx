import { NavBar } from "../../../components/Navbar";
import { ProductCard, Nevados } from "../../../components/Home";
import { Cart } from "../../../components/Cart";
import { Footer } from "../../../components/Footer";
import "./Home.scss";

export const Home = () => {
  return (
    <>
      <div className="container">
        <div className="titulo">
          <h1>Vendedor@: </h1>
          <NavBar />
        </div>
        <div className="pedido">
          <Cart />
          <div className="listados">
            <h1>Lista de Tacos</h1>
            <ProductCard />
            <h1>Lista de Nevados</h1>
            <Nevados />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
