javascript:(function(){function cargarMiScript(){

const video = document.querySelector('video');
if (video) {
    video.remove();
}}cargarMiScript();})();
(function () {
  "use strict";
  const scriptHls = document.createElement("script");
    scriptHls.src = "https://vjs.zencdn.net/8.10.0/video.min.js";
  document.head.appendChild(scriptHls);
  const box = document.createElement("div");
  box.id='box'
  
   const video = document.createElement("video");
   video.id="f";
   video.controls=true;
   video.style=`width:100%; aspect-ratio:16/9; object-fit:cover; border:1px solid #222;`;
  box.appendChild(video);
  document.body.appendChild(box); 
   javascript:(function(){function cargarMiScript(){let s=document.createElement('script');s.src='https://sacanario88.github.io/Wey/Js/ini2.js';document.head.appendChild(s);}cargarMiScript();})();
 

                
})();
function C(){
tv1.value=window.location;
const player = videojs('f');
player.src({ type: 'application/x-mpegURL', src: tv1.value }); player.play();consola.focus();
                
 };   
 
function  F(){  
const player = videojs('f');       
player.requestFullscreen();                  
};                        