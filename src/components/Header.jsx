import {
   faBed,
   faPlane,
   faCar,
   faTaxi,
   faMountainCity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Search from "./Search";

function Header({ type }) {
   return (
      <div className="header">
         <div className="container">
            <div className="header__list">
               <div className="header__list-item active">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Stays</span>
               </div>
               <div className="header__list-item">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
               </div>
               <div className="header__list-item">
                  <FontAwesomeIcon icon={faCar} />
                  <span>Car Rentals</span>
               </div>
               <div className="header__list-item">
                  <FontAwesomeIcon icon={faMountainCity} />
                  <span>Attractions</span>
               </div>
               <div className="header__list-item">
                  <FontAwesomeIcon icon={faTaxi} />
                  <span>Airport taxis</span>
               </div>
            </div>
            <h1 className="header__title">
               A Lifetime of Discounts? It's genius.
            </h1>
            <p className="header__desc">
               Get rewarded for your trawels - unlock instant savings of 10% or
               more with a free Reactbooking account
            </p>
            <button className="header__btn">Sign in / Register</button>
            {type !== "List" && <Search />}
         </div>
      </div>
   );
}

export default Header;
