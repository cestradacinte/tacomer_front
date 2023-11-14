import { useState, useEffect } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { getTacos } from "../../../api/taco";
import "./ProductCard.scss";

export const ProductCard = () => {
  const [tacos, setTacos] = useState([]);

  useEffect(() => {
    const Tacos = async () => {
      try {
        const tacos = await getTacos();
        console.log(tacos);
        setTacos(tacos);
      } catch (error) {
        console.log("Se produjo un error al traer informacion", error);
      }
    };
    Tacos();
  }, []);

  return (
    <>
      <div className="card">

      {tacos.map((taco) => (
        <Card key={taco.id}>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{taco.nombre}</Card.Header>
            <Card.Description>{taco.precio}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button basic color="green">
              +
            </Button>
            <Button basic color="red">
              -
            </Button>
          </Card.Content>
        </Card>
      ))}
      </div>
    </>
  );
};
