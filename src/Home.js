import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        alt=""
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
      />

      <div className="home__row">
        <Product
          id="12321341"
          title="Samsung Galaxy M31 (Space Black, 6GB RAM, 64GB Storage"
          image="https://images-na.ssl-images-amazon.com/images/I/71OxJeyywSL._SL1500_.jpg"
          price={16499.0}
          rating={5}
        />
        <Product
          id="12321341"
          title="Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz 9th Gen Intel Core i7) - Space Grey"
          image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SL1500_.jpg"
          price={199990.0}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Kore PVC 16-30 Kg Home Gym Set with One 3 Ft Curl and One Pair Dumbbell Rods with Gym Accessories"
          image="https://images-na.ssl-images-amazon.com/images/I/81HGxhNrAwL._SL1500_.jpg"
          price={1872}
          rating={4}
        />
        <Product
          id="12321341"
          title="Hero Kyoto 26T Single Speed Mountain Bike (Black, Ideal For : 12+ Years )"
          image="https://images-na.ssl-images-amazon.com/images/I/71CA2d53yML._SL1500_.jpg"
          price={6799}
          rating={4}
        />

        <Product
          id="12321341"
          title="Samsung 415L 3 Star Inverter Frost Free Double Door Refrigerator (RT42M553ES8/TL, Elegant Inox, Convertible)"
          image="https://images-na.ssl-images-amazon.com/images/I/71ET8DGKz2L._SL1500_.jpg"
          price={42990.0}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)"
          image="https://images-na.ssl-images-amazon.com/images/I/71D89swgrvL._SL1500_.jpg"
          price={99899}
          rating={5}
        />
      </div>
    </div>
  );
}

export default Home;
