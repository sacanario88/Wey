
(function(){

   
    let tv = document.createElement("input");
    tv.value = 'https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3';
    tv.id = 'tv1';
    tv.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    document.body.appendChild(tv);

    
    let consola = document.createElement("textarea");
    consola.id = 'consola';
    consola.style = "width:90%; height:120px; margin:5px; padding:8px; border-radius:4px; background:#111; color:#0f0; font-family:monospace;";
    consola.placeholder = "👉 Escribe código aquí y pulsa Ejecutar...";
    document.body.appendChild(consola);

  
    function limpiar() {
        document.getElementById("tv1").value = "";
    }
function limpiarc() {
        document.getElementById("consola").value = "";
   c.remove();
   document.getElementById("f").remove();     
    }
 function ejecutarv() {
 javascript:(function(){function cargarMiScript(){
const video = document.createElement('video');
video.id = 'c';
video.controls = true;
video.play();
video.style.position = 'fixed';
video.style.bottom = '20px';
video.style.right = '20px';
video.style.width = '300px';
video.style.zIndex = '1000';
document.body.appendChild(video);
}cargarMiScript();})();
       
    }   
function ejecutarf() {  
let t = document.createElement("iframe");
t.id = 'f';
t.allow = "fullscreen";
document.body.appendChild(t);
t.requestFullscreen();


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
    btnEjecutar.onclick = function(){ ejecutar(); }; 
    document.body.appendChild(btnEjecutar);

    
    let btnLimpiar = document.createElement("button");
    btnLimpiar.textContent = "🧹 LIMPIAR";
    btnLimpiar.style = "margin:5px; padding:10px 20px; background:#dc3545; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnLimpiar.onclick = function(){ limpiar(); }; 
    document.body.appendChild(btnLimpiar);
 
     let btnLimpiarc = document.createElement("button");
    btnLimpiarc.textContent = "🧹 LIMCONSOLA";
    btnLimpiarc.style = "margin:5px; padding:10px 20px; background:#dc3545; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnLimpiarc.onclick = function(){ limpiarc(); }; 
    document.body.appendChild(btnLimpiarc);
  let btnEjecutarv = document.createElement("button");
    btnEjecutarv.textContent = "▶️  VIDEO";
    btnEjecutarv.style = "margin:5px; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnEjecutarv.onclick = function(){ ejecutarv(); }; 
    document.body.appendChild(btnEjecutarv);
    
 let btnEjecutarf = document.createElement("button");
    btnEjecutarf.textContent = "▶️  IFRAME";
    btnEjecutarf.style = "margin:5px; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnEjecutarf.onclick = function(){ ejecutarf(); }; 
    document.body.appendChild(btnEjecutarf);   
      
})();
