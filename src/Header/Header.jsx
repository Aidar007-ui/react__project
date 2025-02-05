import './header.scss'
import logo from './image/SHOP.CO.png'
import cart from './image/Frame (9).png'
import user from './image/Frame (10).png'


const Header = () => {
  return (
    <header className='header'>
      <div className="header__top">
        <p>Sign up and get 20% off to your first order. <a href="">Sign Up Now</a></p>
      </div>
      <div className="header__menu">
        <div className="container">
            <img src={logo} alt="SHOP.CO"/>
            <ul className='header__lists'>
                <li>Shop</li>
                <li>On sale</li>
                <li>New arrivals</li>
                <li>Brands</li>
            </ul>
            <input type="text" placeholder='Search for products...'/>
            <img src={cart} alt="cart" />
            <img src={user} alt="user" />
        </div>
      </div>
    </header>
  )
}

export default Header
