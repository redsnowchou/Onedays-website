import React, { Component } from "react";
import SaleTime from "../components/SaleTime";
import Layout from "../Layout";
import Banner from "../components/Banner";
import Publicity from "../components/Publicity";
import Leaderboard from "../components/Leaderboard";
import Serve from "../components/Serve";
import PickUp from "../components/PickUp";
import Popularity from "../components/Popularity";
import Footer from "../components/Footer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <SaleTime />
        <Layout>
          <Banner />
          <Publicity />
          <Leaderboard />
          <Serve />
          <PickUp />
          <Popularity />
          <Footer />
        </Layout>
      </div>
    );
  }
}
