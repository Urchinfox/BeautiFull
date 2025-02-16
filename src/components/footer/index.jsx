import { Link } from "react-router-dom";
import '@/components/footer/footer.scss';
import logo from '@/assets/images/footer/logo.png';
import fb from '@/assets/images/footer/facebook.png';
import ig from '@/assets/images/footer/instagram.png';
import line from '@/assets/images/footer/line.png';

const Footer = () => {
  return (
    <footer className="footer py-lg-100 py-40 rounded-footer overflow-hidden">

      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-3 col-12 text-lg-start text-center order-lg-1 order-2">
            <Link to='/' className="me-16">立即預約</Link>
            <Link to-='/'>探索服務</Link>
          </div>
          <div className="col-lg-6 col-12 order-lg-2 order-3 my-lg-0 my-24">
            <span className="footer-deco"></span>
          </div>
          <div className="col-lg-3 col-12 order-lg-3 order-1 text-center mb-lg-0 mb-16">
            <img src={logo} width={306} height={100} alt="" />
          </div>
          <div className="col-12 d-flex flex-lg-row flex-column flex-column-reverse justify-content-between order-4">
            <p className="fs-m text-neutral-600 ">©本專題僅為學習用途，不做任何商業使用，圖片來源請見 GitHub repo</p>
            <div className="text-center text-lg-start  mb-lg-0 mb-16">
              <Link className="me-48" to='/'><img width={40} height={40} src={line} alt="" /></Link>
              <Link className="me-48" to='/'><img width={40} height={40} src={ig} alt="" /></Link>
              <Link to='/'><img width={40} height={40} src={fb} alt="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;