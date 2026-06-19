(function(){
  // Crear elementos si no existen
  let barra = document.getElementById("barra-tv");
  if(!barra){
    barra = document.createElement("div");
    barra.id = "barra-tv";
    barra.style.cssText = "display:flex;gap:8px;padding:10px;background:#000;position:fixed;top:0;left:0;right:0;z-index:9999;";
    
    const entrada = document.createElement("input");
    entrada.id = "entrada-tv";
    entrada.placeholder = "URL .mp4 / .m3u8…";
    entrada.style.cssText = "flex:1;padding:8px;background:#111;border:1px solid #444;color:#fff;border-radius:4px;";
    
    const boton = document.createElement("button");
    boton.id = "boton-tv";
    boton.textContent = "Cargar";
    boton.style.cssText = "padding:8px 16px;border:0;border-radius:4px;background:#2e86de;font-weight:bold;cursor:pointer;";
    boton.style.outline = "2px solid transparent;transition:outline 0.2s;";
    boton.addEventListener("focus", ()=>boton.style.outline = "2px solid #4fa1ff;");
    
    barra.append(entrada, boton);
    document.body.prepend(barra);
  }

  // Crear reproductor si no existe
  let vid = document.getElementById("reproductor-tv");
  if(!vid){
    vid = document.createElement("video");
    vid.id = "reproductor-tv";
    vid.controls = true;
    vid.playsinline = true;
    vid.webkitPlaysinline = true;
    
    const contenedor = document.createElement("div");
    contenedor.style.cssText = "width:100vw;height:100vh;padding-top:60px;display:flex;align-items:center;justify-content:center;background:#000;";
    vid.style.cssText = "width:100%;aspect-ratio:16/9;object-fit:cover;border:1px solid #222;";
    
    contenedor.appendChild(vid);
    document.body.appendChild(contenedor);
  }

  // Cargar librería HLS si no está
  if(!window.Hls){
    const scriptHls = document.createElement("script");
    scriptHls.src = "https://cdn.jsdelivr.net/npm/hls.js@latest";
    document.head.appendChild(scriptHls);
  }

  // Funciones principales
  const entrada = document.getElementById("entrada-tv");
  const boton = document.getElementById("boton-tv");

  function cargarURL(enlace){
    if(!enlace) return;
    vid.src = "";
    const cargarHls = () => {
      if(window.Hls && Hls.isSupported()){
        const hls = new Hls({
          enableWorker:true, lowLatencyMode:true,
          maxBufferLength:20, maxMaxBufferLength:40, capLevelToPlayerSize:true
        });
        hls.loadSource(enlace);
        hls.attachMedia(vid);
      } else {
        vid.src = enlace;
      }
      vid.play().catch(()=>{});
    };
    window.Hls ? cargarHls() : setTimeout(cargarHls, 500);
  }

  // Eventos
  boton.addEventListener("click", ()=>cargarURL(entrada.value.trim()));
  entrada.addEventListener("keydown", e=>{
    if(e.key === "Enter"){
      boton.focus();
      cargarURL(entrada.value.trim());
    }
  });
  vid.addEventListener("click", ()=>{
    if(!document.fullscreenElement){
      vid.requestFullscreen ? vid.requestFullscreen() :
      vid.webkitRequestFullscreen ? vid.webkitRequestFullscreen() :
      vid.msRequestFullscreen && vid.msRequestFullscreen();
    } else {
      document.exitFullscreen ? document.exitFullscreen() :
      document.webkitExitFullscreen && document.webkitExitFullscreen();
    }
  });
})();
