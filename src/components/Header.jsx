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
            <div
               className={
                  type === "List" ? "header__list list-mode" : "header__list"
               }
            >
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
            {type !== "List" && <Search />}
         </div>
      </div>
   );
}

export default Header;
