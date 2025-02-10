import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <nav className='navbar'>
      <Link to='/'><i className="fa-solid fa-house" style={{fontSize: '27px', color: 'white', marginRight: '25px'}}></i></Link>
      <Link to='/cart'><i className="fa-solid fa-cart-shopping" style={{fontSize: '27px', color: 'white'}}></i></Link>
      </nav>
    </div>
  )
}

export default Header;