import Link from "next/link";
import Head from "../components/head";
import Banner from "./banner";
import Product from "./product.js";
import styled from "styled-components";
import { Component } from "react";

const Container = styled.div``;

class Home extends Component {
  componentDidMount() {
    document.querySelector("body").style.margin = "0";
    document.querySelector("body").style.overflowX = "hidden";
  }

  render() {
    return (
      <Container>
        <Head title="Home" />
        <Banner />
        <Product />
      </Container>
    );
  }
}

export default Home;
