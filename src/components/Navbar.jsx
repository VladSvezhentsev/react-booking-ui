import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
   const { user, dispatch } = useContext(AuthContext);

   const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
   };

   return (
      <div className="nav">
         <div className="container">
            <Link to="/">
               <span className="logo">Reactbooking</span>
            </Link>
            {user ? (
               <div>
                  <span> {user.username} </span>
                  <button className="nav__items-btn" onClick={handleLogout}>
                     Logout
                  </button>
               </div>
            ) : (
               <div className="nav__items">
                  <Link to="/register">
                     <button className="nav__items-btn">Register</button>
                  </Link>
                  <Link to="/login">
                     <button className="nav__items-btn">Login</button>
                  </Link>
               </div>
            )}
         </div>
      </div>
   );
}

export default Navbar;
