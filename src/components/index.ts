import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG } from "@lithium-framework/core-dom/directives";
//import video from '../ressources/video/blingbling.mp4';

export function popUpWindow(){
  return html`<div name='pop-up-windows' style=${useStyle({
    backgroundColor: "red",
    position: 'absolute',
    
  })}>
    <h3>Pop up</h3>
    <video width="640" height="360" controls>
        <source src="./public/ressources/video/blingbling.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la balise vidéo.
    </video>
  </div>`;
}