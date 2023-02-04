import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { SearchContext } from "../context/SearchContext";
import axios from "axios";

function Reserve({ setOpen, id }) {
   const [selectedRooms, setSelectedRooms] = useState([]);
   const { data } = useFetch(
      `https://react-booking-production.up.railway.app/hotels/room/${id}`
   );
   const { dates } = useContext(SearchContext);

   const handleSelect = (e) => {
      const checked = e.target.checked;
      const value = e.target.value;
      setSelectedRooms(
         checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
      );
   };

   const getDatesInRange = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const date = new Date(start.getTime());

      const dates = [];

      while (date <= end) {
         dates.push(new Date(date).getTime());
         date.setDate(date.getDate() + 1);
      }

      return dates;
   };

   const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

   const isAvailable = (roomNumber) => {
      const isFound = roomNumber.unavailableDates.some((date) =>
         allDates.includes(new Date(date).getTime())
      );

      return !isFound;
   };

   const handleClick = async () => {
      try {
         await Promise.all(
            selectedRooms.map((id) => {
               const res = axios.put(`/rooms/availability/${id}`, {
                  dates: allDates,
               });
               return res.data;
            })
         );
         setOpen(false);
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="reserve">
         <div className="reserve__container">
            <FontAwesomeIcon
               icon={faCircleXmark}
               className="reserve-close"
               onClick={() => setOpen(false)}
            />
            <span>Select your rooms:</span>
            {data.map((item) => (
               <div className="reserve__item" key={item._id}>
                  <div className="reserve__item-info">
                     <div className="reserve__item-info__title">
                        {item.title}
                     </div>
                     <div className="reserve__item-info__desc">{item.desc}</div>
                     <div className="reserve__item-info__max">
                        Max people: <b>{item.maxPeople}</b>
                     </div>
                     <div className="reserve__item-info__price">
                        ${item.price}
                     </div>
                  </div>
                  <div className="reserve__item-selectRooms">
                     {item.roomNumbers.map((num) => (
                        <div className="room" key={num._id}>
                           <label>{num.number}</label>
                           <input
                              type="checkbox"
                              value={num._id}
                              onChange={handleSelect}
                              disabled={!isAvailable(num)}
                           />
                        </div>
                     ))}
                  </div>
               </div>
            ))}
            <button className="reserve-btn" onClick={handleClick}>
               Reserve Now!
            </button>
         </div>
      </div>
   );
}

export default Reserve;
