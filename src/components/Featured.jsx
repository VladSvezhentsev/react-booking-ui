import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import ContentLoader from "react-content-loader";

function Featured() {
   const { data, loading } = useFetch(
      "https://react-booking-production.up.railway.app/hotels/countByCity"
   );

   const images = [
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Germany/Berlin/berlin-guide-lead-2018.jpg?imwidth=680",
      "https://turizm.world/wp-content/uploads/2015/04/korolevskui-madrid.jpg",
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/United%20Kingdom/London/london-aerial-thames-guide.jpg?imwidth=680",
   ];

   return (
      <div className="featured">
         {loading ? (
            [...new Array(3)].map((_, i) => (
               <ContentLoader
                  key={i}
                  speed={2}
                  width={324}
                  height={250}
                  viewBox="0 0 324 250"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
               >
                  <rect x="0" y="0" rx="10" ry="10" width="324" height="250" />
               </ContentLoader>
            ))
         ) : (
            <>
               {data &&
                  images.map((img, i) => (
                     <Link
                        to="/hotels/city"
                        state={{ city: data[i]?.city }}
                        key={i}
                     >
                        <div className="featured__item">
                           <img src={img} alt="" className="featured__img" />
                           <div className="featured__title">
                              <h1>{data[i]?.city}</h1>
                              <h2>{data[i]?.count} properties</h2>
                           </div>
                        </div>
                     </Link>
                  ))}
            </>
         )}
      </div>
   );
}

export default Featured;
