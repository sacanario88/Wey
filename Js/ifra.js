        (function(){
let tv = document.createElement("input");
    tv.value = 'https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3';
    tv.id = 'tv';
    tv.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    document.body.appendChild(tv);
     let btnEjecutar = document.createElement("button");
    btnEjecutar.textContent = "▶️ EJECUTAR / REPRODUCIR";
    btnEjecutar.style = "margin:5px; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnEjecutar.onclick = function(){ ejecutar(); }; // 
    document.body.appendChild(btnEjecutar);
       
    let ib = document.createElement("iframe");
    ib.src = 'https://sacanario88.github.io/Wey/zenjava.html';
    ib.allow = "fullscreen";
    ib.id = 'tv';
    ib.height='600'
    ib.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    document.body.appendChild(ib);
    function ejecutar() {
        let url = ib.src =
  document.getElementById("tv").value;   
}})();