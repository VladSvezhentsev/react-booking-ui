import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { axiosInstance } from "../config";

function Login() {
   const [credentials, setCredentials] = useState({
      user: undefined,
      password: undefined,
   });

   const { loading, error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate();

   const handleChange = (e) =>
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

   const handleLogin = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
         const res = await axiosInstance.post("/auth/login", credentials);
         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
         navigate("/");
      } catch (error) {
         dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      }
   };

   return (
      <div className="login">
         <div className="login__container">
            <input
               type="text"
               placeholder="Username"
               id="username"
               onChange={handleChange}
               className="login__input"
            />
            <input
               type="password"
               placeholder="Password"
               id="password"
               onChange={handleChange}
               className="login__input"
            />
            <button
               className="login__button"
               disabled={loading}
               onClick={handleLogin}
            >
               Login
            </button>
            {error && <span>{error.message}</span>}
         </div>
      </div>
   );
}

export default Login;
