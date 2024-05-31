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

import { Head0 } from './sprites/head';
import { Hat2 } from './sprites/hats';
import { Body2 } from './sprites/body';
import { Arme2 } from './sprites/armes';
import { Scape3 } from './sprites/scapes';

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
        <div style = ${useStyle({ backgroundColor : '#f9ecb4' , display : 'grid' })} >
          ${Scape3()}
          ${Arme2()}
          ${Body2()}
          ${Head0()}
          ${Hat2()}
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