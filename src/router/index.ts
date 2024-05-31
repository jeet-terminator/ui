import { Routes } from "@lit-labs/router";
// import { WebComponent } from "@lithium-framework/core";
import { html } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG , useEffect } from "@lithium-framework/core-dom/directives";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { popUpWindow } from '../components';
import { Factory } from '../components/factory';
import { Icon } from "../components/icon";

import XIcon from '../ressources/logo X.svg';
import TGIcon from '../ressources/logo TG.svg';

@customElement('main-application')
class Application extends LitElement{

  private _routes = new Routes(this, [
    {path: '/', render: () => popUpWindow()},
    {path: '/factory', render: () => Factory()},
    {path: '/about', render: () => html`<h1>About</h1>`},
  ]);

  constructor(){
    
    super();

    window.addEventListener('hashchange', () => {
      this.goto();
    });

    this.goto();

  }

  goto(){
    this._routes.goto( window.location.hash.replace('#' , '') || '/' )
  }

  render() {

    return html`
      <div
        style = ${useStyle({
          display : 'grid',
          height : '100%',
          width : '100%',
          position : 'fixed',
          gridTemplateRows : 'min-content 1fr',
          top : '0',
          left : '0'
        })}
      >
        <header style = ${useStyle({ display : 'grid' , padding : '5px 10px' , gap : '10px' })} >
          <div style = ${useStyle({ display : 'inline-flex' , gridColumn : 1 , gridRow : 1 })}>
            ${Icon( TGIcon )}
            ${Icon( XIcon )}
          </div>
          <div style = ${useStyle({ display : 'inline-flex' , gridColumn : 1 , gridRow : 1 , justifyContent : 'center' })}>
            <h1 style = ${useStyle({ padding : 0 , margin : 0 })} >jeeterminator</h1>
          </div>
        </header>
        <main
          style = ${useStyle({ 
            overflow : "hidden",
            backgroundImage : 'url(ressources/Fond.svg)',
            backgroundSize : "cover",
            display : 'grid'
          })}
        >
          ${this._routes.outlet()}
        </main>
        <footer>

        </footer>
      </div>
    `;
  }

}