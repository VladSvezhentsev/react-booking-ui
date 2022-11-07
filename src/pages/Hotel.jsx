import { useContext, useState } from "react";
import { Header, Navbar, Newsletter, Footer, Reserve } from "../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
   faCircleArrowLeft,
   faCircleArrowRight,
   faCircleXmark,
   faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import useFetch from "../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "../context/AuthContext";

function Hotel() {
   const [slideNumber, setSlideNumber] = useState(0);
   const [open, setOpen] = useState(false);
   const [openModal, setOpenModal] = useState(false);
   const location = useLocation();
   const id = location.pathname.split("/")[2];
   const navigate = useNavigate();

   const { data, loading } = useFetch(
      `https://vlad-reactbooking.herokuapp.com/hotels/find/${id}`
   );

   const { dates, options } = useContext(SearchContext);
   const { user } = useContext(AuthContext);

   const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
   function dayDifference(date1, date2) {
      const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
      const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
      return diffDays;
   }

   const days = dayDifference(dates[0]?.endDate, dates[0]?.startDate);
   const price = days * data.cheapestPrice * options.rooms;

   const handleOpen = (i) => {
      setSlideNumber(i);
      setOpen(true);
   };

   const handleMove = (direction) => {
      let newSlideNumber;

      if (direction === "l") {
         newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
      } else {
         newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
      }

      setSlideNumber(newSlideNumber);
   };

   const handleReserve = () => {
      if (user) {
         setOpenModal(true);
      } else {
         navigate("/login");
      }
   };

   return (
      <>
         <Navbar />
         <Header type="List" />
         {loading ? (
            <div className="loader">
               <div className="loader-ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
               </div>
            </div>
         ) : (
            <div className="hotel">
               {open && (
                  <div className="slider">
                     <FontAwesomeIcon
                        icon={faCircleXmark}
                        className="close"
                        onClick={() => setOpen(false)}
                     />
                     <FontAwesomeIcon
                        icon={faCircleArrowLeft}
                        className="arrow"
                        onClick={() => handleMove("l")}
                     />
                     <div className="slider__wrapper">
                        <img
                           src={data.photos[slideNumber]}
                           alt=""
                           className="slider__img"
                        />
                     </div>
                     <FontAwesomeIcon
                        icon={faCircleArrowRight}
                        className="arrow"
                        onClick={() => handleMove("r")}
                     />
                  </div>
               )}
               <div className="hotel__wrapper">
                  {days ? (
                     <button className="hotel-btn" onClick={handleReserve}>
                        Reserve or Book Now!
                     </button>
                  ) : (
                     <div></div>
                  )}
                  <h1 className="hotel__title">{data.name}</h1>
                  <div className="hotel__address">
                     <FontAwesomeIcon icon={faLocationDot} />
                     <span>{data.address}</span>
                  </div>
                  <span className="hotel__distance">
                     Excellent location – {data.distance} m from center
                  </span>
                  <span className="hotel__price">
                     Book a stay over ${data.cheapestPrice} at this property and
                     get a free airport taxi
                  </span>
                  <div className="hotel__images">
                     {data.photos?.map((photo, i) => (
                        <div className="hotel__images-wrapper" key={i}>
                           <img
                              onClick={() => handleOpen(i)}
                              src={photo}
                              alt=""
                              className="hotel__img"
                           />
                        </div>
                     ))}
                  </div>
                  <div className="hotel__details">
                     <div className="hotel__details-texts">
                        <h1 className="hotel__details-texts__title">
                           {data.title}
                        </h1>
                        <p className="hotel__details-texts__desc">
                           {data.desc}
                        </p>
                     </div>
                     {days ? (
                        <div className="hotel__details-price">
                           <h1>Perfect for a {days}-night stay!</h1>
                           <span>
                              Located in the real heart of{" "}
                              <span className="city">{data.city}</span>, this
                              property has an excellent location score of{" "}
                              {data.rating}!
                           </span>
                           <h2>
                              <b>${price}</b> ({days} nights)
                           </h2>
                           <button onClick={handleReserve}>
                              Reserve or Book Now!
                           </button>
                        </div>
                     ) : (
                        <div className="hotel__details-price">
                           <span>
                              Located in the real heart of{" "}
                              <span className="city">{data.city}</span>, this
                              property has an excellent location score of{" "}
                              {data.rating}!
                           </span>
                        </div>
                     )}
                  </div>
               </div>
               <Newsletter />
               <Footer />
            </div>
         )}
         {openModal && <Reserve setOpen={setOpenModal} id={id} />}
      </>
   );
}

export default Hotel;
