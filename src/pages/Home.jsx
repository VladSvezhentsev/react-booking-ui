import {
   Featured,
   FeaturedProperties,
   Footer,
   Header,
   Navbar,
   Newsletter,
   Property,
} from "../components";

function Home() {
   return (
      <>
         <Navbar />
         <Header />
         <div className="home__container">
            <Featured />
            <h1 className="home__title">Browse by property type</h1>
            <Property />
            <h1 className="home__title">Homes guests love</h1>
            <FeaturedProperties />
            <Newsletter />
            <Footer />
         </div>
      </>
   );
}

export default Home;
