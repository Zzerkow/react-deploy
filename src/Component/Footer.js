import './Footer.css';
import picmain2 from '../Img/PicMain2.png';
import mail_icon from '../Img/Icon_mail.png';
import instagram_icon from '../Img/Instagram_Icon.svg';
import facebook_icon from '../Img/Facebook_Icon.svg';
import linkedin_icon from '../Img/Linkedin_Icon.svg';
import whatsapp_icon from '../Img/Whatsapp_Icon.svg';

function Footer(){
    return(
    
      <div className='footer'>
    
        {/* Partie Supérieure */}
        <div className='footer-up-container'>
    
          <div className='footer-up-name'>
    
            <img src={picmain2} className='footer-up-logo'/>
            <span className='footer-up-website-name'>E'Kollectif</span>
    
          </div>
    
          <div className='footer-up-links'>
    
            <span className='footer-up-links-span'>Mentions légales</span>
            <span className='footer-up-links-span'>RGPD</span>
            <span className='footer-up-links-span'>CGU/ Protection des données</span>
    
          </div>
    
          <div className='footer-up-social'>
    
            <span className='footer-up-social-title'>Contactez-nous</span>
            
            <div className='footer-up-social-logo-mail'>
    
              <img src={mail_icon} className='footer-up-social-icon'/>
              <span className='footer-up-social-mail'>E'Kollectif@gmail.com</span>
    
            </div>
    
            <div className='footer-up-social-network'> 
             
              <a href="https://www.instagram.com/ekollectif/" className='footer-up-social-network-instagram'>
              <img className='picture_social_network' src={instagram_icon}/>
              </a>
              <a href="https://www.facebook.com/E.kollectif/" className='footer-up-social-network-facebook'>
              <img className='picture_social_network' src={facebook_icon}/>
              </a>
              <a href="https://fr.linkedin.com/in/association-e-kollectif-016284217" className='footer-up-social-network-linkedin'>
              <img className='picture_social_network' src={linkedin_icon}/>
              </a>
              <a href="https://wa.me/+33677434628" className='footer-up-social-network-whatsapp'>
              <img className='picture_social_network' src={whatsapp_icon}/>
              </a>
    
            </div>
    
          </div>
    
        </div>
    
         {/* Partie inférieure */}
    
        <div className='footer-down'>
    
          <hr className='footer-down-line'/>
          <span className='footer-down-copyright'>Copyright EKA - 2023</span>
    
        </div>
    
      </div>
    
    );
    }

export default Footer;