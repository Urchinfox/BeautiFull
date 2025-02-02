import banner1 from '@/assets/images/banner/banner1.png'
import banner2 from '@/assets/images/banner/banner2.png'
import banner3 from '@/assets/images/banner/banner3.png'
import bannerDeco from '@/assets/images/banner/bannerDeco.png'

const Home = () => {
  return (
    <>
      <section className='py-lg-60 py-40 position-relative'>
        <div className='banner-deco'></div>
        <div className='banner-deco2 position-absolute top-50 left-0 translate-middle-y d-lg-block d-none'><img src={bannerDeco} width={156} height={132} alt="" /></div>
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
    </>
  )
};
export default Home;