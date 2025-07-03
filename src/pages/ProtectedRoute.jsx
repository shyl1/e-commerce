
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/AuthContext'; 

export default function ProtectedRoute({ children }) {
  const { Token } = useContext(UserContext);

  if (Token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
