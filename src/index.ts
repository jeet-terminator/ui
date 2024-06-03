import WebsiteBackground from './ressources/Fond.svg';
import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG } from "@lithium-framework/core-dom/directives";
import { popUpWindow } from './components';

import './index.css';
import './router';

render( html`<main-application></main-application>` , document.body );

