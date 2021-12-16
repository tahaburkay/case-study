import store from "../../store";
import "./ProductList.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import inc from "../../assets/icons/inc.svg";
import add from "../../assets/icons/add.svg";
const productsData = require("../../data/product.json");

const ProductListItem = ({ product }: any) => {
  const { id, img, name, desc, price } = product;
  const { addProduct, removeProduct } = store();
  const image = require('../../assets/img/' + img + '.png').default;
  const [countProduct, setCountProduct] = useState(0);

  return (
    <li className="card">
      <Link className="cardlink" to={"/product/" + id}>
        <picture className="card-thumbnail">
          <img className="card-thumbnail__img" src={image} alt="" />
        </picture>
      </Link>
      <div className="card-content">
        <h2 className="card-content__title">{name}</h2>
        <p className="card-content__desc">{desc}</p>
        <p className="card-content__price">{price}</p>
      </div>
      <div className="card-basket">
        {(countProduct === 0) && <button onClick={() => { addProduct(product); setCountProduct(countProduct + 1); }} className="card-basket__add">Sepete Ekle</button>}

        {(countProduct !== 0) &&
          <div className="d-flex align-items-center justify-content-between">
            <button className="card-basket__change"><img onClick={() => { setCountProduct(countProduct - 1); removeProduct(product); }} src={inc} alt="" /></button>
            <span className="card-basket__count">{countProduct}</span>
            <button className="card-basket__change"><img onClick={() => { addProduct(product); setCountProduct(countProduct + 1); }} src={add} alt="" /></button>
          </div>
        }
      </div>
    </li>
  );
};

const ProductList = ({ items }: any) => {
  return (
    <ul className="cards">
      {items.map((product: any) => {
        return <ProductListItem product={product} key={product.id} />;
      })}
    </ul>
  );
};

export default function List() {
  const { searchedProducts, selectedProducts } = store();
  if (searchedProducts.length) {
    return <ProductList items={searchedProducts} />;
  }
  else if (selectedProducts.length) {
    return <ProductList items={selectedProducts} />;
  }
  return <ProductList items={productsData} />;

}
