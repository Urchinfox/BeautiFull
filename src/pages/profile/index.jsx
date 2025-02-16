import '@/pages/profile/profile.scss';

const PageProfileIndex = () => {
  return (
    <>
      <section className="container py-40 py-lg-80">
        <div className="bg-opacity-30 mb-16 mb-lg-56 rounded-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="d-flex align-items-center p-16 py-lg-24">
                <p className="d-none d-lg-block font-bona text-base-brown500 fs-80 opacity-25 me-28">Profile</p>
                <h3 className="fw-bold text-neutral-800">我的帳戶</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <form>
              <div className="border-neutral400 p-16 p-lg-36 mb-24 mb-lg-36">
                <h6 className="text-base-brown500 mb-24 mb-lg-36">個人資訊</h6>
                <label htmlFor="name" className="d-block fs-s">名稱</label>
                <input type="text" id="name" name="name" className="w-100 ps-12 mb-24 mb-lg-36 border-neutral400"/>
                <label htmlFor="phone" className="d-block fs-s">聯絡電話</label>
                <input type="tel" id="phone" name="phone" className="w-100 ps-12 mb-24 mb-lg-36 border-neutral400"/>
                <div className="row mb-24 mb-lg-36">
                  <p className="d-block fs-s">性別</p>
                  <div className="col-4">
                    <input type="radio" name="sex" id="male" className="d-none sex-input" checked/>
                    <label htmlFor="male" className="sex-radio border-neutral400">男</label>
                  </div>
                  <div className="col-4">
                    <input type="radio" name="sex" id="female" className="d-none sex-input"/>
                    <label htmlFor="female" className="sex-radio border-neutral400">女</label>
                  </div>
                  <div className="col-4">
                    <input type="radio" name="sex" id="unknown" className="d-none sex-input"/>
                    <label htmlFor="unknown" className="sex-radio border-neutral400">不告知</label>
                  </div>
                </div>
                <label htmlFor="email" className="d-block fs-s">電子信箱</label>
                <input type="mail" id="email" name="email" className="w-100 ps-12 border-neutral400 text-neutral400" value={'example@example.com'} disabled/>
              </div>
              <button type="button" className="btn btn-base-brown200 d-block ms-auto update-user-btn">
                <div className="d-flex align-items-center justify-content-between">
                  <li>更新個人資料</li>
                  <i className="bi bi-arrow-right-short update-arrow"></i>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="container py-40 py-lg-80">
        <div className="bg-opacity-30 mb-16 mb-lg-56 rounded-5">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="d-flex align-items-center p-16 py-lg-24">
                <p className="d-none d-lg-block font-bona text-base-brown500 fs-80 opacity-25 me-28">Reservation</p>
                <h3 className="fw-bold text-neutral-800">我的預約</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto mb-16 mb-lg-56">
            <div className="border-neutral400 text-base-brown500 p-16 p-md-36">
              <div className="d-flex justify-content-center align-items-center position-relative mb-36">
                <h1 className="d-none d-xl-block font-bona opacity-25 reserve-state">Coming Soon</h1>
                <h3 className="fw-bold text-center">即將到來的預約</h3>
              </div>
              <div className="text-md-center mb-36">
                <h6 className="mb-16">預約已完成，期待為您帶來美好體驗。</h6>
                <h6 className="fw-bold mb-16">預約資訊</h6>
                <ul className='d-inline-block text-start'>
                  <li><h6>預約項目：全身按摩</h6></li>
                  <li><h6>預約時間：2025年1月20日 14:30</h6></li>
                  <li><h6>預約地點：肌能美工作室</h6></li>
                  <li><h6>預約編號：ABC123456</h6></li>
                </ul>
                <h6 className="text-start text-md-center">
                  為了提供最佳服務，請於預約時間準時到場。<br/>
                  若需更改或取消，請提前聯繫我們。
                </h6>
              </div>
              <div className="d-flex flex-column flex-md-row-reverse justify-content-center gap-12">
                <button type="button" className="btn btn-base-brown200 btn-update-booking ms-md-24">
                  <div className="d-flex align-items-center justify-content-between">
                    <li>更新預約</li>
                    <i className="bi bi-arrow-right-short update-arrow"></i>
                  </div>
                </button>
                <button type="button" className="btn btn-neutral-200 btn-update-booking">
                  <div className="d-flex align-items-center justify-content-between">
                    <li>取消預約</li>
                    <i className="bi bi-arrow-right-short update-arrow"></i>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-10 mx-auto mb-16 mb-lg-56">
            <div className="border-neutral400 text-neutral-400 p-16 p-md-36">
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <h1 className="d-none d-xl-block font-bona opacity-25 reserve-state">Completed</h1>
                  <h3 className="fw-bold text-center">已完成體驗</h3>
                </div>
                <div className="text-md-center mt-36">
                  <h6 className="mb-16">預約已完成，期待為您帶來美好體驗。</h6>
                  <h6 className="fw-bold mb-16">預約資訊</h6>
                  <ul className='d-inline-block text-start'>
                    <li><h6>預約項目：全身按摩</h6></li>
                    <li><h6>預約時間：2025年1月20日 14:30</h6></li>
                    <li><h6>預約地點：肌能美工作室</h6></li>
                    <li><h6>預約編號：ABC123456</h6></li>
                  </ul>
                  <h6 className="text-start text-md-center">
                    感謝您的光臨，<br/>
                    每一次相遇都是一種緣分，期待下次與您繼續美麗旅程。
                  </h6>
                </div>
              </div>
          </div>
          <div className="col-lg-10 mx-auto">
            <div className="border-neutral400 text-neutral-400 p-16 p-md-36">
                <div className="d-flex justify-content-center align-items-center position-relative">
                  <h1 className="d-none d-xl-block font-bona opacity-25 reserve-state">Cancelled</h1>
                  <h3 className="fw-bold text-center">已取消預約</h3>
                </div>
                <div className="text-md-center mt-36">
                  <h6 className="mb-16">預約已完成，期待為您帶來美好體驗。</h6>
                  <h6 className="fw-bold mb-16">預約資訊</h6>
                  <ul className='d-inline-block text-start'>
                    <li><h6>預約項目：全身按摩</h6></li>
                    <li><h6>預約時間：2025年1月20日 14:30</h6></li>
                    <li><h6>預約地點：肌能美工作室</h6></li>
                    <li><h6>預約編號：ABC123456</h6></li>
                  </ul>
                  <h6 className="text-start text-md-center">
                    遺憾本次未能相聚，期待下次與您相遇。
                  </h6>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageProfileIndex;
