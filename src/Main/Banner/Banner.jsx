import './banner.scss';

const Banner = () => {
  return (
    <section className='banner'>
    <div className="banner__container container">
      <div className="banner__text">
        <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className='banner__info'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
        <button>Shop Now</button>
        <div className="banner__numbers">
            <div className="banner__card">
                <h3>200+</h3>
                <p>International Brands</p>
            </div>
            <div className="banner__card">
                <h3>2,000+</h3>
                <p>High-Quality Products</p>
            </div>
            <div className="banner__card">
                <h3>30,000+</h3>
                <p>Happy Customers</p>
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Banner
