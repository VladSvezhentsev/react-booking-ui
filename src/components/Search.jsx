import { useState } from "react";
import {
   faBed,
   faCalendarDays,
   faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useNavigate } from "react-router-dom";

function Search() {
   const [openDate, setOpenDate] = useState(false);
   const [date, setDate] = useState([
      {
         startDate: new Date(),
         endDate: new Date(),
         key: "selection",
      },
   ]);

   const [openOptions, setOpenOptions] = useState(false);
   const [options, setOptions] = useState({
      adults: 2,
      children: 1,
      rooms: 2,
   });

   const [destination, setDestination] = useState("");
   const navigate = useNavigate();

   const handleOption = (name, operation) => {
      setOptions((prev) => {
         return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
         };
      });
   };

   const handleSearch = () => {
      navigate("/hotels", { state: { destination, date, options } });
   };

   return (
      <div className="header__search">
         <div className="header__search-item">
            <FontAwesomeIcon
               icon={faBed}
               className="header__search-item__icon"
            />
            <input
               type="text"
               placeholder="Where are you going?"
               className="header__search-item__input"
               onChange={(e) => setDestination(e.target.value)}
            />
         </div>
         <div
            className="header__search-item"
            onClick={() => setOpenDate(!openDate)}
         >
            <FontAwesomeIcon
               icon={faCalendarDays}
               className="header__search-item__icon"
            />
            <span className="header__search-item__text">
               {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
               )}`}
            </span>
            {openDate && (
               <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  className="date"
               />
            )}
         </div>
         <div className="header__search-item">
            <FontAwesomeIcon
               icon={faPerson}
               className="header__search-item__icon"
            />
            <span
               className="header__search-item__text"
               onClick={() => setOpenOptions(!openOptions)}
            >
               {`${options.adults} adults, ${options.children} children, ${options.rooms} rooms`}
            </span>
            {openOptions && (
               <div className="options">
                  <div className="option__item">
                     <span className="option__item-text">Adults</span>
                     <div className="option__item-counter">
                        <button
                           disabled={options.adults <= 1}
                           className="option__item-counter__button"
                           onClick={() => handleOption("adults", "d")}
                        >
                           -
                        </button>
                        <span className="option__item-counter__number">
                           {options.adults}
                        </span>
                        <button
                           className="option__item-counter__button"
                           onClick={() => handleOption("adults", "i")}
                        >
                           +
                        </button>
                     </div>
                  </div>
                  <div className="option__item">
                     <span className="option__item-text">Children</span>
                     <div className="option__item-counter">
                        <button
                           disabled={options.children <= 0}
                           className="option__item-counter__button"
                           onClick={() => handleOption("children", "d")}
                        >
                           -
                        </button>
                        <span className="option__item-counter__number">
                           {options.children}
                        </span>
                        <button
                           className="option__item-counter__button"
                           onClick={() => handleOption("children", "i")}
                        >
                           +
                        </button>
                     </div>
                  </div>
                  <div className="option__item">
                     <span className="option__item-text">Rooms</span>
                     <div className="option__item-counter">
                        <button
                           disabled={options.rooms <= 1}
                           className="option__item-counter__button"
                           onClick={() => handleOption("rooms", "d")}
                        >
                           -
                        </button>
                        <span className="option__item-counter__number">
                           {options.rooms}
                        </span>
                        <button
                           className="option__item-counter__button"
                           onClick={() => handleOption("rooms", "i")}
                        >
                           +
                        </button>
                     </div>
                  </div>
               </div>
            )}
         </div>
         <div className="header__search-item">
            <button className="header__btn" onClick={handleSearch}>
               Search
            </button>
         </div>
      </div>
   );
}

export default Search;
