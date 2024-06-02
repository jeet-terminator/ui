import WebsiteBackground from './ressources/Fond.svg';
import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG } from "@lithium-framework/core-dom/directives";
import { popUpWindow } from './components';

import { DesignSystem } from "@microsoft/fast-foundation"
import { allComponents } from '@microsoft/fast-components';

DesignSystem.getOrCreate().register( allComponents );

import './index.css';
import './router';

render( html`<main-application></main-application>` , document.body );

// render( html`<div
//   style = ${useStyle({ 
//     position : "absolute", 
//     height : "100%",
//     width : '100%',
//     top : 0,
//     left : 0,
//     overflow : "hidden"
//   })} 
// >
//   ${popUpWindow()}
//   <div>${unsafeSVG(WebsiteBackground)}</div>
// </div>` , document.body );

