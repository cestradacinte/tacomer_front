import { useState, useEffect } from "react";
import { Card, Button, Image } from "semantic-ui-react";
import { getNevados } from "../../../api/nevado";
import "./Nevados.scss";

export const Nevados = () => {
    const [nevados, setNevados] = useState([]);

    useEffect(() => {
        const Nevados = async () => {
            try {
                const nevados = await getNevados();
                console.log(nevados);
                setNevados(nevados);
            } catch (error) {
                console.log("Se produjo un error al traer informacion", error);
            }
        };
        Nevados();
    }, []);

  return (
    <>
     <div className="card">
      {nevados.map((nevado) => (
        <Card key={nevado.id}>
          <Image
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{nevado.nombre}</Card.Header>
            <Card.Description>{nevado.precio}</Card.Description>
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
  )
}

