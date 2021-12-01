import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';


function Footer() {

  window.addEventListener("scroll", showWhatsappButton);

  function showWhatsappButton() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    showOn = 50,
    buttonElement = document.getElementById("whatsapp-icon");

    if (distanceY > showOn) {
      buttonElement.classList.add("display");
    } else {
      buttonElement.classList.remove("display");
    }
  };

  return (
    <footer className='bg--light-grey'>
      <a target='_blank'ty href="https://wa.me/554791515234" id="whatsapp-icon" className='shadow-2'>
        <i class="fab fa-whatsapp"></i>
      </a>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.537323684257!2d-48.64222938440911!3d-26.981547502578376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8cb8aa79ba3c9%3A0x581d0da1d710c19f!2sCred%20Estados%20Empr%C3%A9stimos%20Consignados!5e0!3m2!1spt-BR!2sbr!4v1637241714308!5m2!1spt-BR!2sbr" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
      <div className="container">
        <div className="logo-social">
          <img src={process.env.PUBLIC_URL + '/images/logo-completa.png'} alt="Logo" />
          <div className="social-icons">
            <a target='_blank' href="https://wa.me/554791515234"><i class="fab fa-whatsapp"></i></a>
            <a target='_blank' href="https://www.facebook.com/credestados"><i class="fab fa-facebook-f"></i></a>
            <a target='_blank' href="https://www.instagram.com/credestados/"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="column navigation">
          <h3>Navegar</h3>
          <ul>
            <li>
              <Link to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link to='emprestimo'>
                Empréstimo
              </Link>
            </li>
            <li>
              <Link to='fgts'>
                FGTS
              </Link>
            </li>
            <li>
              <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLScBeveHxeglbvr38am6FIliXA5IYSQ2Kp4JlXzr6AdWBFrYHw/viewform">
                Trabalhe conosco
              </a>
            </li>
            <li>
              <a target='_blank' href="https://credestados.stormfin.com.br/">
                Colaborador
              </a>
            </li>
          </ul>
        </div>

        <div className="column icons">
          <h3>Entre em contato</h3>
          <ul>
            <li>
              <a target='_blank' href='mailto:contato@credestados.com.br'>
                <i class="fas fa-envelope"/> 
                <span>contato@credestados.com.br</span>
              </a>
            </li>
            <li>
              <a target='_blank' href='tel:(47) 3268-4843'>
                <i class="fas fa-phone-alt"></i> 
                <span>(47) 3268-4843</span>
              </a>
            </li>
            <li>
              <a target='_blank' href='https://www.google.com/maps?ll=-26.981552,-48.640041&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6349246038411362719'>
                <i class="fas fa-map-marker-alt"></i>
                <span>
                  Av. do Estado Dalmo Vieira, 2985<br/>
                  Centro, Balneário Camboriú - SC
                </span>   
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
