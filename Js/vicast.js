(function() {
    'use strict';

    function crearVideo(url) {
        const contenedor = document.createElement("div");
        contenedor.style = "background:#222; padding:10px; margin:10px; border-radius:8px;";
        
        const titulo = document.createElement("div");
        titulo.style = "color:#0f0; font-size:12px; margin-bottom:5px; word-break:break-all;";
        titulo.textContent = "🔗 " + url;
        
        const video = document.createElement("video");
        video.src = url;
        video.controls = true;
        video.style = "width:100%; height:auto; border-radius:5px;";
        
        contenedor.appendChild(titulo);
        contenedor.appendChild(video);
        return contenedor;
    }

    // CREAMOS EL PANEL
    const panel = document.createElement("div");
    panel.id = "panelM3U8";
    panel.style = "position:fixed; bottom:0; left:0; width:100%; height:50vh; background:#111; z-index:99999; display:none; flex-direction:column; border-top:4px solid #0f0; overflow-y:auto;";
    
    // CREAMOS LA BARRA DE ARRIBA
    const barra = document.createElement("div");
    barra.style = "background:#222; color:#0f0; padding:8px; display:flex; justify-content:space-between; align-items:center; font-weight:bold;";
    barra.textContent = "🎬 STREAMS M3U8";
    
    // BOTON CERRAR
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "✖ CERRAR";
    btnCerrar.style = "background:red; color:white; border:none; padding:5px 15px; border-radius:4px;";
    btnCerrar.onclick = function(){
        panel.style.display = "none";
    };
    
    barra.appendChild(btnCerrar);
    panel.appendChild(barra);
    document.body.appendChild(panel);

    // BOTON FLOTANTE
    const btnFlotante = document.createElement("button");
    btnFlotante.textContent = "🚀";
    btnFlotante.style = "position:fixed; bottom:20px; right:20px; z-index:99998; width:55px; height:55px; background:#222; color:#0f0; border-radius:50%; border:none; font-size:24px;";
    
    btnFlotante.onclick = function() {
        if(panel.style.display === "none"){
            panel.innerHTML = "";
            panel.appendChild(barra);
            
            let encontrados = 0;
            
            // 🔍 MÉTODO CLÁSICO QUE SÍ FUNCIONA
            document.querySelectorAll('a, link, video, source, script').forEach(el => {
                let ruta = el.src || el.href;
                if(ruta && ruta.includes('.m3u8')){
                    panel.appendChild(crearVideo(ruta));
                    encontrados++;
                }
            });

            // BUSCAMOS TAMBIÉN EN EL TEXTO DE LA PÁGINA POR SI ESTÁ ESCRITO
            if(encontrados === 0){
                let textoPagina = document.body.innerHTML;
                let regex = /https?:\/\/[^\s"']+\.m3u8/g;
                let coincidencias = textoPagina.match(regex);
                if(coincidencias){
                    coincidencias.forEach(url => {
                        panel.appendChild(crearVideo(url));
                        encontrados++;
                    });
                }
            }
            
            if(encontrados === 0){
                panel.innerHTML += '<p style="color:white; text-align:center; padding:20px;">❌ No se encontraron archivos .m3u8</p>';
            }
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    };

    document.body.appendChild(btnFlotante);

})();