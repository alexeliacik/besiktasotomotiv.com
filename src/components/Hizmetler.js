import React from 'react';

const Hizmetler = () => {
  return (
    <div id="hizmetlerimiz" className="hizmetler py-5">
      <div className="container">
        <h1 className="text-center mb-5">HİZMETLERİMİZ</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <h4 className="text-center pt-3">Oto Boya</h4>
              <div className="card-body text-center">
                <p>
                  Aracınızda trafik kazaları sonrasında meydana gelen göçük ve
                  çizikler sorun olmaktan çıkıyor. Tecrübeli uzman personelimiz
                  tarafından dünyanın en kaliteli boya markaları, her marka
                  araca uygun renk yaratan bilgisayarlı oto boya mikser
                  makinemiz ve boya fırınlarımız ile aracınız ilk günkü haline
                  kavuşuyor.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h4 className="text-center pt-3">Kaporta</h4>
              <div className="card-body text-center">
                <p>
                  Her marka ve model hasarlı araçların kaporta ve şase
                  aksamlarına en kısa zamanda araçların fabrika çıkışı ölçüleri
                  doğrultusunda tüm modern onarım ekipmanları ve konusunda uzman
                  kadromuzla kaporta hizmeti vermekteyiz.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h4 className="text-center pt-3">Araç Peryodik Bakımı</h4>
              <div className="card-body text-center">
                {' '}
                <p>
                  {' '}
                  Otomobilinizden iyi bir performans ve otomobilinizle güvenli
                  bir yolculuk için aracimizi belirli araliklarla bakim
                  yaptirmaniz gerekmektedir. Yaptiracaginiz bakim hem yakittan
                  tasarruf saglayacak hem de araciniz motor ömrünü uzatmasini
                  saglayacaktir.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 text-center">
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">
                Direksiyon Pompası Tamiri
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">
                Klima Kompresörü Tamiri
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">
                Tampon, Far, Torpido Tamiri
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">Radyatör Tamiri </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">
                Şase, Traverse Tamiri
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="card-body font-weight-bold">
                Dingil, Aks, Kovan Tamiri
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hizmetler;
