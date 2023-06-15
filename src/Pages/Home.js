/* import */

import picmain1 from '../Img/PicMain1.png';
import picmain2 from '../Img/PicMain2.png';
import picmain3 from '../Img/PicMain3.png';
import picmain4 from '../Img/PicMain4.png';
import actualityexemple from '../Img/actuality-exemple.png';
import arrowmore from '../Img/arrowmore.svg';
import logovidjovi from '../Img/logo-vidjovi.png';
import logoncb from '../Img/logo-ncb.png';
import logonISFES from '../Img/logo-ISFES.png';
import logonchrysalide from '../Img/logo-chrysalide.png';
import '../font.css';
import '../Fonction.js';
import Footer from '../Component/Footer.js'
import './Home.css'

export default function Home(){
    {/* Constantes */}
        
    const ActualityPicture = actualityexemple;
    const Picture3 = picmain3;
    const Picture4 = picmain4;
    const partner1 = { photo: logovidjovi, titre:'VIDJOVI "L\'enfant digne"', description :'Association française dont le siège est à Suze-la-Rousse, dont le but est de soutenir l\'éducation au Bénin et de prévenir l\'abandon et l\'exploitation des enfants.'};
    const partner2 = { photo: logoncb, titre:'NOUVELLES CHANCES BENIN ONG', description :'L\'ONG ayant notamment pour mission la prise en charge d\'apprenants handicapés intellectuels en milieux scolaires nous intervenons auprès d\'elle lors des manifestations qu\'elle organise.Ce fut ainsi le cas lors des 7 SOCIAL DAYS 2022.'};
    const partner3 = { photo: logonISFES, titre:'Institut Supérieur de Formation des Educateurs Spécialisés', description :'Par notre partenariat nous disposons d\'un local au sein de l\'établissement, ce qui nous permet d\'avoir un contact direct avec les futurs professionnels. Ces derniers ont accès au matériel dont dispose l\'association et peuvent participer aux divers groupes de travail et activités proposés par l\'association.'};
    const partner4 = { photo: logonchrysalide, titre:'ONG la CHRYSALIDE Bénin', description :'Cette organisation à but non lucratif est spécialisée dans l\'accompagnement des enfants et jeunes handicapés intellectuels depuis 1998. Nous soutenons ses actions et réciproquement'};
    const partnersline1 = {partner1 : partner1, partner2 : partner2};
    const partnersline2 = {partner3 : partner3, partner4 : partner4};

    const nousconnaitres ="nous connaître";
  
    return(
    <>      
  
        {/* Première partie */}       
      
        <div className='white-page-container-right-anchor'>

              <div className='information-container'>

              <p className='title-information-black'>Se <span className='pink-color'> battre</span> pour les <span className='pink-color'>autres</span>, plus qu'une <span className='pink-color'>vocation</span>.</p>

                  <p className='text-information-black'>Nous intervenons au Bénin car il est urgent de changer le regard sur le handicap, et plus encore sur le handicap invisible. 
                  Avoir un enfant porteur de handicap au sein de sa famille est considéré comme honteux, voire porteur de malédiction. 
                  E’Kollectif a pour mission de développer l’accompagnement de ces enfants, de participer à la veille des professionnels et de  sensibiliser les familles et la population.
                  </p>

                  <MoreButton data = {nousconnaitres}/>

              </div>

              <div className='anchor-right-picture-container'>

                  <div className='center-picture-container'>

                      <img className='picture' src={picmain1}/>
                      <p className='picture-description-black'>Description :</p>                     

                  </div>                   

              </div>

          </div>      

        {/* Deuxième partie */}

        <div className='black-page-container'>

          <div className='picture-container-left'>

            <div className='center-picture-container'>

                <img className='picture' src={picmain2}/>

            </div>

          </div>

          <div className='information-container'>

            <p className='title-information-white'>Qui sommes-<span className='yellow-color'> nous</span>?</p>

            <p className='text-information-white'>E’Kollectif est une association loi 1901 à but non lucratif, d’intérêt général, créée en août 2020 pour apporter une aide aux enfants porteurs de handicap en Afrique, et notamment au Bénin.</p>

            <p className='text-information-white'>Si la gestion des activités se fait depuis la France E’Kollectif dispose au Bénin, à Cotonou, d’un local géré par deux responsables salariés de l’association.</p>

          </div>        
        
        </div>

         {/* Troisième partie */}  

        <div className='white-page-container'>

          <div className='actuality-main-container'>

            <div className='principal-actuality-card'>

              <p className='title-information-black'>Les <span className='green-color'>Actualités</span> E'kollectif.</p>

              <img className='main-actuality-picture' src={actualityexemple}/>      

              <div className='date-more-container'>

                <p className='date-actuality'>Le 25 Mars 2023</p>

                <img src={arrowmore} className='more-actuality'/>                
                
              </div>     

              <p className='title-main-actuality'>Titre Actualité</p>

              <p className='text-main-actuality'>lorem ipsum grosse inondation dans le sud de la france et du bénin causé par thor en personne lorem ipsum grosse 
                inondation dans le sud de la france et du bénin causé par thor en personne du bénin causé par thor en personne</p>  
              
            </div>

          </div>

          <div className='actuality-main-container'>

            <div className='old-actuality-card'>

              <img src={actualityexemple} className='old-actuality-picture' />

              <div className='old-actuality-information'>

                <div className='old-date-more-container'>

                  <p className='old-date-actuality'>Le 25 Mars 2023</p>

                  <img src={arrowmore} className='old-more-actuality'/> 

                </div>

                <p className='old-title-main-actuality'>Titre Actualité</p>         

                 <p className='old-text-main-actuality'>lorem ipsum grosse inondation dans le sud de la france et du bénin causé par thor en personne lorem ipsum grosse 
                inondation dans le sud de la france et du bénin causé par thor en personne du bénin causé par thor en personne</p>      
                
              </div>  

            </div> 


            <div className='old-actuality-card'>

              <img src={actualityexemple} className='old-actuality-picture' />

              <div className='old-actuality-information'>

                <div className='old-date-more-container'>

                  <p className='old-date-actuality'>Le 25 Mars 2023</p>

                  <img src={arrowmore} className='old-more-actuality'/> 

                </div>

                <p className='old-title-main-actuality'>Titre Actualité</p>         

                 <p className='old-text-main-actuality'>lorem ipsum grosse inondation dans le sud de la france et du bénin causé par thor en personne lorem ipsum grosse 
                inondation dans le sud de la france et du bénin causé par thor en personne du bénin causé par thor en personne</p>      
                
              </div>  

            </div>              

          </div>


          

        </div>
       
    </>         

    );
} 

function MoreButton(props){

  const data = props.data

  return(
    <button className='more-button'>
      <p className='more-button-text'>{data}</p>
    </button>

  );
}

function MoreButtonWhite(){
  return(
    <button className='more-button-white'>
      <p className='more-button-text-white'>En savoir plus</p>
    </button>

  );
}