/* import */

import Footer from '../Component/Footer.js'
import './Actions.css'
import '../font.css';
import ActionPic1 from '../Img/Action_Pic1.png';

export default function Actions(){
    {/* Constantes */}

    return(
        <>
            {/* Première page */}

            <div className='white-page-container'>

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