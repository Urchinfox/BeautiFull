import './detail.scss';
const PageServiceDetail = () => {
  return (
    <>
      <section className="bannerServicesDetail">
        <div className="container">
          <div className="row">
            <div className="card glassBg col-2 col-md-3">
              <ul className="card-body list-unstyled">
                <li><h6>臉部清潔保養</h6></li>
                <li className="listDecorate"></li>
                <li><h6>全身按摩</h6></li>
                <li className="listDecorate"></li>
                <li><h6>霧眉</h6></li>
                <li className="listDecorate"></li>
                <li><h6>眼線</h6></li>
                <li className="listDecorate"></li>
                <li><h6>繡唇</h6></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <img src="https://live.staticflickr.com/65535/54301904962_b0a76caef3.jpg" alt="before" className="col-6" />
            <img src="https://live.staticflickr.com/65535/54301904972_eda8cf4ccd.jpg" alt="after"  className="col-6" />
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
  )
};
export default PageServiceDetail;
