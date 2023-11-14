/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth"; 
export const ProtectedRoute = ({ component: Component, layout: Layout }) => {
  const { authToken, user  } = useAuth();

  if (!authToken) {
    return <Navigate to="/" replace />;
  }

  if (!user?.is_superuser) {
    return <Navigate to="/home" replace />;
  }

  return (
    <Layout>
      <Component />
    </Layout>
  );
};
