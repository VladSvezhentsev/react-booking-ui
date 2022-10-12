import { Header, Navbar, SearchItem } from "../components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

function List() {
   const location = useLocation();
   const [destination, setDestination] = useState(location.state.destination);
   const [date, setDate] = useState(location.state.date);
   const [openDate, setOpenDate] = useState(false);
   const [options, setOptions] = useState(location.state.options);

   return (
      <>
         <Navbar />
         <Header type="List" />
         <div className="list">
            <div className="list__wrapper">
               <div className="list__search">
                  <h1 className="list__search-title">Search</h1>
                  <div className="list__search-item">
                     <label>Destination</label>
                     <input placeholder={destination} type="text" />
                  </div>
                  <div className="list__search-item">
                     <label>Check-in Date</label>
                     <span
                        className="date"
                        onClick={() => setOpenDate(!openDate)}
                     >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                        date[0].endDate,
                        "dd/MM/yyyy"
                     )}`}</span>
                     {openDate && (
                        <DateRange
                           onChange={(item) => setDate([item.selection])}
                           minDate={new Date()}
                           ranges={date}
                        />
                     )}
                  </div>
                  <div className="list__search-item">
                     <label>Options</label>
                     <div className="list__search-options">
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Min price <small>per night</small>
                           </span>
                           <input
                              type="number"
                              className="list__search-options__item-input"
                           />
                        </div>
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Max price <small>per night</small>
                           </span>
                           <input
                              type="number"
                              className="list__search-options__item-input"
                           />
                        </div>
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Adult
                           </span>
                           <input
                              type="number"
                              min={1}
                              className="list__search-options__item-input"
                              placeholder={options.adults}
                           />
                        </div>
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Children
                           </span>
                           <input
                              type="number"
                              min={0}
                              className="list__search-options__item-input"
                              placeholder={options.children}
                           />
                        </div>
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Room
                           </span>
                           <input
                              type="number"
                              min={1}
                              className="list__search-options__item-input"
                              placeholder={options.rooms}
                           />
                        </div>
                     </div>
                  </div>
                  <button className="list__search-btn">Search</button>
               </div>
               <div className="list__result">
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
                  <SearchItem />
               </div>
            </div>
         </div>
      </>
   );
}

export default List;
