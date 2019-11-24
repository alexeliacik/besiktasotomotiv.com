import React from 'react';
import phone from '../images/phone.svg';
import Mail from '../images/mail.svg';
import Adres from '../images/adres.svg';

const Iletisim = () => {
  return (
    <div id="iletisim" className="iletisim py-2">
      <div className="container-fluid">
        <div className="row d-flex justify-content-around">
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center">
              <img src={Adres} alt="phone" />
              <h3 className="ml-3">Adres</h3>
            </div>
            <p
              style={{ color: '#007bff' }}
              className="font-weight-bold pb-2 m-0"
            >
              Seyrantepe Sanayi Mah. 2. Sanayi Sitesi 37. Sok No:9
              Yenişehir/DİYARBAKIR
            </p>
          </div>

          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center">
              <img src={Mail} alt="phone" />
              <h3 className="ml-3">Mail</h3>
            </div>
            <a
              href="mailto:besiktas.otomotiv@gmail.com"
              className="mail font-weight-bold"
            >
              besiktas.otomotiv@gmail.com
            </a>
          </div>
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center">
              <img src={phone} alt="phone" />
              <h3 className="ml-2">Telefon</h3>
            </div>
            <a href="tel:+904122371903" className="phone">
              0412 237 19 03
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iletisim;
