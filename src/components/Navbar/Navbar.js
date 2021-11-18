import React, {useState} from 'react';
import './Navbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-scroll';

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
      navElement.classList.add("shrink");
    } else {
      navElement.classList.remove("shrink");
    }
  };

  return (
    <>
      <nav className="navbar shadow-3" id='navbar'>
        <div className="navbar-container container">
        <Link
            to='hero'
            className='navbar-logo'
            onClick={closeMobileMenu}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
          >
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="Logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active shadow-3' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                to='quem-somos'
                className='nav-link'
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Quem somos
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='diferenciais'
                className='nav-link'
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Diferenciais
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='emprestimo'
                className='nav-link'
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Empréstimo
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='fgts'
                className='nav-link'
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                FGTS
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='parceiros'
                className='nav-link'
                onClick={closeMobileMenu}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                Parceiros
              </Link>
            </li>
            <Button type="button" onClick="location.href='https://whatsapp.com'" buttonStyle='btn--outline'> <i className='fab fa-whatsapp'/> Fale conosco</Button>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
