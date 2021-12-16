import styled from "styled-components";
import "./home.scss";
import List from "../../components/product-list/ProductList";
import HeaderSection from "../../components/header/HeaderSection";
import Category from "../../components/categories/Category";
import FooterSection from "../../components/footer/FooterSection";
import CategotyIcon from "../../assets/icons/categoryIcon.svg";
import H1Banner from "../../assets/img/h1Banner.png";
import store from "../../store";
import Cards from "../../components/cards/Cards";

const navtTitleColor = "#707070";

const ContentBoxTitle = styled.h1`
  display: flex;
  font-size: 20px;
  text-align : start;
  padding-bottom: 5px ;
  margin: 0px;
  color: ${navtTitleColor};
  img {
    width:20px;
    margin-right:5px;
  }
`;
const Container = styled.div`
  display: grid;
  height: 100vh;
  color: white;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-areas: 
    'header'
    'banner'
    'main'
    'content'
    'card'
    'footer';

  @media (max-width: 768px) {
    grid-template-areas: 
    'header'
    'main'
    'content'
    'card'
    'footer';
  }
`;
const Header = styled.div`
  color: white;
  grid-area: header;
  padding : 5px 0px ;
`;
const Banner = styled.div`
  grid-area: banner;
  display: flex;
  justify-content: start;
  align-items: center;
  height : 75px;


  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image : url(${H1Banner});



  
  @media (max-width: 768px) {
    height : 50px;
    display : none;
  }
`;
const Main = styled.div`
  color: white;
  grid-area: main;
  margin: 10px 0px;
  @media (max-width: 768px) {
    margin : 0px;
  }
`;
const ContentBox = styled.div`
  margin-top: 10px;
  grid-area: content;
`;
const CardSection = styled.div`
  margin-top: 10px;
  grid-area: card;
`;
const Footer = styled.footer`
  grid-area: footer;
`;

function Home() {
  const { categoryName } = store();
  return (
    <Container>
      <Header>
        <HeaderSection></HeaderSection>
      </Header>
      <Banner>
        <h1 className="container-layout banner-title">ÇiçekSepeti H1</h1>
      </Banner>
      <Main>
        <Category></Category>
      </Main>
      <ContentBox className="container-layout">
        <ContentBoxTitle>
          <img src={CategotyIcon} alt="" />  {categoryName}
        </ContentBoxTitle>
        <List></List>
      </ContentBox>
      <CardSection className="container-layout">
        <Cards></Cards>
      </CardSection>
      <Footer>
        <FooterSection></FooterSection>
      </Footer>
    </Container>
  );
}

export default Home;
