function SearchItem() {
   return (
      <div className="search__item">
         <img
            src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
            alt=""
            className="search__item-img"
         />
         <div className="search__item-desc">
            <h1 className="search__item-title">Tower Street Apartments</h1>
            <span className="search__item-distance">500m from center</span>
            <span className="search__item-taxi">Free airport taxi</span>
            <span className="search__item-subtitle">
               Studio Apartment with Air conditioning
            </span>
            <span className="search__item-features">
               Entire studio • 1 bathroom • 21m² 1 full bed
            </span>
            <span className="search__item-cancel">Free cancellation </span>
            <span className="search__item-cancel__subtitle">
               You can cancel later, so lock in this great price today!
            </span>
         </div>
         <div className="search__item-details">
            <div className="search__item-rating">
               <span>Excellent</span>
               <button>8.9</button>
            </div>
            <div className="search__item-details__texts">
               <span className="search__item-details__texts-price">$112</span>
               <span className="search__item-details__texts-tax">
                  Includes taxes and fees
               </span>
               <button className="search__item-details__texts-btn">
                  See availability
               </button>
            </div>
         </div>
      </div>
   );
}

export default SearchItem;
