const scriptHls = document.createElement('script');
    scriptHls.src = 'https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js';
 document.head.appendChild(scriptHls);
const scriptHl = document.createElement('script');
    scriptHl.textContent =`var player = new Clappr.Player({source: h.value, parentId: "#barra1"});`
 document.body.appendChild(scriptHl);

 function D(){
 document.body.style.backgroundColor = 'white';
var player = new Clappr.Player({source: h.value, parentId: "#barra1"});barra1.volume=1;barra1.muted=true;
console.err=null;



    const video = document.querySelector("video");

const assetURL = video.src;

const mimeCodec = 'application/vnd.apple.mpegurl; codecs="avc1.640028,mp4a.40.2"';
let mediaSource;
console.clear();
if ("MediaSource" in window && MediaSource.isTypeSupported(mimeCodec)) {
  mediaSource = new MediaSource();
  console.log(mediaSource.readyState); 
  video.src = URL.createObjectURL(mediaSource);
  mediaSource.addEventListener("sourceopen", sourceOpen);
} else {
  console.error("Unsupported MIME type or codec: ", mimeCodec);
}

function sourceOpen() {
  console.log(this.readyState); 
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
  fetchAB(assetURL, (buf) => {
    sourceBuffer.addEventListener("updateend", () => {
      mediaSource.endOfStream();
      video.play();
      console.log(mediaSource.readyState); 
    });
    sourceBuffer.appendBuffer(buf);
  });
}

function fetchAB(url, cb) {
  console.log(url);
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  xhr.responseType = "arraybuffer";
  xhr.onload = () => {
    cb(xhr.response);
  };
  xhr.send();
}
}

let barra = document.createElement("div");
barra.style.display='block';
barra.id='barra';
document.body.appendChild(barra);
let btnrun = document.createElement("button");
    btnrun.textContent = " ⚡ PLAY"
    btnrun.style = "margin:5px; padding:10px 20px; background:blue; color:white; border:none; border-radius:4px; font-weight:bold;";
     btnrun.onclick =()=>{D();};
     barra.appendChild(btnrun);
let btnrun1 = document.createElement("button");
    btnrun1.textContent = " ⚡ FUll"
    btnrun1.style = "margin:5px; padding:10px 20px; background:blue; color:white; border:none; border-radius:4px; font-weight:bold;";
     btnrun1.onclick =()=>{barra1.webkitRequestFullscreen();barra1.play();barra1.volume=1;barra1.muted=false;};
     barra.appendChild(btnrun1);
  let h = document.createElement("input");
    h.value = window.location;
    h.id = 'h';
    h.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    barra.appendChild(h);  
    let barra1 = document.createElement("div");
barra1.style.display='block';
barra1.id='barra1';
barra.appendChild(barra1);
javascript:(function(){function cargarMiScript(){let s=document.createElement('script');s.src='https://sacanario88.github.io/Wey/Js/ini2.js';document.head.appendChild(s);}cargarMiScript();})();