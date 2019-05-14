import { Component } from "react";
import styled from "styled-components";
import { Flex } from "@rebass/grid";
import iconSet from "../icomoon/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

const Outer = styled.div`
  height: 900px;
  margin: 0 300px;
  .product-links {
    margin-top: 110px;
    border-bottom: 1px solid #eaeaea;
    border-top: 1px solid #eaeaea;
    a {
      margin: 25px 0;
      padding: 0 50px;
      text-decoration: none;
      color: black;
      &:first-child {
        border-right: 1px solid #eaeaea;
      }
    }
  }
  .product-main {
    margin-top: 90px;
  }
  .product-main-left {
    width: 50%;
    img {
      width: 100%;
      height: auto;
      border: 1px solid #eaeaea;
      margin-bottom: 50px;
    }
    .product-sub-item {
      color: #5091d5;
      border-top: 1px solid #5091d5;
      align-items: center;
      div {
        margin: 10px 0;
      }
      &:last-of-type {
        border-bottom: 1px solid #5091d5;
      }
    }
    .offer-button {
      width: 100%;
      color: white;
      background-color: #5091d5;
      border: none;
      outline: 0;
      cursor: pointer;
      margin-top: 15px;
      padding: 10px 0;
      border-radius: 5px;
    }
  }
  .product-main-right {
    width: 50%;
  }
`;

const downloads = [
  {
    icon: "file",
    text: "Ürün Broşürü",
    interaction: "İndir",
    iconLast: "document-download"
  },
  {
    icon: "file",
    text: "Manuel",
    interaction: "İndir",
    iconLast: "document-download"
  },
  {
    icon: "file-play",
    text: '"Nasıl Çalışır?" Video',
    interaction: "İzle",
    iconLast: "play"
  }
];

class Product extends Component {
  render() {
    return (
      <Outer>
        <Flex className="product-links" justifyContent="center">
          <a href="/">CLR-S</a>
          <a href="/">LCA</a>
        </Flex>
        <Flex className="product-main">
          <Flex flexDirection="column" className="product-main-left">
            <img src="../static/product.png" alt="product" />
            {downloads.map(item => (
              <Flex
                justifyContent="space-between"
                key={item.text}
                className="product-sub-item"
              >
                <div>
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#5091d5"
                    size={20}
                    icon={item.icon}
                  />
                  <span>{item.text}</span>
                </div>
                <div>
                  <span>{item.interaction}</span>
                  <IcomoonReact
                    iconSet={iconSet}
                    color="#5091d5"
                    size={20}
                    icon={item.iconLast}
                  />
                </div>
              </Flex>
            ))}
            <button className="offer-button">TEKLİF AL</button>
          </Flex>
          <div className="product-main-right">
            <h1>CLR-S Atık Sıvı Geri Dönüşüm Sistemi</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              rhoncus quis ante auctor viverra. Duis dictum gravida dapibus.
              Nullam nunc lectus, finibus non tortor sit amet, mattis dignissim
              metus. Etiam non libero risus. Aenean posuere, ipsum aliquet
              dictum dignissim, urna est luctus ligula, non tincidunt leo erat
              non sem. Etiam vel lobortis turpis. Nulla facilisi. Sed laoreet
              ligula sed aliquet cursus. Morbi nec venenatis magna, sed iaculis
              magna. Suspendisse viverra nisl justo, eu mattis velit efficitur
              sit amet. Praesent eget venenatis sapien, nec venenatis arcu.
              Proin sed consectetur ex. Suspendisse lobortis turpis eget
              ullamcorper condimentum. Vivamus ac vulputate turpis. Cras in
              hendrerit magna. Donec imperdiet, urna vitae scelerisque molestie,
              turpis mauris euismod quam, sit amet porta libero risus non dui.
              Duis sed lorem sit amet dolor pellentesque lobortis. Vivamus
              dapibus molestie felis sed tristique. Aliquam sit amet libero id
              felis volutpat dignissim. Nulla facilisi. Morbi molestie tellus ac
              odio tempus, vitae congue erat scelerisque. Donec pretium aliquet
              dui, ut rutrum dolor consectetur nec. Fusce eu malesuada nisi.
              Suspendisse dictum erat mauris, quis auctor odio ullamcorper ac.
              Morbi tristique ultricies nibh dictum faucibus. Proin sit amet
              pellentesque quam. Cras rhoncus viverra justo nec facilisis.
              Nullam id augue quis arcu efficitur varius. Quisque ultricies dui
              ac interdum ultricies. Praesent vitae nisl in leo volutpat
              eleifend. Sed aliquet sem nisi, vel lobortis nisl vulputate sit
              amet. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia Curae; Nam ut sapien hendrerit, pulvinar
              quam ac, tristique libero. Cras lacinia tortor quis dolor pretium
              pretium. Nunc ultricies magna id massa ultricies interdum. Fusce
              enim dui, accumsan ut leo sit amet, dapibus laoreet nisi. Proin
              facilisis libero vitae finibus mollis. Maecenas faucibus interdum
              felis. In suscipit porta mollis. In hac habitasse platea dictumst.
              Vestibulum auctor, turpis eget cursus facilisis, tellus elit
              commodo purus, ut lacinia risus sem id tortor. Integer aliquet,
              quam quis elementum placerat, neque nisi rhoncus ex, a auctor
              ligula nunc in urna. Mauris ultricies, dolor nec porta efficitur,
              velit turpis sodales ex, ultricies consectetur urna elit eu metus.
            </p>
          </div>
        </Flex>
      </Outer>
    );
  }
}

export default Product;
