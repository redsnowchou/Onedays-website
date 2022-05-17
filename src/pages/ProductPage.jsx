import React from "react";
import Products from "components/Products";
import Layout from "Layout";
import Footer from "../components/Footer";

class ProductPage extends React.Component {
  render() {
    return (
      <Layout>
        <Products />
        <Footer />
      </Layout>
    );
  }
}

export default ProductPage;
