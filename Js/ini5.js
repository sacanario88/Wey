        (function(){
   let scriptHls = document.createElement("script");
    scriptHls.src = "https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js";
    document.head.appendChild(scriptHls);
    let scriptHls1 = document.createElement("script");
    scriptHls1.src = "http://rutv.pw/playerjs.11.11.5.js";
    document.head.appendChild(scriptHls1);
    
    let bot = document.createElement("div");
  bot.id="player";
  bot.style.width='100%';
 document.body.appendChild(bot); 
    
    let tv = document.createElement("input");
    tv.value = "https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3";
    tv.id = 'tv1';
    tv.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    document.body.appendChild(tv);

   
    let consola = document.createElement("textarea");
    consola.id = 'consola';
    consola.style = "width:90%; height:120px; margin:5px; padding:8px; border-radius:4px; background:#111; color:#0f0; font-family:monospace;";
    consola.placeholder = "👉 Escribe código aquí y pulsa Ejecutar...";
    document.body.appendChild(consola);
   function RUN() {
   
 tv1.value = window.location;  
 var player = new Clappr.Player({source: tv1.value, parentId: "#player"});
     
   } 
   
   function RUN1() {
   
   tv1.value = window.location;  
 var player = new Playerjs({id:"player", file:tv1.value,autoplay:1});
     
   } 
     
   

    
    
   
    function limpiar() {
        document.getElementById("tv1").value = "";window.location=tv1.value;
    }

  
    function ejecutar() {
        
        
        
        let codigo = document.getElementById("consola").value;
        try {
            if(codigo) eval(codigo);
        } catch (error) {
            alert("❌ ERROR: " + error.message);
        }
    }

    
    let btnEjecutar = document.createElement("button");
    btnEjecutar.textContent = "▶️ EJECUTAR / REPRODUCIR";
    btnEjecutar.style = "margin:5px; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnEjecutar.onclick = function(){ ejecutar(); }; // 👈 ASÍ NUNCA FALLA
    document.body.appendChild(btnEjecutar);

    
    let btnLimpiar = document.createElement("button");
    btnLimpiar.textContent = "🧹 LIMPIAR";
    btnLimpiar.style = "margin:5px; padding:10px 20px; background:#dc3545; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnLimpiar.onclick = function(){ limpiar(); }; // 👈 ASÍ NUNCA FALLA
    document.body.appendChild(btnLimpiar);
    
    
 
    let btnrun = document.createElement("button");
    btnrun.textContent = " ⚡ RUN"
    btnrun.style = "margin:5px; padding:10px 20px; background:blue; color:white; border:none; border-radius:4px; font-weight:bold;";
     btnrun.onclick = function(){ RUN(); };
     document.body.appendChild(btnrun);
     
     
     let btnrun1 = document.createElement("button");
    btnrun1.textContent = " ⚡ RUN1"
    btnrun1.style = "margin:5px; padding:10px 20px; background:blue; color:white; border:none; border-radius:4px; font-weight:bold;";
     btnrun1.onclick = function(){ RUN1(); };
     document.body.appendChild(btnrun1);
  javascript:(function(){function cargarMiScript(){

const video = document.querySelector('video');
if (video) {
    video.remove();
}}cargarMiScript();})();   
 
})();
