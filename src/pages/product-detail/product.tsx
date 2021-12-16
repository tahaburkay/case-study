import styled from "styled-components";
import "./product.scss";
import { useParams } from "react-router-dom";
import NavMenu from "../../components/header/HeaderSection";
import FooterSection from "../../components/footer/FooterSection";
import { Fragment, useState } from "react";
import store from "../../store";
import inc from "../../assets/icons/inc.svg";
import add from "../../assets/icons/add.svg";

const productList = require("../../data/product.json");

const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas:
    'head'
    'main'
    'footer';
  text-align: center;

  .header_search{
    display : none;
  }
`;
const Main = styled.div`
  color: white;
  grid-area: main;
`;
const NavHeader = styled.div`
  color: white;
  grid-area: head;
`;
const Footer = styled.div`
  background: #7b7fda;
  grid-area: footer;
  font-weight: 600;
  max-height : 800px;
`;

function Product() {
  const { id }: { id: string } = useParams();

  const productItem = productList.filter((item: any) => item.id === id);
  const image = require('../../assets/img/' + productItem[0].img + '.png').default;

  const { addProduct, removeProduct } = store();
  const [countProduct, setCountProduct] = useState(0);

  return (
    <Fragment>
      <Container>
        <NavHeader>
          <NavMenu></NavMenu>
        </NavHeader>
        <Main>
          <div className="product">
            <div>
              <img className="product-img" src={image} alt="" />
            </div>
            <div className="product-content">
              <h1 className="product-content__category">{productItem[0].category}</h1>
              <h2 className="product-content__title">{productItem[0].name}</h2>
              <h3 className="product-content__desc">{productItem[0].desc}</h3>
              <h2 className="product-content__price">{productItem[0].price}</h2>
            </div>
            <div className="product-basket">
              {(countProduct === 0) && <button onClick={() => { addProduct(productItem[0]); setCountProduct(countProduct + 1); }} className="card-basket__add">Sepete Ekle</button>}

              {(countProduct !== 0) &&
                <div className="d-flex align-items-center justify-content-between">
                  <button className="card-basket__change"><img onClick={() => { setCountProduct(countProduct - 1); removeProduct(productItem[0]); }} src={inc} alt="" /></button>
                  <span className="card-basket__count">{countProduct}</span>
                  <button className="card-basket__change"><img onClick={() => { addProduct(productItem[0]); setCountProduct(countProduct + 1); }} src={add} alt="" /></button>
                </div>
              }
            </div>
          </div>
        </Main>
        <Footer><FooterSection></FooterSection></Footer>
      </Container>
    </Fragment>
  );
}

export default Product;
