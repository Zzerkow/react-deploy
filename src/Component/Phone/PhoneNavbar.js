import heartIcon from '../../Img/heart-Icon.svg';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './PhoneNavbar.css'
import {useState} from "react";

const Navbar = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return(
        <div style={{width: '100%', height: '80px', position:"fixed", top:"0",}}>
            <nav>
                <TitleWebSite/>

                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>

                <div className='Phone-Container-Onglets'>
                <CustomLink to="/react-deploy" className='button-page'>Nous Connaître</CustomLink>
                <CustomLink to="/actions" className='button-page'>Nos Actions</CustomLink>
                <CustomLink to="/projets" className='button-page'>Nos Projets</CustomLink>
                <CustomLink to="/actualites" className='button-page'>Actualités</CustomLink>
                <CustomLink to="/engager" className='button-page'>S'engager</CustomLink>
                <DonationButton/>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar

function TitleWebSite(){
    return(
      <div className="title-navbar">
              <h1>E'Kollectif</h1>
              <p className="point-style">.</p>
      </div>
    );
}

function DonationButton() {

    const handleClic = () => {
        window.open('https://www.instagram.com', '_blank');
    };

return (
    <button onClick={handleClic} className='button-donation'>
    <img src={heartIcon} className="icon-don" />
    <p className="title-don">Faire un Don</p>  
    </button>    
);
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (          
        <Link className='button-page' to={to} {...props}>
          <span className={isActive ? "active" : ""}>{children}</span>
        </Link>
    )
  }
