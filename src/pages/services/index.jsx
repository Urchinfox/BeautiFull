<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" />;

import '@/pages/services/services.scss';
import services1 from '@/assets/images/home/services1.png';
import services2 from '@/assets/images/home/services2.png';
import services3 from '@/assets/images/home/services3.png';
import services4 from '@/assets/images/home/services4.png';
import services5 from '@/assets/images/home/services5.png';
import ZonePicModal from './ZonePicModal';
import Faq from '../../components/services/Faq';

import { bannerData } from './Resourse';
import { zonePicData } from './Resourse';
import React, { useEffect, useRef, useState } from 'react';
import { Modal } from "bootstrap";
import { Link } from 'react-router-dom';
const PageServicesIndex = () => {
  const [bannerInfo, setBannerInfo] = useState([
    {
      id: 1,
      title: '臉部清潔保養',
      description: [
        '給肌膚一次深層的清新洗禮，',
        '告別老廢角質與暗沉，',
        '讓肌膚重現細緻柔嫩。'
      ],
      img: services1
    },
  ]);
  const [bgImg, setBgImg] = useState('banner1');
  const [opacity, setOpacity] = useState(1);
  const [zonePic, setZonePic] = useState(zonePicData['reception']);
  const [ZoneBtn, setZoneBtn] = useState('reception');
  const [focusPic, setFocusPic] = useState();
  const [faqBtn, setFaqBtn] = useState('reservation');

  const zoneBtnModal = useRef(null);

  useEffect(() => {
    zoneBtnModal.current = new Modal('#picModal');
  }, []);

  const openModal = (index) => {
    setFocusPic(index);
    zoneBtnModal.current.show();
  };
  const closeModal = () => {
    zoneBtnModal.current.hide();
  };

  const switchBanner = (number, banner) => {
    const result = bannerData.find(item => item.id === number);
    setOpacity(0);
    setTimeout(() => {
      setBannerInfo([result]);
      setBgImg(banner);
      setOpacity(1);
    }, 300);
  };

  const switchZonePic = (zone) => {
    setZonePic(zonePicData[zone]);
    setZoneBtn(zone);
  };

  return (<>
    <section className={`service-banner pt-lg-120 pt-40 pb-lg-40 pb-20 mb-lg-80 mb-0 ${bgImg}`} style={{ opacity: opacity, transition: 'opacity .3s ease-in-out' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            {
              bannerInfo.map(item => {
                return (
                  <div className='py-20 px-36 blur blur-remove mb-40' key={item.id}>
                    <h1>{item.title}</h1>
                    <p className='mt-24 mb-lg-48 mb-24'>
                      {item.description.map((txt, index) => {
                        return (<React.Fragment key={index}>
                          {txt}
                          {index !== item.description.length - 1 && <br />}
                        </React.Fragment>);
                      })};

                    </p>
                    <Link to='/' className='btn-custom btn-custom-dot text-start position-relative'>立即預約
                      <i className="bi bi-arrow-right bg-white p-8 rounded-1"></i>
                    </Link>
                  </div>
                );
              })
            };

            <div className='d-flex align-items-center p-lg-20 p-12 blur justify-content-around'>
              <img className='rounded-circle object-fit-cover' src={services1} width={80} height={80} onClick={() => switchBanner(1, 'banner1')} alt="" />
              <img className='rounded-circle object-fit-cover' src={services2} width={80} height={80} onClick={() => switchBanner(2, 'banner2')} alt="" />
              <img className='rounded-circle object-fit-cover' src={services3} width={80} height={80} onClick={() => switchBanner(3, 'banner3')} alt="" />
              <img className='rounded-circle object-fit-cover' src={services4} width={80} height={80} onClick={() => switchBanner(4, 'banner4')} alt="" />
              <img className='rounded-circle object-fit-cover' src={services5} width={80} height={80} onClick={() => switchBanner(5, 'banner5')} alt="" />

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='contact position-relative contact-deco mt-lg-80 mt-0 pb-lg-100 pb-0'>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 p-lg-60 py-40 px-12">
            <h2 className='text-base-brown500 mb-36'>Contact Us Anytime</h2>
            <div className="row">
              <div className="col-12 col-lg-2" ><b >電話</b></div>
              <div className="col-12 col-lg-10 mb-24"><span>0912-345-678</span></div>
              <div className="col-12 col-lg-2"><b className='fw-bold'>電子郵件</b></div>
              <div className='col-12 col-lg-10 mb-24'><span>service@beautycarestudio.com</span></div>
              <div className="col-12 col-lg-2"><b>營業時間</b></div>
              <div className='col-12 col-lg-10'><span>週一至週六：10:00 AM ~ 6:00 PM、週日：公休</span></div>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className='d-flex mb-16'>
              <button type='button' className={`btn ${ZoneBtn === 'reception' ? 'btn-base-brown500' : 'btn-neutral-100'} me-16 w-100`} onClick={() => switchZonePic('reception')}>接待區</button>
              <button type='button' className={`btn me-16 w-100 ${ZoneBtn === 'care' ? 'btn-base-brown500' : 'btn-neutral-100'}`} onClick={() => switchZonePic('care')}>護理區</button>
              <button type='button' className={`btn w-100 ${ZoneBtn === 'breakZone' ? 'btn-base-brown500' : 'btn-neutral-100'}`} onClick={() => switchZonePic('breakZone')}>休息區</button>
            </div>
            <div className=' p-16 border border-neutral-200 bg-white' >
              <div className='overflow-scroll picframe'>
                <ZonePicModal closeModal={closeModal} picture={zonePic} focusPic={focusPic} />
                {
                  zonePic.map((item, index) => {
                    return (<React.Fragment key={index}>
                      <div className='position-relative'>
                        <img className='mb-16' src={item} width={499} height={379} alt="" />
                        <button type='button' className='expand d-flex justify-content-center align-items-center' onClick={() => openModal(index)}><i className="bi bi-arrows-angle-expand text-base-brown600 fs-5"></i></button>
                      </div>
                    </React.Fragment>);
                  })
                };
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='faq py-lg-120 py-40'>
      <div className="container">
        <h2 className='text-center mb-lg-60 mb-24'>常見問題</h2>
        <div className='row justify-content-center'>
          <div className="col-lg-3 col-12 mb-lg-0 mb-24">
            <div>
              <button className={`btn ${faqBtn === 'reservation' ? "btn-base-brown200" : 'btn-neutral-200'} btn-base-brown200 w-100 mb-16`} onClick={() => setFaqBtn('reservation')}>預約與取消政策</button>
              <div className='d-block d-lg-none'>
                {
                  faqBtn === 'reservation' ? <Faq btn={faqBtn} /> : ''
                }
              </div>
            </div>
            <div>
              <button className={`btn ${faqBtn === 'pay' ? "btn-base-brown200" : 'btn-neutral-200'} w-100 mb-16`} onClick={() => setFaqBtn('pay')}>支付與退款</button>
              <div className='d-block d-lg-none'>
                {
                  faqBtn === 'pay' ? <Faq btn={faqBtn} /> : ''
                }
              </div>
            </div>
            <div>
              <button className={`btn ${faqBtn === 'recommendation' ? "btn-base-brown200" : 'btn-neutral-200'} w-100 mb-16`} onClick={() => setFaqBtn('recommendation')}>美容護理建議</button>
              <div className='d-block d-lg-none'>
                {
                  faqBtn === 'recommendation' ? <Faq btn={faqBtn} /> : ''
                }
              </div>
            </div>
          </div>
          <div className="col-lg-7 d-none d-lg-block">
            <Faq btn={faqBtn} />
          </div>
        </div>
      </div>
    </section>
  </>);
};

export default PageServicesIndex;
