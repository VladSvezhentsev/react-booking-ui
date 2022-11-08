import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Register() {
   const [credentials, setCredentials] = useState({
      email: undefined,
      user: undefined,
      password: undefined,
   });

   const [success, setSuccess] = useState(false);

   const { loading, error, dispatch } = useContext(AuthContext);

   const handleChange = (e) =>
      setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));

   const handleRegister = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
         const res = await axios.post(
            "https://vlad-reactbooking.herokuapp.com/auth/register",
            credentials
         );
         dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
         setSuccess(true);
      } catch (error) {
         dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      }
   };

   return (
      <div className="login">
         <div className="login__container">
            <input
               type="email"
               placeholder="Email"
               id="email"
               onChange={handleChange}
               className="login__input"
            />
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
               onClick={handleRegister}
            >
               Register
            </button>
            {error && <span>{error.message}</span>}
            {success && (
               <>
                  <span>Successful registration!</span>
                  <p className="reg">
                     <Link to="/login">Log in!</Link>
                  </p>
               </>
            )}
         </div>
      </div>
   );
}

export default Register;
