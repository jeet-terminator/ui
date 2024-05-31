import { html } from '@lithium-framework/core-dom';
import { useStyle } from '@lithium-framework/core-dom/directives';

import { Icon } from '../icon';

import GaucheIcon from '../../ressources/Gauche.svg';
import DroiteIcon from '../../ressources/Droite.svg';
import HatIcon from '../../ressources/Icon hat.svg';
import BodyIcon from '../../ressources/Icon body.svg';
import ArmeIcon from '../../ressources/Icon arme.svg';
import ImgIcon from '../../ressources/Icon img.svg';
import RessetIcon from '../../ressources/reset.svg';

// import Head0 from '../../ressources/perso/head.svg';

// import Body0 from '../../ressources/perso/body/body0.svg';
// import Body1 from '../../ressources/perso/body/body1.svg';
// import Body2 from '../../ressources/perso/body/body2.svg';
// import Body3 from '../../ressources/perso/body/body3.svg';
// import Body4 from '../../ressources/perso/body/body4.svg';

// import Arme0 from '../../ressources/perso/arme/arme0.svg';
// import Arme1 from '../../ressources/perso/arme/arme1.svg';
// import Arme2 from '../../ressources/perso/arme/arme2.svg';
// import Arme3 from '../../ressources/perso/arme/arme3.svg';
// import Arme4 from '../../ressources/perso/arme/arme4.svg';
// import Arme5 from '../../ressources/perso/arme/arme5.svg';
// import Arme6 from '../../ressources/perso/arme/arme6.svg';
// import Arme7 from '../../ressources/perso/arme/arme7.svg';
// import Arme8 from '../../ressources/perso/arme/arme8.svg';
// import Arme9 from '../../ressources/perso/arme/arme9.svg';
// import Arme10 from '../../ressources/perso/arme/arme10.svg';
// import Arme11 from '../../ressources/perso/arme/arme11.svg';
// import Arme12 from '../../ressources/perso/arme/arme12.svg';
// import Arme13 from '../../ressources/perso/arme/arme13.svg';
// import Arme14 from '../../ressources/perso/arme/arme14.svg';
// import Arme15 from '../../ressources/perso/arme/arme15.svg';
// import Arme16 from '../../ressources/perso/arme/arme16.svg';
// import Arme17 from '../../ressources/perso/arme/arme17.svg';

// const _assets = {
//   head : {
//     0 : Head0
//   },
//   body : {
//     0 : Body0,
//     1 : Body1,
//     2 : Body2,
//     3 : Body3,
//     4 : Body4,
//   },
//   arme : {
//     0 : Arme0,
//     1 : Arme1,
//     2 : Arme2,
//     3 : Arme3,
//     4 : Arme4,
//     5 : Arme5,
//     6 : Arme6,
//     7 : Arme7,
//     8 : Arme8,
//     9 : Arme9,
//     10 : Arme10,
//     11 : Arme11,
//     12 : Arme12,
//     13 : Arme13,
//     14 : Arme14,
//     15 : Arme15,
//     16 : Arme16,
//     17 : Arme17,
//   }
// }

export function Slider(props:{ type : 'hat' | 'body' | 'arme' | 'img' }){

  let assets = {
    hat : HatIcon,
    body : BodyIcon,
    arme : ArmeIcon,
    img : ImgIcon
  }

  return html`<div style = ${useStyle({ display : 'inline-flex' , gap : '20px' , alignItems : 'center' , justifyContent : 'center' })}>
    ${Icon(GaucheIcon)}
    ${Icon(assets[props.type])}
    ${Icon(DroiteIcon)}
    ${Icon(RessetIcon)}
  </div>`

}

export function Factory(){

  return html`<div style = ${useStyle({ display : 'grid' , gridTemplateColumns : '30% 1fr 10%' , padding : '10% 0' })} >
    <div style = ${useStyle({ backgroundColor : 'white' , gridColumn : 2 , display : 'grid' , gridTemplateColumns : '1fr 1fr' })} >
      <section style = ${useStyle({ display : 'grid' , padding : "20px" })} >
        <div style = ${useStyle({ backgroundColor : '#f9ecb4' })} >

        </div>
      </section>
      <section style = ${useStyle({ display : 'grid' , alignItems : 'center' })} >
        <div style = ${useStyle({ display : 'grid' , gridAutoRows : 'min-content' , alignItems : 'center' , gap : "40px" })}>
          ${Slider( { type : 'hat' } )}
          ${Slider( { type : 'body' } )}
          ${Slider( { type : 'arme' } )}
          ${Slider( { type : 'img' } )}
        </div>
      </section>
    </div>
  </div>`

}