import SectionTitle from "@/components/shared/SectionTitle";
import Button from "@/components/shared/Button";
import profileImg from "../../../assets/images/reserve/reserve-profile.png";
import "@/pages/reserve/confirm/confirm.scss";

const PageReserveConfirm = () => {
  return (
    <>
      <section className="bg-neutral-100 position-relative overflow-hidden reserve-bg">
        <div className="container">
        <div className="text-base-brown500 text-center py-80">
          <h1 className="fw-bold mb-48">輕鬆預約，不需事先付款</h1>
          <h6 className="mb-16">Beautifull 重視您的每一次預約，</h6>
          <h6 className="mb-16">綁定信用卡僅作為到場保障，不會提前扣款，</h6>
          <h6>讓您安心預約，輕鬆體驗。</h6>
        </div>
        </div>
      </section>
      <section>
        <div className="container pt-16 pt-lg-80 pb-40 pb-lg-80">
          <SectionTitle textEn="Last step" textZh="確認預約資訊"/>
          <div className="row flex-column flex-lg-row justify-content-center mt-16 mt-lg-56">
            <div className="col-lg-4 text-center">
              <img src={profileImg} alt="profileImg" className="mb-16 mb-lg-0"/>
            </div>
            <div className="col-lg-6">
              <div>
                <h4 className="text-base-brown500 fw-bold mb-24 mb-lg-32">臉部清潔保養</h4>
                <div className="mb-24 mb-lg-32">
                  <h6 className="text-base-brown500 mb-8 mb-lg-16">時段</h6>
                  <p>
                    日期：2025 年 / 01 月 17 日 週五<br/>
                    時段：10:00
                  </p>
                </div>
                <div className="mb-24 mb-lg-32">
                  <h6 className="text-base-brown500 mb-8 mb-lg-16">人數</h6>
                  <p><span className="fw-bold">1人</span> / 每人價格 1,500 元起</p>
                </div>
                <div className="mb-24 mb-lg-32">
                  <h6 className="text-base-brown500 mb-8 mb-lg-16">預約備註</h6>
                  <p>想讓小朋友在等候區等待，請問方便嗎?</p>
                </div>
                <div className="mb-24 mb-lg-32">
                  <h6 className="text-base-brown500 mb-8 mb-lg-16">注意</h6>
                  <p>
                    請提前 10 分鐘到場簽到<br/>
                    超過預定時段 10 分鐘未到場，視為放棄本次預約
                  </p>
                </div>
                <Button
                  variant="primary"
                  icon={<i className="bi bi-arrow-left-short"></i>}
                >更改預約內容
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container py-40 py-lg-80">
          <div className="row p-16">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div className="mb-16">
                <h6 className="text-base-brown500 mb-16">支付金額</h6>
                <h6 className="mb-20 text-neutral-400"><del>原價 NT$1,500元</del></h6>
                <h6>優惠後價格 NT$1,450元</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <h6 className="text-base-brown500 mb-16">使用優惠碼</h6>
                <h6 className="py-8 px-12 text-neutral-400">DISCOUNT</h6>
              </div>
            </div>
          </div>
          <div className="row justify-content-center g-24 mb-24 mb-lg-36">
            <div className="col-lg-6">
              <div className="border border-neutral-400 p-16 p-lg-36 h-100"> 
                <div className="mb-24 mb-lg-48">
                  <h6 className="text-base-brown500 mb-24">信用卡資訊</h6>
                  <p className="fs-m">
                    信用卡資訊僅作為預訂確認使用，Beautifull 不會使用這張信用卡進行預先扣款。<br/>
                    請於預約當日現場支付服務費用。
                  </p>
                </div>
                <div className="mb-24 mb-lg-48">
                  <p className="fs-s">持卡人姓名</p>
                  <p>王小明</p>
                </div>
                <div className="mb-24 mb-lg-48">
                  <p className="fs-s">信用卡卡號</p>
                  <div className="d-flex align-items-center">
                    <p className="p-8">XXXX</p>
                    <p>－</p>
                    <p className="p-8">XXXX</p>
                    <p>－</p>
                    <p className="p-8">XXXX</p>
                    <p>－</p>
                    <p className="p-8">XXXX</p>
                  </div>
                </div>
                <div className="d-flex mb-24 mb-lg-48">
                  <div className="w-50">
                    <p className="fs-s">信用卡有效月年</p>
                    <p className="p-8-12">MM/YYYY</p>
                  </div>
                  <div className="w-50">
                    <p className="fs-s">信用卡背面末三碼</p>
                    <p className="p-8-12">XXX</p>
                  </div>
                </div>
                <div>
                  如果未能到場且未事先取消預約，<br/>
                  我們將從此信用卡扣除取消服務相關費用。
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="border border-neutral-400 p-16 p-lg-36 h-100">
                <h6 className="text-base-brown500 mb-24 mb-lg-36">主要預約人資訊</h6>
                <div className="mb-24 mb-lg-36">
                  <p className="fs-s">預訂人名稱</p>
                  <p className="p-8-12">王小明</p>
                </div>
                <div className="mb-24 mb-lg-36">
                  <p className="fs-s">聯絡電話</p>
                  <p className="p-8-12">0912345678</p>
                </div>
                <div className="mb-24 mb-lg-36">
                  <p className="fs-s">性別</p>
                  <div className="row">
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
                </div>
                <div className="mb-24 mb-lg-36">
                  <p className="fs-s">聯絡電話</p>
                  <p className="p-8-12">0912345678</p>
                </div>
                <div>
                  <div className="mb-12">
                    <input type="checkbox" id="readPolicy" className="me-8"/>
                    <label htmlFor="readPolicy">我已詳閱⟪Beautifull 肌能美服務條款⟫</label>
                  </div>
                  <div>
                    <input type="checkbox" id="readNotice" className="me-8"/>
                    <label htmlFor="readNotice">我已詳閱預約內容中的注意事項</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-24">
            <Button
              variant="secondary btn-width"
              icon={<i className="bi bi-arrow-left-short"></i>}
            >更改預約
            </Button>
            <Button
              variant="primary btn-width"
              icon={<i className="bi bi-arrow-right-short"></i>}
            >確定預約
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default PageReserveConfirm;