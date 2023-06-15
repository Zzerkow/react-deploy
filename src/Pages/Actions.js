/* import */

import Footer from '../Component/Footer.js'
import './Actions.css'
import '../font.css';
import ActionPic1 from '../Img/Action_Pic1.png';
import ActionPic2 from '../Img/Action_Pic2.png';
import ActionPic3 from '../Img/Action_Pic3.png';
import ActionPic4 from '../Img/Action_Pic4.png';

export default function Actions(){
    {/* Constantes */}

    return(
        <>
            {/* Première partie */}

            <div className='white-page-container-action'>

                <div className='information-container'>

                    <p className='title-information-black'>Accompagnement des<span className='pink-color'> Enfants</span>.</p>

                    <p className='text-information-black'>La plupart les enfants sont accompagnés à domicile or il est indispensable qu’ils aient des temps collectifs adaptés. 
                    C’est dans ce cadre qu’E’Kollectif propose, pendant les vacances de printemps et d’été une semaine Kollective.  
                    L’objectif est évidemment de développer la socialisation mais également de favoriser les émergences en vue d’une inclusion scolaire, 
                    et de multiplier les regards professionnels autour de chacun d’entre eux. 
                    </p>

                    <MoreButton/>

                </div>

                <div className='picture-container'>

                    <div className='center-picture-container'>

                        <img className='picture' src={ActionPic1}/>
                        <p className='picture-description-black'>Description :</p>

                    </div>

                </div>

            </div>

            {/* Deuxième partie */}

            <div className='black-page-containe-left-anchor'>

                <div className='anchor-left-picture-container'>

                    <div className='right-picture-container'>

                        <img className='picture' src={ActionPic2}/>
                        <p className='picture-description-white'>Description :</p>

                    </div>

                </div>

                <div className='information-container'>

                    <p className='title-information-white'>Accompagnement des<span className='yellow-color'> professionnels</span>.</p>

                    <p className='text-information-white'>E’Kollectif participe à la veille des éducateurs spécialisés et autres professionnels de la santé. 
                    Une fois par mois un groupe de travail se réunit. La préparation se fait à partir d’un thème choisi par les participants du mois précédent. 
                    La Présidente d’E’Kollectif fournit les éléments soutenant le sujet (vidéos,  support écrit…) aux responsables locaux qui préparent alors l’organisation de la rencontre. 
                    </p>

                    <MoreButtonWhite/>

                </div>

            </div>

            {/* Troisième partie */}

            <div className='white-page-container-right-anchor'>

                <div className='information-container'>

                    <p className='title-information-black'>La <span className='blue-color'>sensibilisation</span> est la <span className='blue-color'>clé</span> de la <span className='blue-color'>prévention</span>.</p>

                    <p className='big-text-information-black'>Dans la société béninoise le fait d’avoir un enfant porteur de handicap est encore souvent considéré comme honteux, voire porteur de malédiction. 
                    De ce fait les enfants, surtout ceux porteur d’un handicap invisible, sont cachés, exclus de la société. Parfois même, faute d’informations et de soutien,
                    les familles vont chercher de l’aide dans les traditions vaudous, et cela peut être fatal à l’enfant. Aussi, afin de sensibiliser la population des journées d’information sont organisées
                    </p>

                    <p className='big-text-information-black'>La journée mondiale de sensibilisation à l’autisme est un moment fort de l’année qui permet de toucher un large public. 
                    E’Kollectif participe a cette occasion à l’émission radio « Mon handicap et moi » diffusée sur ADO FM, organise une caravane à travers la ville, avec une halte dans un lieu stratégique permettant à la population interpelée de se renseigner à la fois sur l’autisme mais aussi sur les possibilités de prise en charge,
                    et un article paraît dans la presse écrite.
                    </p>               

                </div>

                <div className='anchor-right-picture-container'>

                    <div className='center-picture-container'>

                        <img className='picture' src={ActionPic3}/>
                        <p className='picture-description-black'>Description :</p>                        

                    </div>                   

                </div>

            </div>      

            {/* Quatrième partie */}

            <div className='black-page-containe-left-anchor'>

                <div className='anchor-left-picture-container'>

                    <div className='right-picture-container'>

                        <img className='picture' src={ActionPic4}/>
                        <p className='picture-description-white'>Description :</p>

                    </div>

                </div>

                <div className='information-container'>
                   
                    <p className='text-information-white'>Toujours lors de son séjour Nadège, notre Présidente, organise une rencontre avec les familles d’enfants porteurs de handicap. En 2022 le thème en a été « Famille et handicap » afin d’évoquer le soutien à la parentalité et la scolarisation et l’accompagnement spécialisé. 
                    En parallèle les responsables interviennent auprès de nos partenaires locaux lorsque ceux-ci organisent des manifestations.
                    </p>

                    <p className='text-information-white'>Ce fut le cas avec Nouvelles Chances Bénin ONG lors de la semaine  « 7 Social days » ou pour notre Présidente, 
                    lors de son invitation pour intervenir en  visioconférence à l’occasion de la journée de l’autisme auprès de  l’Association Culturelle et Educative Star Plus – ACESP ONG.
                    </p>



                </div>

            </div>

            <Footer />


        </>
    );
}


function MoreButton(){
    return(
      <button className='more-button'>
        <p className='more-button-text'>En savoir plus</p>
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