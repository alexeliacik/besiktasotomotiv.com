import React from 'react';
import Logo from '../images/logo2.jpg';
import Slogan from '../images/slogan.jpg';

const Header = () => {
  return (
    <header className="header text-center">
      <div className="container-fluid">
        <div className="row d-flex justify-content-between py-1">
          <div className="col-md-2 logo justify-content-center align-items-center d-flex p-0 m-0">
            <img src={Logo} alt="log" />
          </div>
          <div className="col-md-9 links">
            <ul className="d-flex justify-content-center">
              <li>
                <a href="#hakkimizda">HAKKIMIZDA</a>
              </li>
              <li>
                <a href="#hizmetlerimiz">HİZMETLERİMİZ</a>
              </li>
              <li>
                <a href="#anlasmali-sirketler">ANLAŞMALI ŞİRKETLER</a>
              </li>
              <li>
                <a href="#misyonumuz">MİSYONUMUZ</a>
              </li>
              <li>
                <a href="#iletisim">İLETİŞİM</a>
              </li>
            </ul>
          </div>
          <div className="col-md-1">
            <div className="slogan">
              <img src={Slogan} alt="slogan" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
