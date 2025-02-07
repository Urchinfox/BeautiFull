import '@/pages/home.scss';
import banner1 from '@/assets/images/home/banner1.png'
import banner2 from '@/assets/images/home/banner2.png'
import banner3 from '@/assets/images/home/banner3.png'
import bannerDeco from '@/assets/images/home/bannerDeco.png'
import exceptionalL from '@/assets/images/home/exceptional-L.png'
import exceptionalM from '@/assets/images/home/exceptional-M.png'
import exceptionalR from '@/assets/images/home/exceptional-R.png'
import reservation1 from '@/assets/images/home/reservation-1.png'
import reservation2 from '@/assets/images/home/reservation-2.png'
import emma from '@/assets/images/home/emma.png'
import sophia from '@/assets/images/home/sophia.png'
import ivy from '@/assets/images/home/ivy.png'
import cindy from '@/assets/images/home/cindy.png'






const Home = () => {
  return (
    <>
      <section className='py-lg-60 py-40 position-relative'>
        <div className='banner-deco'></div>
        <div className=' position-absolute top-50 left-0 translate-middle-y d-lg-block d-none'><img src={bannerDeco} width={156} height={132} alt="" /></div>
        <div className="container d-lg-block d-none">
          <div className='row'>
            <div className="col-8 d-flex flex-column">
              <div className='px-36 text-base-brown500'>
                <h1 className='fw-bold' style={{fontSize:'80px'}}>BeautiFull</h1>
                <p className='fs-3'>每一次呵護，都讓妳更接近理想中的自己</p>
              </div>
              <div className='text-end mt-auto'>
                <img src={banner1} width={636} height={532} alt="" />
              </div>
            </div>

            <div className='col-4'>
              <div>
                <img className='mb-24' src={banner2} width={416} height={520} alt="" />
                <img src={banner3} width={416} height={236} alt="" />
              </div>

            </div>
          </div>

        </div>

        <div className="container d-block d-lg-none">
          <div className="row">
            <div className="col-12 text-base-brown500 mb-24">
              <h1 className='fw-bold'>BeautiFull</h1>
              <p className='fs-5'>每一次呵護，都讓妳更接近理想中的自己</p>
            </div>
            <div className="col-6">
              <img className='mb-24' src={banner1} width={164} height={136} alt="" />
              <img src={banner3} width={164} height={92} alt="" />
            </div>
            <div className='col-6'>
              <img className='h-100' src={banner2} width={163} height={252} alt="" style={{objectFit:'cover'}} />
            </div>
          </div>
        </div>
      </section>

      <section className='exceptional exceptional-bg my-lg-120 my-40'>
        <div className="container position-relative">   
          <div className="row">
            <div className="col-lg-8 col-12 mb-lg-60 mb-24 mx-auto exceptional-txt">
              <h2 className='mb-lg-8 mb-20 fw-bold position-relative exceptional-deco exceptional-deco-line'>明星療程，絕佳體驗！</h2>
              <p className='fs-6'>由專業師資精心打造的明星療程，從臉部清潔到全身放鬆，讓您美麗加倍，輕鬆焕然一新。</p>
            </div>
            <div className="col-12">
              <div className='row-cols-lg-3 row-cols-1 row'>
                <div className='col position-relative mb-100 mb-lg-0'>
                  <img className='rounded-left-top-248' src={exceptionalL} width={416} height={360} alt="" />
                  <p className='exceptional-p py-16 px-20'>喚醒肌膚透亮新生</p>
                </div>
                <div className='col position-relative mb-100 mb-lg-0'>
                  <img className='rounded-1' src={exceptionalM} width={416} height={360} alt="" />
                  <p className='exceptional-p py-16 px-20'>放鬆身心的極致享受</p>
                </div>
                <div className='col position-relative mb-100 mb-lg-0'>
                  <img className='rounded-right-top-248' src={exceptionalR} width={416} height={360} alt="" />
                  <p className='exceptional-p py-16 px-20'>素顏也能完美自然</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>


      <section className="discount discount-deco-txt d-flex flex-column align-items-center justify-content-center px-12 position-relative overflow-hidden">
          <h2 className='mb-lg-8 fs-3 mb-40 fw-bold position-relative discount-deco discount-deco-line'>首次體驗，專屬折扣！</h2>
          <p className='fs-6'>新朋友限定優惠，給自己一個開啟美麗旅程的理由，立即預約吧！</p>
      </section>

      <section className="reservation reservation-bg position-relative overflow-hidden">
        <div className="container my-lg-120 my-40">
          <div className="row">
            <div className="col-lg-11 col-12 mx-auto d-lg-flex d-block align-items-center justify-content-between mb-24 mb-lg-0">
              <div className='mb-lg-0 mb-48'>
                <img className='rounded-cylinder object-fit-cover' src={reservation1} width={416} height={440} style={{height:'440px'}} alt="" />
              </div>
              <div className='reservation-txt me-lg-100 me-0'>
                <h2 className='mb-24 fw-bold'>預約美麗，專屬於您</h2>
                <p>現在就選擇適合的療程與時間，輕鬆享受我們的專業服務，立即行動！</p>
              </div>
            </div>
            <div className="col-lg-11 col-12 mx-auto d-lg-flex d-block flex-row-reverse align-items-center justify-content-between">
              <div className='mb-lg-0 mb-48' >
                <img className='rounded-cylinder object-fit-cover' src={reservation2} width={416} height={440} style={{height:'440px'}} alt="" />
              </div>
              <div  className='reservation-txt ms-lg-100 ms-0'>
                <h2 className='mb-24 fw-bold'>現在預約，立即變美</h2>
                <p className='mb-48'>無論是日常保養還是重大場合準備，快速預約，讓專業為您服務。</p>
                <button type='button' className='btn-custom btn-custom-dot text-start position-relative'>立即預約
                <i class="bi bi-arrow-right bg-white p-8 rounded-1"></i></button>
              </div>
            </div>
            </div>
        </div>
      </section>

      <section className="comments comments-bg position-relative pb-lg-80 pb-40 overflow-hidden" >
        <span className='comments-txt'></span>
        <div className="container p-lg-80 py-40" style={{backgroundColor:'#FCF5F3'}}>
          <div className="row">
            <div className="col-lg-4 col-12 mb-36 mb-lg-0">
              <h2 className='position-relative comments-deco comments-deco-line'>她們的感受，<br/>你也值得體驗！</h2>
            </div>
            <div className="col-lg-8 col-12">
              <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active rounded-circle" style={{width:'8px',height:'8px'}}></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"className=' rounded-circle' style={{width:'8px',height:'8px'}} ></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row row-cols-lg-2 row-cols-1 g-24">
                    <div className="col">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={emma} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Emma</b> 職場女性</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>第一次體驗就愛上了！專業的服務和溫暖的態度讓我每次來都充滿期待。</p>
                        </div>
                      </div>
                      
                      
                      <div className="col">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={sophia} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Sophia</b> 美容愛好者</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>臉部清潔後，肌膚變得明亮又透氣，朋友都問我用了什麼保養品！</p>
                        </div>
                      </div>
                      <div className="col d-none d-lg-block">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={ivy} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Ivy</b> 創業者</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>環境非常乾淨，氛圍溫馨放鬆，美容護膚的過程簡直是享受！</p>
                        </div>
                      </div>
                      <div className="col d-none d-lg-block ">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={cindy} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Cindy</b> 上班族</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>霧眉效果自然，根本省下每天畫眉毛的時間，素顏也超有自信！</p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div class="carousel-item">
                  <div className="row row-cols-lg-2 row-cols-1 g-24">
                      <div className="col">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={emma} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Emma</b> 職場女性</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>第一次體驗就愛上了！專業的服務和溫暖的態度讓我每次來都充滿期待。</p>
                        </div>
                      </div>
                      
                      <div className="col">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={sophia} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Sophia</b> 美容愛好者</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>臉部清潔後，肌膚變得明亮又透氣，朋友都問我用了什麼保養品！</p>
                        </div>
                      </div>
                      <div className="col  d-none d-lg-block">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={ivy} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Ivy</b> 創業者</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>環境非常乾淨，氛圍溫馨放鬆，美容護膚的過程簡直是享受！</p>
                        </div>
                      </div>
                      <div className="col  d-none d-lg-block">
                        <div className='p-36 bg-white'>
                          <div className='rounded-2 d-flex align-items-center p-24' style={{backgroundColor:'#F5DCD780'}}>
                            <div className='me-16'><img src={cindy} width={48} height={48} alt="" /></div>
                            <div>
                              <p><b>Cindy</b> 上班族</p>
                              <div>
                                <span>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                  <i class="me-4 bi bi-star-fill"></i>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className='py-12 px-16'>霧眉效果自然，根本省下每天畫眉毛的時間，素顏也超有自信！</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="visually-hidden">Next</span>
                </button>
              </div>


              
          
            </div>
          </div>
        </div>

      </section>




    </>
  )
};


export default Home;