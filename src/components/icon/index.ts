import { html } from '@lithium-framework/core-dom';
import { useStyle , unsafeSVG } from '@lithium-framework/core-dom/directives';

export function Icon( props:{ svg:string , height? : string , mousedown?:(event:MouseEvent) => void} ){

  return html`<div
    @mousedown=${props.mousedown || null}
    style = ${ useStyle({
      display : 'grid',
      height : props.height || "20px",
      aspectRatio : '1/1',
      alignItems: 'center',
      cursor : 'pointer'
    }) }
  >
    ${unsafeSVG( props.svg )}
  </div>`

}