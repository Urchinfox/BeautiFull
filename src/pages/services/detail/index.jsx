import './detail.scss';
import feather from "feather-icons";

const PageServiceDetail = () => {
  return (
    <>
      <section className="bannerServicesDetail">
        <div className="container">
          <div className="row">
            <div className="card glassBg col-2 col-md-3">
              <ul className="card-body list-unstyled">
                <li className='h6 fw-bold text-base-brown500'><a href="#">臉部清潔保養</a></li>
                <li className="listDecorate"></li>
                <li className='h6 text-neutral-400'><a href="#">全身按摩</a></li>
                <li className="listDecorate"></li>
                <li className='h6 text-neutral-400'><a href="#">霧眉</a></li>
                <li className="listDecorate"></li>
                <li className='h6 text-neutral-400'><a href="#">眼線</a></li>
                <li className="listDecorate"></li>
                <li className='h6 text-neutral-400'><a href="#">繡唇</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="decorateBg">
        <div className="container py-120 my-24">
          <div className="row">
          <div className="col-12 col-lg-7 px-0 row g-16">
            <div className="col-6">
              <div className="image-container">
                <h5 className="imageTitale">Before</h5>
                <img src="https://live.staticflickr.com/65535/54301904962_b0a76caef3.jpg" alt="before" className="img-fluid" />
              </div>
            </div>
            <div className="col-6">
              <div className="image-container">
                <h5 className="imageTitale">After</h5>
                <img src="https://live.staticflickr.com/65535/54301904972_eda8cf4ccd.jpg" alt="after" className="img-fluid" />
                <img src="/src/assets/images/home/bannerDeco.png" alt="decoration" className="decoration-overlay" />
              </div>
            </div>
          </div>
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-center px-36">
              <h6 className="mb-16 text-base-brown500">服務詳細描述</h6>
              <p>深層清潔臉部肌膚，去除角質與毛孔中的污垢，搭配滋潤保養精華，修復乾燥與粗糙肌膚，提升肌膚彈性與光澤。全程使用高效能護膚產品，並根據膚質提供個性化建議。</p>
              <h6 className='mt-60 mb-16 text-base-brown500'>注意事項</h6>
              <ul>
                <li>護理後24小時避免化妝與長時間曝曬。</li>
                <li>如有皮膚敏感或過敏史，請提前告知專業人員。</li>
                <li>建議每2-4週進行一次護理，以保持最佳效果。</li>
              </ul>
              <h6 className='mt-60 mb-16 text-base-brown500'>價格範圍</h6>
              <p>NT$<span className="h2 text-base-brown500">1,500</span>起 (根據療程與膚質定制)</p>
            </div>
          </div>
        </div>
      </section>
      <section className="row py-80 justify-content-center">
        <div className="col-12 col-lg-10 table-responsive">
          <div className="buttonGroup d-flex justify-content-between">
            <div className="d-flex">
              <div className='me-24'>
                <button type='button' className="rounded-start-sm">&lt;</button>
                <button type='button' className="rounded-end-sm">&gt;</button>
              </div>
              <button type='button' className="radius-sm">今天</button>
            </div>
            <h5>2025 年 01 月</h5>
            <div>
              <button type='button' className="rounded-start-sm">月</button>
              <button type='button' className="rounded-end-sm">週</button>
            </div>
          </div>
          <table className="my-24">
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
            <tr>
              <td>29</td>
              <td>30</td>
              <td>31</td>
              <td className="green-bg">1</td>
              <td className="green-bg">2</td>
              <td className="green-bg">3</td>
              <td className="red-bg">4</td>
            </tr>
            <tr>
              <td className="lightGray-bg">5</td>
              <td className="green-bg">6</td>
              <td className="green-bg">7</td>
              <td className="green-bg">8</td>
              <td className="green-bg">9</td>
              <td className="red-bg">10</td>
              <td className="green-bg">11</td>
            </tr>
            <tr>
              <td className="lightGray-bg">12</td>
              <td className="green-bg">13</td>
              <td className="green-bg">14</td>
              <td className="green-bg">15</td>
              <td className="green-bg">16</td>
              <td className="green-bg">17</td>
              <td className="red-bg">18</td>
            </tr>
            <tr>
              <td className="lightGray-bg">19</td>
              <td className="green-bg">20</td>
              <td className="green-bg">21</td>
              <td className="green-bg">22</td>
              <td className="green-bg">23</td>
              <td className="green-bg">24</td>
              <td className="red-bg">25</td>
            </tr>
            <tr>
              <td className="lightGray-bg">26</td>
              <td className="green-bg">27</td>
              <td className="green-bg">28</td>
              <td className="green-bg">29</td>
              <td className="green-bg">30</td>
              <td className="green-bg">31</td>
              <td>1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
            </tr>
          </table>
          <div className="d-flex justify-content-between">
            <div className="d-flex businessStatus my-8">
              <div className="statusBox green-bg me-16"></div>
              <p className='h6 me-36'>可預約</p>
              <div className="statusBox red-bg me-16"></div>
              <p className='h6 me-36'>預約已滿</p>
              <div className="statusBox lightGray-bg  me-16"></div>
              <p className='h6 me-36'>公休</p>
            </div>
            <a href="#" className='buttonElement button-bg radius-sm d-flex justify-content-between'><p className="h6">• 歡迎預約</p><i className="bi bi-arrow-right rounded-1 bg-white"></i></a>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <h6>服務詳細描述</h6>
          <p>深層清潔臉部肌膚，去除角質與毛孔中的污垢，搭配滋潤保養精華，修復乾燥與粗糙肌膚，提升肌膚彈性與光澤。全程使用高效能護膚產品，並根據膚質提供個性化建議。</p>
          <h6>注意事項</h6>
          <ul>
            <li>護理後24小時避免化妝與長時間曝曬。</li>
            <li>如有皮膚敏感或過敏史，請提前告知專業人員。</li>
            <li>建議每2-4週進行一次護理，以保持最佳效果。</li>
          </ul>
          <h6>價格範圍</h6>
          <p>NT$<span>1,500</span>起 (根據療程與膚質定制)</p>
        </div>
      </section>
    </>
  );
};
export default PageServiceDetail;
