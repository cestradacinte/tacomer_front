import { Button, Form } from "semantic-ui-react";
import { createTaco } from "../../api/taco";
import * as Yup from "yup";
import { useFormik } from "formik";

export const Taco = () => {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (tacoData) => {
      try {
        const response = await createTaco(tacoData);
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
          placeholder="Nombre de taco"
          onChange={formik.handleChange}
          error={formik.errors.nombre}
        />
        <Form.Input
          name="carne"
          placeholder="tipo de carne ej: asada, pastor, etc"
          onChange={formik.handleChange}
          error={formik.errors.carne}
        />
        <Form.Input
          name="pesocarne"
          placeholder="gramos de carne "
          onChange={formik.handleChange}
          error={formik.errors.pesocarne}
        />
        <Form.Input
          name="precio"
          placeholder="precio de taco"
          onChange={formik.handleChange}
          error={formik.errors.precio}
        />
        <Button type="submit" content="Agregar Taco" basic color="blue" />
      </Form>
    </>
  );
};

const initialValues = () => {
  return {
    nombre: "",
    carne: "",
    pesocarne: "",
    precio: "",
  };
};

const validationSchema = () => {
  return {
    nombre: Yup.string().required(true),
    carne: Yup.string().required(true),
    pesocarne: Yup.number().required(true),
    precio: Yup.string().required(true),
  };
};
