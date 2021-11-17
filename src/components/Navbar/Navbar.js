import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Button from '../Button/Button';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar shadow-3">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active shadow-3' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Quem somos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Diferenciais
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Empréstimo
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                FGTS
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link' onClick={closeMobileMenu}>
                Parceiros
              </Link>
            </li>
            <Button buttonStyle='btn--outline'> <i className='fab fa-whatsapp'/> Fale conosco</Button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
