import './arrivals.scss';
import tShirt from './images/Frame 32.png';
import jeans from './images/Frame 33.png';
import shirt from './images/Frame 34.png';
import tshirt2 from './images/Frame 38.png';
import rating3 from './images/Frame 10.png';
import rating4 from './images/Frame 10 (1).png';

const Arrivals = () => {
  return (
    <section className='arrivals'>
        <div className="arrivals__container container">
        <h1>NEW ARRIVALS</h1>
        <div className="arrivals__box">
            <div className="arrivals__clothes">
                <img src={tShirt} alt="" />
                <h4>T-shirt with Tape Details</h4>
                <div className="arrivals__rating">
                    <img src={rating4} alt="" />
                    <span>4.5/5</span>
                </div>
                <span className='arrivals__price'>$120</span>
            </div>
            <div className="arrivals__clothes">
                <img src={jeans} alt="" />
                <h4>Skinny Fit Jeans</h4>
                <div className="arrivals__rating">
                    <img src={rating3} alt="" />
                    <span>3.5/5</span>
                </div>
                <span className='arrivals__price2'>$240</span>
            </div>
            <div className="arrivals__clothes">
                <img src={shirt} alt="" />
                <h4>Checkeret Shirt</h4>
                <div className="arrivals__rating">
                    <img src={rating4} alt="" />
                    <span>4.5/5</span>
                </div>
                <span className='arrivals__price'>$180</span>
            </div>
            <div className="arrivals__clothes">
                <img src={tshirt2} alt="" />
                <h4>Sleeve Striped T-shirt</h4>
                <div className="arrivals__rating">
                    <img src={rating4} alt="" />
                    <span>4.5/5</span>
                </div>
                <span className='arrivals__price4'>$130</span>
            </div>
        </div>
        <div className="arrivals__btn">
            <button>View All</button>
        </div>
        </div>
    </section>
  )
}

export default Arrivals
