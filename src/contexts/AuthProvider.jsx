import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import * as authApi from "../api/auth";
// import * as userApi from "../api/user";
import { setupAuthExceptionHandler, setupAuthHeader } from "../utils/helper";
// import showToast from "../utils/showToast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const token = (localStorage?.getItem("__auth_token")) || null;
  
  const [tokenExpiry, setTokenExpiry] = useState(null);
  const navigate = useNavigate();
  token && setupAuthHeader(token);

  useEffect(() => {
    setupAuthExceptionHandler(signout, navigate);
  }, []);

  useEffect(() => {
    if (token) {
      try {
       
        const decodedToken = jwtDecode(token);
        setTokenExpiry(decodedToken.exp);
        if (decodedToken.exp < Date.now() / 1000) {
          throw new Error("Session Expired");
        }
      } catch (err) {
        alert(`${err.message}\nPlease sign-in again`);
        signout();
      } finally {
        
      }
    }
  }, [token]);

  const getToken = () => {
    if (tokenExpiry && tokenExpiry < Date.now() / 1000) {
      alert(`Session Expired\nPlease sign-in again`);
      signout();
      navigate("/");
    }
    return token;
  };

  const signup = async ({ fullName, email, phoneNo, location, confirmPassword, role }) => {
    try {
      await authApi.signup(fullName, email, phoneNo, location, confirmPassword, role);
    } catch (err) {
      alert(err.message);
    }
  };

  const signin = async ({ email, password }) => {
    try {
      const response = await authApi.signin(email, password);
      const decodedToken = jwtDecode(response);
      
        localStorage?.setItem(
          "__auth_user",
          JSON.stringify({userId: decodedToken.userId, role: decodedToken.role})
        );
        localStorage?.setItem(
          "__auth_token",
          response
        );
        setupAuthHeader(response);
      
    } catch (err) {
      alert(err.message);
    }
  };

  const signout = () => {
    localStorage.removeItem("__auth_token");
    localStorage.removeItem("__auth_user");
    setTokenExpiry(null);
    setupAuthHeader(null);
  };

  

//   const updateUser = async (emailId) => {
//     try {
//       setUserLoading(true);
//       const response = await userApi.updateUserById(user.id, emailId);
//       if (response.status === "SUCCESS") {
//         localStorage?.setItem("__auth_user", JSON.stringify(response.data));
//         setUserLoading(false);
//         showToast("Email updated successfully");
//       }
//     } catch (err) {
//       alert(err.message);
//     }
//   };

  return (
    <AuthContext.Provider
      value={{
        // isUserLoading,
        // user,
        token: getToken(),
        signup,
        signin,
        signout,
        // changePassword,
        // updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };