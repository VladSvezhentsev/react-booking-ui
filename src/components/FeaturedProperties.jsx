import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function FeaturedProperties() {
   const { data, loading } = useFetch(
      "https://vlad-reactbooking.herokuapp.com/hotels?featured=true&limit=4"
   );

   return (
      <div className="fp">
         {loading ? (
            [...new Array(4)].map((_, i) => (
               <ContentLoader
                  key={i}
                  speed={2}
                  width={245}
                  height={380}
                  viewBox="0 0 245 380"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
               >
                  <rect x="0" y="0" rx="0" ry="0" width="250" height="250" />
                  <rect x="0" y="264" rx="0" ry="0" width="150" height="21" />
                  <rect x="0" y="296" rx="0" ry="0" width="80" height="21" />
                  <rect x="0" y="330" rx="0" ry="0" width="150" height="21" />
                  <rect x="9" y="360" rx="0" ry="0" width="103" height="24" />
               </ContentLoader>
            ))
         ) : (
            <>
               {data.map((item) => (
                  <Link to={`/hotels/${item._id}`} key={item._id}>
                     <div className="fp__item">
                        <img src={item.photos[0]} className="fp__item-img" />
                        <span className="fp__item-name">{item.name}</span>
                        <span className="fp__item-city">{item.city}</span>
                        <span className="fp__item-price">
                           Starting from ${item.cheapestPrice}
                        </span>
                        <div className="fp__item-rating">
                           <button>{item.rating}</button>
                           <span>{item.ratingW}</span>
                        </div>
                     </div>
                  </Link>
               ))}
            </>
         )}
      </div>
   );
}

export default FeaturedProperties;
