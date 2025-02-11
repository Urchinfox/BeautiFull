import logo from '@/assets/images/header/logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/components/header/index.scss';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className='d-lg-block d-none'>
        <div className="container">
          <nav className='py-16'>
            <div className="justify-content-between d-flex align-items-center">
              <div className='d-lg-block d-none'>
                <Link to='/' className='me-40'>預約美麗時光</Link>
                <Link to='/'>發現笑的可能</Link>
              </div>
              <div><img src={logo} width={210} height={80} alt="BeautiFull" /></div>
              {/* TODOS: login dropdown
                <div className="dropdown">
                  <button className="border-0 bg-white dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                  <img src={profile} width={40} height={40} classNameName='me-8' alt="profile" />使用者姓名
                  </button>
                  <ul className="dropdown-menu text-center rounded-0" style={{backgroundColor:'#F5DCD780'}}>
                    <li><Link to='/' className="dropdown-item" >帳戶資訊</Link></li>
                    <li><Link to='/' className="dropdown-item" >預約記錄</Link></li>
                  </ul>
                </div> 
                */
              }
              <button className='btn' style={{ backgroundColor: '#F5DCD780' }}>登入</button>
            </div>
          </nav>
        </div>
      </header>

      <header className='d-block d-lg-none'>
        <div className="container">
          <div className='d-flex justify-content-between align-items-center py-16'>
            <div><img src={logo} width={210} height={80} alt="BeautiFull" /></div>
            <div className={`d-lg-none d-block ${toggle ? 'd-none' : 'd-block'}`} onClick={() => setToggle(true)}>
              <i className="bi bi-list fs-1"></i>
            </div>
            <div className={`${toggle ? 'd-block' : 'd-none'}`} onClick={() => setToggle(false)}>
              <i className="bi bi-x-lg fs-3"></i>
            </div>
          </div>
        </div>

        {/* 下拉選單 */}
        <div className={`bg-base-brown200 menu ${toggle ? 'open' : ''}`}>
          <div className="container">
            <div className='bg-base-brown200'>
              <Link to='/' className='w-100 py-12 me-40 d-block'>預約美麗時光</Link>
              <Link to='/' className='w-100 py-12 d-block'>發現笑的可能</Link>
              <Link to='/' className='w-100 py-12 '>登入</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
