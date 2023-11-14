import { useFormik } from "formik";
import { Button, Form } from "semantic-ui-react";
import { loginApi, userData } from '../../../api/user';
import * as Yup from "yup";
import { useAuth } from "../../../utils/useAuth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {

  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        localStorage.setItem("token", response.access);
        const user = await userData(response.access);
        localStorage.setItem("user", JSON.stringify(user));
        login(response.access, user)
        if (user.is_superuser) {
          navigate("/admin");
        } else {
          navigate("/home");
        }
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
          name="username"
          placeholder="Nombre de usuario"
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        <Form.Input
          name="password"
          placeholder="Contraseña"
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        <Button type="submit" content="Iniciar sesion" basic color="blue" />
      </Form>
    </>
  );
};

const initialValues = () => {
  return {
    username: "",
    password: "",
  };
};

const validationSchema = () => {
  return {
    username: Yup.string().required(true),
    password: Yup.string().required(true),
  };
};
