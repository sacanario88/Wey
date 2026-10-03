const scriptHls = document.createElement('script');
    scriptHls.src = 'http://rutv.pw/playerjs.11.11.5.js';
 document.head.appendChild(scriptHls);
const scriptHl = document.createElement('script');
    scriptHl.textContent =`var player = new Playerjs({id:"barra1", file:h.value,autoplay:1});`
 document.body.appendChild(scriptHl);

 function D(){
var player = new Playerjs({id:"barra1", file:h.value,autoplay:1});

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
     btnrun1.onclick =()=>{barra1.webkitRequestFullscreen();barra1.play();};
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