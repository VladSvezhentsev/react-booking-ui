function Newsletter() {
   return (
      <div className="newsletter">
         <h1 className="newsletter__title">Save time, save money!</h1>
         <span className="newsletter__desc">
            Sign up and we'll send the best deals to you
         </span>
         <div className="newsletter__input">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
         </div>
      </div>
   );
}

export default Newsletter;
