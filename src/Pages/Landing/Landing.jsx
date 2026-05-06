import React from "react";
import Layout from "../../components/Layout/Layout";
import LowerHeader from "../../components/LowerHeader";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Product from "../../components/Product/Product";

function Landing() {
  return (
    <Layout>
      <LowerHeader />
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
