import { Link } from "react-router-dom";

function SearchItem({ item }) {
   return (
      <div className="search__item">
         <Link to={`/hotels/${item._id}`}>
            <img src={item.photos[0]} alt="" className="search__item-img" />
         </Link>
         <div className="search__item-desc">
            <Link to={`/hotels/${item._id}`}>
               <h1 className="search__item-title">{item.name}</h1>
            </Link>
            <span className="search__item-distance">
               {item.distance}m from center
            </span>
            <span className="search__item-taxi">Free airport taxi</span>
            <span className="search__item-cancel">Free cancellation </span>
            <span className="search__item-cancel__subtitle">
               You can cancel later, so lock in this great price today!
            </span>
         </div>
         <div className="search__item-details">
            <div className="search__item-rating">
               <span>{item.ratingW}</span>
               <button>{item.rating}</button>
            </div>
            <div className="search__item-details__texts">
               <span className="search__item-details__texts-price">
                  ${item.cheapestPrice}
               </span>
               <span className="search__item-details__texts-tax">
                  Includes taxes and fees
               </span>
               <Link to={`/hotels/${item._id}`}>
                  <button className="search__item-details__texts-btn">
                     See availability
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default SearchItem;
