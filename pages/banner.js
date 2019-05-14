import { Component } from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";

const Outer = styled.div`
  background: url("../static/temporary-banner.png") center/cover no-repeat;
  height: 900px;
  width: 100vw;
  padding: 0 300px;
  box-sizing: border-box;
  .banner-top {
    padding-top: 40px;
  }
  .menu {
    list-style: none;
    margin-right: -20px;
    li {
      display: inline;
      a {
        text-decoration: none;
        color: white;
        margin-right: 45px;
        font-size: 14px;
      }
    }
  }
  .banner-text {
    color: white;
    text-align: right;
    padding: 110px 75px 20px 0;
    border-right: 1px solid white;
    margin-top: 180px;
  }
  p {
    text-align: right;
    color: white;
    font-size: 14px;
    transform: translateX(8px);
  }
`;

class Banner extends Component {
  render() {
    return (
      <Outer>
        <Flex
          className="banner-top"
          justifyContent="space-between"
          alignItems="flex-end"
        >
          <img src="../static/temporary-logo.png" />
          <ul className="menu">
            <li>
              <a href="/">ANASAYFA</a>
            </li>
            <li>
              <a href="/">ÜRÜNLER</a>
            </li>
            <li>
              <a href="/">HAKKIMIZDA</a>
            </li>
            <li>
              <a href="/">REFERANSLAR</a>
            </li>
            <li>
              <a href="/">İLETİŞİM</a>
            </li>
          </ul>
        </Flex>
        <div className="banner-text">
          <h1>CLR-S Atık Sıvı</h1>
          <h1>Geri Dönüşüm Sistemi</h1>
          <h3>Geri Dönüşüm Suyunun Tamamen Kullanımı ile</h3>
          <h3>"Sürdürülebilir Beton Üretimi"</h3>
        </div>
        <p>DE</p>
        <p>EN</p>
        <p>FR</p>
        <p>TR</p>
      </Outer>
    );
  }
}

export default Banner;
