javascript:(function(){function cargarMiScript(){
const video = document.querySelector('video');
if (video) {
    video.src=tv1.value;
    video.play();
}}cargarMiScript();})();

javascript:(function(){function cargarMiScript(){
 const videoElement = document.querySelector('video');
if (videoElement.requestFullscreen) {
  videoElement.requestFullscreen();
} else if (videoElement.webkitRequestFullscreen) {
  videoElement.webkitRequestFullscreen();
} else if (videoElement.msRequestFullscreen) {
  videoElement.msRequestFullscreen();
}}cargarMiScript();})();

