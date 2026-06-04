// 🟢 Función 1 (La que empieza todo)
function funcionUno() {
    console.log("Ejecutando la Función 1 ✅");
    
    // ⏱️ AQUÍ ES DONDE LLAMAMOS A LA SEGUNDA CON RETARDO
    // El número son milisegundos: 1000 = 1 segundo, 3000 = 3 segundos... ¡pon el que quieras!
 javascript:(function() {
   
    document.querySelectorAll('link[rel="stylesheet"], style, img, iframe, video, a, span, div').forEach( hoja => {
        hoja.remove();
    });                      })();   
    setTimeout( funcionDos, 2000 ); // <- Llama a funcionDos después de 2 segundos
}

// 🟡 Función 2 (La que se llama después del tiempo)
function funcionDos() {
    console.log("Ejecutando la Función 2 ⏳");
    
    // (Aquí dentro podrías llamar a la 3ª si quisieras, con otro tiempo o directamente)
  javascript:(function(){function cargarMiScript(){let s=document.createElement('script');s.src='https://sacanario88.github.io/Wey/Js/ini.js';document.head.appendChild(s);}cargarMiScript();})();  
    funcionTres(); // Por ejemplo, esta la llamo yo ya directa sin esperar
}

// 🟠 Función 3
function funcionTres() {
    console.log("Ejecutando la Función 3 🔶");
 javascript:(function(){function cargarMiScript(){
const video = document.querySelector('video');
if (video) {
    video.src=tv1.value;
    video.play();
}}cargarMiScript();})();   
    
    funcionCuatro();
}

// 🔴 Función 4
function funcionCuatro() {
    console.log("Ejecutando la Función 4 🔴");
  javascript:(function(){function cargarMiScript(){
 const videoElement = document.querySelector('video');
if (videoElement.requestFullscreen) {
  videoElement.requestFullscreen();
} else if (videoElement.webkitRequestFullscreen) {
  videoElement.webkitRequestFullscreen();
} else if (videoElement.msRequestFullscreen) {
  videoElement.msRequestFullscreen();
}}cargarMiScript();})();  
}

// 🚀 Para probarlo, solo tienes que llamar a la primera
funcionUno();
