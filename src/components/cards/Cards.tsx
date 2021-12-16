import React from "react";
import "./Cards.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Card1 from "../../assets/img/card1.png";
import Card2 from "../../assets/img/card2.png";
import Card3 from "../../assets/img/card3.png";
import styled from "styled-components";

const card1Color = "#FFEAE8";
const card2Color = "#E8F1FF";
const card3Color = "#E2F7E1";

const CardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px 75px 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const CardItem = styled.div`
  max-width: 400px;
  display: flex;
  padding: 10px;
  background: ${(props) => props.color} 0% 0% no-repeat padding-box;
  border-radius: 10px;

  img {
    width: 150px;
  }

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  p {
    text-align: start;
    color: #707070;
  }

  button {
    background: #ffffff 0% 0% no-repeat padding-box;
    border-radius: 15px;
    padding: 10px;
    font-size: 15px;
    color: #e64e41;
    font-weight: 600;
    border: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;

    img {
      width: 100px;
    }

    .content {
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: start;
    }

    p {
      text-align: start;
      color: #707070;
    }

    button {
      font-size: 12px;
    }
  }
`;

export default function Cards() {
  return (
    <CardsSection>
      <CardItem color={card1Color}>
        <img src={Card1} alt="" />
        <div className="content">
          <p>75 TL Üzerine Teslimat Ücreti Bizden</p>
          <button>Detaylı Bilgi</button>
        </div>
      </CardItem>

      <CardItem color={card2Color}>
        <img src={Card2} alt="" />
        <div className="content">
          <p>Hediye Kategorisi için Sepette %15 İndirim</p>
          <button>Hediye Ürünleri</button>
        </div>
      </CardItem>

      <CardItem color={card3Color}>
        <img src={Card3} alt="" />
        <div className="content">
          <p>Kırtasiye Kategorisi için Sepette %15 İndirim</p>
          <button>Detaylı Bilgi</button>
        </div>
      </CardItem>
    </CardsSection>
  );
}
