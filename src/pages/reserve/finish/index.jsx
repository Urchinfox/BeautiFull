
const PageReserveFinish = () => {
  return (
    <>
      <div className="bg-neutral-100 my-40">
        <div className="container">
          <div className="text-base-brown500 text-center py-80">
            <h1 className="fw-bold mb-48">已為您保留專屬時光</h1>
            <div className="mb-48">
              <h6 className="mb-16">預約已完成，期待為您帶來美好體驗。</h6>
              <h6 className="fw-bold mb-16">預約資訊</h6>
              <ul className='d-inline-block text-start'>
                <li><h6>預約項目：全身按摩</h6></li>
                <li><h6>預約時間：2025年1月20日 14:30</h6></li>
                <li><h6>預約地點：肌能美工作室</h6></li>
                <li><h6>預約編號：ABC123456</h6></li>
              </ul>
              <h6 className="text-start text-sm-center">
                為了提供最佳服務，請於預約時間準時到場。<br/>
                若需更改或取消，請提前聯繫我們。
              </h6>
            </div>
            <div className="d-flex justify-content-center">
              <h6><a href="#" className="me-16">回首頁</a></h6>
              <h6><a href="#">查看我的預約</a></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PageReserveFinish;
