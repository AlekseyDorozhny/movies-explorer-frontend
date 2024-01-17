import React from 'react';
import { Navigate } from "react-router-dom";
import StandartPage from '../StandartPage/StandartPage';

const ProtectedRouteElement = ({...props}) => {
  return (
    props.loggedIn ? <StandartPage {...props}/> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;

