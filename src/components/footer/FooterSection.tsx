
import React from "react";
import "./FooterSection.scss";
import FooterApp from "../../assets/footer/footerApp.png";
import QrCode from "../../assets/footer/qr.png";
import AppleStore from "../../assets/footer/appleStore.svg";
import PlayStore from "../../assets/footer/playStore.svg";
import Logo from "../../assets/icons/ciceksepeti.svg";
import SocialIcon from "../../assets/icons/social-icon.svg";
import FacebookIcon from "../../assets/icons/facebook-icon.svg";
import InstagramIcon from "../../assets/icons/instagram-icon.svg";
import YoutubeIcon from "../../assets/icons/youtube-icon.svg";
import TwitterIcon from "../../assets/icons/twitter-icon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {

  return (
    <div className="footer">
      <div className="footer__app">

        <div className="footer__app--img">
          <img src={FooterApp} alt=""></img>
        </div>

        <div className="footer__app--desc">
          <div className="qrcode">
            <img className="qrcode__img" src={QrCode} alt="" />
            <div className="qrcode__desc">
              <p className="qrcode__desc--title">Çiçek Sepeti Mobil Uygulamayı İndirin</p>
              <p className="qrcode__desc--subtitle">Mobil Uygulamayı QR Kod ile İndirin.</p>
            </div>
          </div>
          <div className="appIcon">
            <img className="appIcon__google" src={PlayStore} alt="" />
            <img className="appIcon__apple" src={AppleStore} alt="" />
          </div>
        </div>

      </div>
      <div className="footer__menu">
        <div className="footer__menu--social">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="social-icons">
            <img src={FacebookIcon} alt="" />
            <img src={TwitterIcon} alt="" />
            <img src={InstagramIcon} alt="" />
            <img src={YoutubeIcon} alt="" />
            <img src={SocialIcon} alt="" />
          </div>
          <div className="social-desc">
            <p>
              CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz.
              6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz aydınlatma metnine <a href="/">buradan</a> ulaşabilirsiniz.
            </p>
          </div>
        </div>
        <div className="footer__menu--nav">
          <h4>Faydalı Bilgiler</h4>
          <ul>
            <li>Çiçek Bakımı</li>
            <li>Çiçek Eşliğinde Notlar</li>
            <li>Çiçek Anlamları</li>
            <li>Özel Günler</li>
            <li>Mevsimlere Göre Çiçekler</li>
            <li>BonnyFood Saklama Koşulları</li>
            <li>Site Haritası</li>
          </ul>
        </div>
        <div className="footer__menu--nav">
          <h4>Kurumsal</h4>
          <ul>
            <li>Hakkımızda</li>
            <li>Kariyer</li>
            <li>ÇiçekSepeti’nde Satış Yap</li>
            <li>Kurumsal Müşterilerimiz</li>
            <li>Reklamlarımız</li>
            <li>Basında Biz</li>
            <li>Kampanyalar</li>
            <li>Vizyonumuz</li>
          </ul>
        </div>
        <div className="footer__menu--nav">
          <h4>İletişim</h4>
          <ul>
            <li>Bize Ulaşın</li>
            <li>Sıkça Sorulan Sorular</li>
          </ul>
        </div>
        <div className="footer__menu--nav">
          <h4>Gizlilik Sözleşmesi</h4>
          <ul>
            <li>Mesafeli Satış Sözleşmesi</li>
            <li>Bilgi Toplumu Hizmetleri</li>
            <li>Gizlilik Sözleşmesi</li>
            <li>Ödeme Seçenekleri</li>
            <li>Hesap Bilgileri</li>
          </ul>
        </div>
      </div>
      <div className="footer__desc">
        <p>
          Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.
        </p>
      </div>
      <div className="footer__copyright">
        <p>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
      </div>
    </div>
  );
}