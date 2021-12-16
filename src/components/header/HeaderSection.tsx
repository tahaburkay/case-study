
import React, { useState } from "react";
import "./HeaderSection.scss";
import HeaderLogo from "../../assets/icons/ciceksepeti.svg";
import BasketIcon from "../../assets/icons/basket-icon.svg";
import SearchIcon from "../../assets/icons/search-icon.png";
import store from "../../store";
import { ProgressBar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
  const { basket, searchProducts } = store();
  const [key, setKey] = useState("");


  return (
    <div className="header container-layout">
      <div className="header_logo">
        <a href="/">
          <img src={HeaderLogo} alt=""></img>
        </a>
      </div>
      <div className="header_search">
        <form className="header-form" onSubmit={(e) => {
          e.preventDefault();
          if (key.length >= 3 || key.length === 0) {
            searchProducts(key)
          }
        }}>
          <label>
            <img className="header_search-icon" src={SearchIcon} alt=""></img>
            <input
              className="header_search-input"
              type="text" placeholder="ürün ara"
              value={key}
              onChange={function (e) {
                setKey(e.currentTarget.value)
              }}
            />
          </label>
          <input className="header_search-submit" type="submit" value="Ara" />
        </form>
      </div>
      <div className="header_basket">
        <img src={BasketIcon} alt=""></img>
        <span className="header_basket-text">Sepetim</span>
        <span className="header_basket-count">{basket.count}</span>
        {basket.totalCargoAmount < 500 && <div className="basket_cargo">
          <p className="basket_cargo-desc">
            <span className="basket_cargo-desc--amount">{basket.totalCargoAmount} TL </span>
            ürün daha ekleyin kargo bedava
          </p>
          <ProgressBar variant="warning" min={0} max={500} now={basket.amount} />
        </div>}
        {basket.totalCargoAmount < 0 && <div className="basket_cargo">
          <p className="basket_cargo-desc">Kargo Bedava</p>
          <ProgressBar variant="warning" min={0} max={500} now={basket.amount} />
        </div>}
      </div>
    </div>
  );
}