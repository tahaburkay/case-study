
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import store from "../../store";
import "./Category.scss";
import CategoryMenuIcon from "../../assets/icons/categoryMenuIcon.svg";


const productsData = require("../../data/product.json");

const Container = styled.div`
  flex-wrap: wrap;
  background: white;
  position: relative;
  @media (max-width: 768px) {
    padding: 1rem 0;
    height: 75px;
    justify-content: start;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-wrap : wrap;
  position: relative;
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    align-items: center;
    background-color: #808080cf;
    border-radius: 15px;
    bottom: 60px;
    z-index: 999;
    overflow: auto;
    flex-direction: column;
    height: 70vh;
    transition: width 0.3s ease-in;
    width: ${props => props.isOpen ? "100%" : "0"};
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display : flex;
  }
`;
const CategoryItem = ({ categoryItem, active, onClick }) => {
  const { selectedCategory } = store();
  return (
    <Link className={`menu-item ${active ? 'active' : ''}`} onClick={() => {
      selectedCategory(categoryItem);
      onClick(categoryItem);
    }} to={""}>{categoryItem}</Link>
  );
};

export default function Category() {
  const { selectedCategory } = store();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const defaultCategoryName = 'Tüm Kategoriler'
  const categories = new Set();
  productsData.forEach(categoryItem => categories.add(categoryItem.category));

  return (
    <Container className="container-layout">
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <div className="breadcrumb__text">
        <p className="breadcrumb__text--item">Ciceksepeti Market</p>
        <p className="breadcrumb__text--item">İstanbul</p>
        <p className="breadcrumb__text--item">CiceksepetiBreadCrumb</p>
      </div>
      <div className="category__title">
        <img className="category__title--icon" src={CategoryMenuIcon} alt="" />
        <h1 className="category__title--text" >Kategoriler</h1>
      </div>
      <Menu className="menu" isOpen={isOpen}>

        <Link className={`menu-item ${active === "" ? 'active' : ''}`} onClick={() => {
          selectedCategory(defaultCategoryName);
          setActive("");
        }} to={""}>{defaultCategoryName}
        </Link>

        {[...categories].map((category) => {

          return <CategoryItem onClick={() => {
            setActive(category)
          }} categoryItem={category} active={category === active} key={category} />;
        })}
      </Menu>
    </Container>
  );
}