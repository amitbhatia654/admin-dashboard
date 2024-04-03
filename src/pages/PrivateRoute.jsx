import React from "react";
import { Navigate, Route } from "react-router-dom";
import Index from "./Index";
import { useFirebase } from "../context/FireBase";

const PrivateRoute = ({ component: Component }) => {
  const firebase = useFirebase();
  return firebase.isUserLoggedIn ? <Index /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
