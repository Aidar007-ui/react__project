import './selling.scss';
import shirt from './images/Frame 32 (1).png';
import tShirt from './images/Frame 33 (1).png';
import shorts from './images/Frame 34 (1).png';
import jeans from './images/Frame 38 (1).png';
import rating5 from './images/Frame 10 (2).png';
import rating4 from './images/Frame 10 (3).png';
import rating3 from './images/Frame 10 (4).png';
import rating45 from './images/Frame 10 (5).png';

const Selling = () => {
  return (
    <section className='selling'>
      <div className="selling__container container">
        <div className="selling__border"></div>
      <h1>TOP SELLING</h1>
        <div className="selling__box">
            <div className="selling__clothes">
                <img src={shirt} alt="" />
                <h4>Vertical Striped Shirt</h4>
                <div className="selling__rating">
                    <img src={rating5} alt="" />
                    <span>5.0/5</span>
                </div>
                <span className='selling__price1'>$212</span>
            </div>
            <div className="selling__clothes">
                <img src={tShirt} alt="" />
                <h4>Courage Grapchic T-shirt</h4>
                <div className="selling__rating">
                    <img src={rating4} alt="" />
                    <span>4.0/5</span>
                </div>
                <span className='selling__price'>$145</span>
            </div>
            <div className="selling__clothes">
                <img src={shorts} alt="" />
                <h4>Loose Fit Bermuda Shorts</h4>
                <div className="selling__rating">
                    <img src={rating3} alt="" />
                    <span>3.0/5</span>
                </div>
                <span className='selling__price'>$80</span>
            </div>
            <div className="selling__clothes">
                <img src={jeans} alt="" />
                <h4>Faded Skinny Jeans</h4>
                <div className="selling__rating">
                    <img src={rating45} alt="" />
                    <span>4.5/5</span>
                </div>
                <span className='selling__price'>$210</span>
            </div>
        </div>
        <div className="selling__btn">
            <button>View All</button>
        </div>
      </div>
    </section>
  )
}

export default Selling
