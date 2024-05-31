import { html } from '@lithium-framework/core-dom';
import { useStyle , unsafeSVG } from '@lithium-framework/core-dom/directives';

export function Icon( svg:string ){

  return html`<div
    style = ${ useStyle({
      display : 'grid',
      minHeight : "50px",
      aspectRatio : '1/1',
      alignItems: 'center'
    }) }
  >
    ${unsafeSVG( svg )}
  </div>`

}