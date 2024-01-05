import React from 'react';
import { Navigate } from "react-router-dom";
import StandartPage from '../StandartPage/StandartPage';

// const ProtectedRouteElement = ({ element: Component, ...props  }) => {
//   return (
//     props.loggedIn ? <Component {...props} /> : <Navigate to="/signin" replace/>
// )}

const ProtectedRouteElement = ({...props}) => {
  return (
    props.loggedIn ? <StandartPage {...props}/> : <Navigate to="/signin" replace/>
)}

export default ProtectedRouteElement;

