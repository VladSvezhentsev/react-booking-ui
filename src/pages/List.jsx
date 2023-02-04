import { Header, Navbar, SearchItem, Skeleton } from "../components";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../hooks/useFetch";

function List() {
   const location = useLocation();
   const [destination, setDestination] = useState(location.state.destination);
   const [dates, setDates] = useState(location.state.dates);
   const [openDate, setOpenDate] = useState(false);
   const [options, setOptions] = useState(location.state.options);
   const [min, setMin] = useState(0);
   const [max, setMax] = useState(999);

   const { data, loading, reFetch } = useFetch(
      `https://react-booking-production.up.railway.app/hotels?city=${destination}&min>=${min}&max<=${max}`
   );

   const handleClick = () => reFetch();

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
                     >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                        dates[0].endDate,
                        "dd/MM/yyyy"
                     )}`}</span>
                     {openDate && (
                        <DateRange
                           onChange={(item) => setDates([item.selection])}
                           minDate={new Date()}
                           ranges={dates}
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
                              onChange={(e) => setMin(e.target.value)}
                              type="number"
                              className="list__search-options__item-input"
                           />
                        </div>
                        <div className="list__search-options__item">
                           <span className="list__search-options__item-text">
                              Max price <small>per night</small>
                           </span>
                           <input
                              onChange={(e) => setMax(e.target.value)}
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
                  <button className="list__search-btn" onClick={handleClick}>
                     Search
                  </button>
               </div>
               <div className="list__result">
                  {loading ? (
                     [...new Array(5)].map((_, i) => <Skeleton key={i} />)
                  ) : (
                     <>
                        {data.map((item) => (
                           <SearchItem item={item} key={item._id} />
                        ))}
                     </>
                  )}
               </div>
            </div>
         </div>
      </>
   );
}

export default List;
