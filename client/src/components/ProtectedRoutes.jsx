import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  // More reliable cookie checking
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const accessToken = getCookie('accessToken');
  const isAuthenticated = accessToken && accessToken !== '';

  console.log('ProtectedRoute Debug:', { 
    allCookies: document.cookie,
    accessToken, 
    isAuthenticated 
  });

  return isAuthenticated ? children : <Navigate to="/login" />;
}
