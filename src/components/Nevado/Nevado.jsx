import { Button, Form } from "semantic-ui-react";
import { createNevado } from "../../api/nevado";
import * as Yup from "yup";
import { useFormik } from "formik";



export const Nevado = () => {
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (nevadoData) => {
          try {
            const response = await createNevado(nevadoData);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        },
      });
    
  return (
    <>
    <Form onSubmit={formik.handleSubmit}>
            <Form.Input
              name="nombre"
              placeholder="Nombre de nevado"
              onChange={formik.handleChange}
              error={formik.errors.nombre}
            />
            <Form.Input
              name="tipo"
              placeholder="tipo de nevado, soda, etc"
              onChange={formik.handleChange}
              error={formik.errors.tipo}
            />
            <Form.Input
              name="precio"
              placeholder="Precio del nevado"
              onChange={formik.handleChange}
              error={formik.errors.precio}
            />
            <Button type="submit" content="Agregar Nevado" basic color="blue" />
          </Form>
    </>
  )
}

const initialValues = () => {
    return {
        nombre: "",
        tipo: "",
        precio: "",
    };
}

const validationSchema = () => {
    return {
        nombre: Yup.string().required(true),
        tipo: Yup.string().required(true),
        precio: Yup.number().required(true),
    };
}