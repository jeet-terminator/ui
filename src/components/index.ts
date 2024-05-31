import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG } from "@lithium-framework/core-dom/directives";
import { controls } from "./controls";

export function popUpWindow(){
  return html`<div name='pop-up-windows' style=${useStyle({
    position: "absolute",
    backgroundColor: 'red',
    display: "grid",
    gridTemplateRows: "max-content min-content",
    right: '22%',
    bottom: '25%',
  })}>
    <video width="640" height="360" controls>
        <source src="./ressources/video/blingbling.mp4" type="video/mp4">
        Votre navigateur ne supporte pas la balise vidéo.
    </video>
    ${controls()}
  </div>`;
}