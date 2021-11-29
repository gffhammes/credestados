import React, {useState} from 'react';
import './Navbar.scss';
import Button from '../Button/Button';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  window.addEventListener("scroll", resizeNavOnScroll);

  function resizeNavOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn = 50,
    navElement = document.getElementById("navbar");

    if (distanceY > shrinkOn) {
      navElement.classList.add("shadow-3");
    } else {
      navElement.classList.remove("shadow-3");
    }
  };

  return (
    <>
      <nav className="navbar" id='navbar'>
        <div className="navbar-container container">
          <Link
            to='/'
            className='navbar-logo'
            onClick={closeMobileMenu}       
          >
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active shadow-3' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                activeClassName='active'
                to='/'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink
                activeClassName='active'
                to='emprestimo'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                Empréstimo
              </NavLink>
            </li>
            <li className='nav-item'>
            <NavLink
                activeClassName='active'
                to='fgts'
                className='nav-link'
                onClick={closeMobileMenu}
              >
                FGTS
              </NavLink>
            </li>
            <li className='nav-item'>
              <a target='_blank' href="/" className="nav-link">
                Trabalhe conosco
              </a>
            </li>
            <li className='nav-item'>
              <a target='_blank' href="https://credestados.stormfin.com.br/" className="nav-link">
                Colaborador
              </a>
            </li>
            <Button onClick={() => window.open("https://wa.me/554791515234", "_blank")} type="button" buttonStyle='btn--outline'> <i className='fab fa-whatsapp'/> Fale conosco</Button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
