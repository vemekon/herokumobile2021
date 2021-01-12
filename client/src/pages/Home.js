import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import Carousel from "../components/carousel/Carousel";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-white h1 font-weight-bold text-center bg-primary">
        <p>Cheap Prices for Best Quality</p>
        <h5> Have a return ? We make it easy</h5>
      </div>

      <div className="row mx-1">
        <div className="col-md-4">
          <Carousel />
        </div>
        <div className="col-md-4">
          <Carousel />
        </div>
        <div className="col-md-4">
          <Carousel />
        </div>
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>

      <SubList />

      <br />
      <br />
    </>
  );
};

export default Home;
