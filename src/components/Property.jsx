import ContentLoader from "react-content-loader";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Property() {
   const { data, loading } = useFetch("/hotels/countByType");

   const images = [
      "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
      "https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
   ];

   return (
      <div className="property">
         {loading ? (
            [...new Array(5)].map((_, i) => (
               <ContentLoader
                  key={i}
                  speed={2}
                  width={215}
                  height={193}
                  viewBox="0 0 215 193"
                  backgroundColor="#f3f3f3"
                  foregroundColor="#ecebeb"
               >
                  <rect x="0" y="0" rx="0" ry="0" width="215" height="150" />
                  <rect x="0" y="155" rx="0" ry="0" width="100" height="20" />
                  <rect x="-10" y="182" rx="0" ry="0" width="82" height="17" />
               </ContentLoader>
            ))
         ) : (
            <>
               {data &&
                  images.map((img, i) => (
                     <Link
                        to="/hotels/type"
                        state={{ type: data[i]?.type.slice(0, -1) }}
                        key={i}
                     >
                        <div className="property__item">
                           <img
                              src={img}
                              alt=""
                              className="property__item-img"
                           />
                           <div className="propert__item-titles">
                              <h1>{data[i]?.type}</h1>
                              <h2>
                                 {data[i]?.count} {data[i]?.type}
                              </h2>
                           </div>
                        </div>
                     </Link>
                  ))}
            </>
         )}
      </div>
   );
}

export default Property;
