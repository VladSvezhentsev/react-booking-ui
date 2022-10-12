function Navbar() {
   return (
      <div className="nav">
         <div className="container">
            <span className="logo">Reactbooking</span>
            <div className="nav__items">
               <button className="nav__items-btn">Register</button>
               <button className="nav__items-btn">Login</button>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
