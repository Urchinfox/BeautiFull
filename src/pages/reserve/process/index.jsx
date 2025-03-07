import '../../services/detail/detail.scss';
import './process.scss';

const PageReserveProcess = () => {
  return (
    <>
      <section className="container py-80">
        <div className="reserveTitle d-flex rounded-5 mb-56">
          <h1 className="fw-bold me-28">Step 1</h1>
          <p className="h3 fw-bold me-60">選擇服務</p>
          <button type="button" data-bs-toggle="dropdown" className="dropdown-toggle dropdownService my-16 px-24 text-start position-relative">臉部清潔保養
            <span className="position-absolute end-0 me-16">▼</span>
            <ul className="dropdown-menu w-100">
              <li><a href="#" className="dropdown-item custom-dropdown-item">全身按摩</a></li>
              <li><a href="#" className="dropdown-item custom-dropdown-item">霧眉</a></li>
              <li><a href="#" className="dropdown-item custom-dropdown-item">眼線</a></li>
              <li><a href="#" className="dropdown-item custom-dropdown-item">繡唇</a></li>
            </ul>
          </button>
        </div>
        <div className="row justify-content-center">
          <img src="/src/assets/images/detail/faceCleansing-a.png" alt="after" className="col-4 rounded-3"/>
          <div className="col-6 px-36 py-28">
            <h4 className="text-base-brown500">臉部清潔保養</h4>
            <h6 className="mt-48 mb-16 text-base-brown500">服務詳細描述</h6>
            <p>深層清潔臉部肌膚，去除角質與毛孔中的污垢，搭配滋潤保養精華，修復乾燥與粗糙肌膚，提升肌膚彈性與光澤。全程使用高效能護膚產品，並根據膚質提供個性化建議。</p>
            <h6 className="mt-48 mb-16 text-base-brown500">注意事項</h6>
            <ul>
              <li>護理後24小時避免化妝與長時間曝曬。</li>
              <li>如有皮膚敏感或過敏史，請提前告知專業人員。</li>
              <li>建議每2-4週進行一次護理，以保持最佳效果。</li>
            </ul>
            <h6 className="mt-48 mb-16 text-base-brown500">價格範圍</h6>
            <p>NT$<span className="h2 text-base-brown500">1,500</span>起 (根據療程與膚質定制)</p>
          </div>
        </div>
      </section>
      <section className="container py-80">
        <div className="reserveTitle d-flex rounded-5 mb-56">
          <h1 className="fw-bold me-28">Step 2</h1>
          <p className="h3 fw-bold me-60">選擇時段與人數</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 justify-content-center p-36">
            <h5>2025 年 01 月</h5>
            <div className="table-responsive">
              <div className="buttonGroup d-flex justify-content-between">
                <div>
                  <button type='button' className="rounded-start-sm">&lt;</button>
                  <button type='button' className="rounded-end-sm">&gt;</button>
                </div>
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
              </div>
            </div>
          </div>
          <div className="col-4 px-24">
            <h6 className="text-base-brown500 mb-16">時段</h6>
            <div className="row g-8 mb-48">
              {[
                { id: "time-10", label: "10:00", defaultChecked: true, disabled: false },
                { id: "time-11", label: "11:00", defaultChecked: false, disabled: false },
                { id: "time-13", label: "13:00", defaultChecked: false, disabled: false },
                { id: "time-14", label: "14:00", defaultChecked: false, disabled: false },
                { id: "time-15", label: "15:00", defaultChecked: false, disabled: false },
                { id: "time-16", label: "16:00", defaultChecked: false, disabled: true },
                { id: "time-17", label: "17:00", defaultChecked: false, disabled: false }
              ].map((time) => (
                <div className="col-3" key={time.id}>
                  <input
                    type="radio"
                    className="btn-check"
                    name="time-slot"
                    id={time.id}
                    autoComplete="off"
                    defaultChecked={time.defaultChecked}
                    disabled={time.disabled}
                  />
                  <label className={`btn custom-radio w-100 p-12 ${time.disabled ? "disabled" : ""}`} htmlFor={time.id}>
                    {time.label}
                  </label>
                </div>
              ))}
            </div>

            <h6 className="text-base-brown500 mb-16">人數</h6>
            <div className="mb-48">/ 每人價格 1,500 元起</div>
            <div className="mb-48">
              <label htmlFor="reservationNotes" className="form-label h6 text-base-brown500 mb-16">預約備註</label>
              <textarea className="form-control rounded-1" id="reservationNotes" rows="4" placeholder="例：想讓小朋友在等候區等待，請問方便嗎?"></textarea>
            </div>
            <h6 className="text-base-brown500 mb-16">注意</h6>
            <p className="mb-48">請提前 10 分鐘到場簽到<br />
            超過預定時段 10 分鐘未到場，視為放棄本次預約</p>
            <a href="#" className='buttonElement button-bg radius-sm d-flex justify-content-between'><p className="h6">• 下一步</p><i className="bi bi-arrow-down rounded-1 bg-white"></i></a>
          </div>
        </div>
      </section>
      <section className="container py-80">
        <div className="reserveTitle d-flex rounded-5 mb-56">
          <h1 className="fw-bold me-28">Step 3</h1>
          <p className="h3 fw-bold me-60">填寫預約人資料</p>
        </div>
      </section>
    </>
  );
};

export default PageReserveProcess;