import './brands.scss';
import versace from './images/Group (1).png';
import zara from './images/zara-logo-1 1.png';
import gucci from './images/gucci-logo-1 1.png';
import prada from './images/prada-logo-1 1.png';
import calvin from './images/Group (2).png';

const Brands = () => {
  return (
    <div className='brands'>
        <img src={versace} alt="" />
        <img src={zara} alt="" />
        <img src={gucci} alt="" />
        <img src={prada} alt="" />
        <img src={calvin} alt="" />
    </div>
  )
}

export default Brands
