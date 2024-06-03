import { html , render } from "@lithium-framework/core-dom";
import { useStyle , unsafeSVG, useEffect } from "@lithium-framework/core-dom/directives";
import { controls } from "./controls";
import { Icon } from "./icon";
import iconBuy from '../ressources/Buy.svg';
import iconFactory from '../ressources/Factory.svg';
import iconSkip from '../ressources/skip.svg';
import videojs from 'video.js';
import popUpWindowCss from './style.module.css'
import videoLecterCss from './style.module.css'
import 'video.js/dist/video-js.css';

export function popUpWindow(){

  function onInit( target ){
    var player = videojs(target, {
      controls: 'false',
      autoplay: 'false',
    });

    function resizeScreen(){
  
      let width = window.innerWidth;
      let height = window.innerHeight;
      console.log({"screen_width": width, "screen_height": height})
      player.width(width);
      player.height(height);
      player.fluid(true)
      console.log(player.fluid_)
    }

    player.on('ready',()=>{
      console.log("ready")
    })

    target.addEventListener('mouseenter', (event) => {
      console.log('Mouse entered the target element');
      player.play();
      player.controls(true);
    });

    target.addEventListener('mouseleave', (event) => {
      player.pause();
    });

    target.addEventListener('click', (event) => {
      player.pause();
      player.controls(true);
      console.log(player.controls_)
    });


    window.addEventListener('resize', () => {
      resizeScreen();
    });

    target.parentNode.parentNode.children[1].addEventListener('click', (event) => {
      target.parentNode.setAttribute('style', 'display: none');
    });
    
  }

  

  return html`<div name='pop-up-windows' class=${popUpWindowCss} style=${useStyle({
    position: "absolute",
  })}>
    <video ${useEffect(onInit)} id="my-video" class="video-js" controls preload="auto"
      poster="MY_VIDEO_POSTER.jpg" data-setup="{}">
      <source src="./ressources/video/blingbling.mp4" type="video/mp4" />
      <source src="./ressources/video/blingbling.mp4.webm" type="video/webm" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a
          web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>
      </p>
    </video>
    <div name='btn-zone'>
      <div name='skip-btn'>
        ${Icon(iconSkip)}
      </div>
    </div>
  </div>`;

  
}

export function HomeContent(){
  return html`<div name='home-content' style=${useStyle({
    display: 'grid',
    gridTemplateRows: 'max-content max-content max-content',
    justifyContent: 'center',
    alignItems: 'center',
  })}>
    ${popUpWindow()}
    <div name='iconFactory' style=${useStyle({
      width: '250px'
    })}>${Icon(iconFactory)}</div>
    <div name='content' style=${useStyle({
      backgroundImage : 'url(ressources/Tete.svg)',
      backgroundRepeat: 'no-repeat',
      width: '250px',
      height: '250px'
    })}></div>
    <div name='iconBuy' style=${useStyle({
      width: '250px'
    })}>${Icon(iconBuy)}</div>
  </div>`;
}