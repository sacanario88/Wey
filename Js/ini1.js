// ==================================================
// 🚀 SISTEMA DEFINITIVO - EXOPLAYER / PUERTO 2904
// ✅ Capturador + Favoritos + Anti-Parada Pluto
// ==================================================
(function() {
    'use strict';

    // ==============================================
    // 📁 GESTIÓN DE FAVORITOS (SE GUARDAN EN LA APP)
    // ==============================================
    function obtenerFavoritos() {
        let guardados = localStorage.getItem('favoritosM3U8_Exo');
        return guardados ? JSON.parse(guardados) : [];
    }

    function guardarFavorito(url) {
        let lista = obtenerFavoritos();
        if(!lista.includes(url)){
            lista.push(url);
            localStorage.setItem('favoritosM3U8_Exo', JSON.stringify(lista));
            alert("✅ Guardado en Favoritos!");
        } else {
            alert("ℹ️ Ya está en favoritos");
        }
    }

    function borrarFavorito(url) {
        let lista = obtenerFavoritos().filter(item => item !== url);
        localStorage.setItem('favoritosM3U8_Exo', JSON.stringify(lista));
        actualizarContenido();
    }

    // ==============================================
    // ⚡ FUNCIÓN CLAVE: ENVIAR A SU EXOPLAYER NATIVO
    // ==============================================
    // Hablamos por su puerto 2904 tal como su código lo entiende
    function reproducirEnExo(url) {
        if(!url) return;
        console.log("🚀 ENVIANDO A EXOPLAYER: ", url);

        // 🔌 CONEXIÓN A SU CANAL INTERNO
        let ws = new WebSocket("ws://" + window.location.hostname + ":2904/connect");

        ws.onopen = () => {
            // 📩 COMANDOS EXACTOS SACADOS DE SU CÓDIGO ORIGINAL
            let orden = {
                type: 1,       // TIPO 1 = VIDEO
                command: 9,    // COMANDO 9 = CARGAR URL
                url: url,
                status: 200
            };
            ws.send(JSON.stringify(orden));
            ws.close(); // Cerramos conexión, ya recibió la orden
        };

        ws.onerror = () => {
            // 🛑 MÉTODO ALTERNATIVO SI EL SOCKET FALLA (USAMOS SUS FUNCIONES GLOBALES)
            console.log("⚠️ Socket falló, usando método directo...");
            if(window.playVideo && window.callWithCommand) {
                window.callWithCommand({command:9, url:url}, document.createElement('video'));
                window.playVideo({command:1}); // Dar al PLAY
            }
        };
    }

    // ==============================================
    // 🛑 SISTEMA ANTI-PARADA / SALTAR PUBLICIDAD PLUTO
    // ==============================================
    // Como es nativo, le mandamos orden de seguir cada X segundos
    setInterval(() => {
        let ws = new WebSocket("ws://" + window.location.hostname + ":2904/connect");
        ws.onopen = () => {
            // 📩 COMANDO 1 = PLAY / CONTINUAR
            ws.send(JSON.stringify({command:1, status:200}));
            ws.close();
        };
    }, 2500); // Revisa cada 2.5 segundos (rápido, no se nota)

    // ==============================================
    // 🎨 CREAR ELEMENTO PARA CADA ENLACE ENCONTRADO
    // ==============================================
    function crearElementoEnlace(url, esFavorito = false) {
        const contenedor = document.createElement("div");
        contenedor.style = "background:#1a1a1a; padding:12px; margin:10px 5px; border-radius:8px; border:1px solid #00ff00;";
        
        // 📋 TEXTO DEL ENLACE
        const texto = document.createElement("div");
        texto.style = "color:#0f0; font-size:12px; margin-bottom:8px; word-break:break-all; line-height:1.4;";
        texto.textContent = "🔗 " + url;

        // 🎮 BARRA DE BOTONES
        const botones = document.createElement("div");
        botones.style = "display:flex; gap:8px; flex-wrap:wrap;";

        // ▶️ BOTÓN REPRODUCIR (SU EXOPLAYER)
        const btnPlay = document.createElement("button");
        btnPlay.textContent = "▶️ REPRODUCIR";
        btnPlay.style = "background:#008000; color:white; border:none; padding:6px 14px; border-radius:4px; font-weight:bold;";
        btnPlay.onclick = () => reproducirEnExo(url);

        // ⭐ BOTÓN GUARDAR / BORRAR
        const btnFav = document.createElement("button");
        if(esFavorito){
            btnFav.textContent = "❌ BORRAR";
            btnFav.style = "background:#d00; color:white; border:none; padding:6px 14px; border-radius:4px;";
            btnFav.onclick = () => borrarFavorito(url);
        } else {
            btnFav.textContent = "⭐ GUARDAR";
            btnFav.style = "background:gold; color:black; border:none; padding:6px 14px; border-radius:4px; font-weight:bold;";
            btnFav.onclick = () => guardarFavorito(url);
        }

        botones.appendChild(btnPlay);
        botones.appendChild(btnFav);
        contenedor.appendChild(texto);
        contenedor.appendChild(botones);
        return contenedor;
    }

    // ==============================================
    // 📌 PANEL FLOTANTE (TU HERRAMIENTA)
    // ==============================================
    const panel = document.createElement("div");
    panel.id = "panelExo";
    panel.style = `
        position:fixed; bottom:0; left:0; width:100%; height:52vh; 
        background:#0a0a0a; z-index:99999; display:none; 
        flex-direction:column; border-top:3px solid #00ff00; 
        overflow-y:auto; box-shadow:0 -2px 15px rgba(0,255,0,0.2);
    `;

    // 🧰 BARRA SUPERIOR
    const barraSup = document.createElement("div");
    barraSup.style = "background:#1a1a1a; color:#0f0; padding:10px; display:flex; justify-content:space-between; align-items:center; font-weight:bold; font-size:16px; border-bottom:1px solid #0f0;";
    barraSup.textContent = "🚀 EXOPLAYER | CAPTURADOR M3U8";

    // PESTAÑAS
    const grupoTabs = document.createElement("div");
    grupoTabs.style = "display:flex; gap:10px;";

    const tabEncontrados = document.createElement("button");
    tabEncontrados.textContent = "🔎 Encontrados";
    tabEncontrados.style = "background:#008000; color:white; border:none; padding:5px 12px; border-radius:4px;";
    tabEncontrados.onclick = () => mostrarEncontrados();

    const tabFavoritos = document.createElement("button");
    tabFavoritos.textContent = "⭐ Favoritos";
    tabFavoritos.style = "background:gold; color:black; border:none; padding:5px 12px; border-radius:4px;";
    tabFavoritos.onclick = () => mostrarFavoritos();

    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "✖ CERRAR";
    btnCerrar.style = "background:red; color:white; border:none; padding:5px 12px; border-radius:4px;";
    btnCerrar.onclick = () => panel.style.display = "none";

    grupoTabs.appendChild(tabEncontrados);
    grupoTabs.appendChild(tabFavoritos);
    barraSup.appendChild(grupoTabs);
    barraSup.appendChild(btnCerrar);
    panel.appendChild(barraSup);

    // CONTENEDOR DE CONTENIDO
    const contenidoPanel = document.createElement("div");
    contenidoPanel.id = "contenidoPanel";
    contenidoPanel.style = "padding:10px;";
    panel.appendChild(contenidoPanel);
    document.body.appendChild(panel);

    // 🚀 BOTÓN FLOTANTE PARA ABRIR/CERRAR
    const btnFlotante = document.createElement("button");
    btnFlotante.textContent = "🚀";
    btnFlotante.style = `
        position:fixed; bottom:25px; right:25px; z-index:99998; 
        width:60px; height:60px; background:#1a1a1a; color:#0f0; 
        border-radius:50%; border:2px solid #0f0; font-size:26px;
        box-shadow:0 0 12px rgba(0,255,0,0.4);
    `;
    btnFlotante.onclick = () => {
        panel.style.display = (panel.style.display === "none" || !panel.style.display) ? "block" : "none";
        if(panel.style.display === "block") mostrarEncontrados();
    };
    document.body.appendChild(btnFlotante);

    // ==============================================
    // 🔍 FUNCIONES DE BÚSQUEDA Y VISTA
    // ==============================================
    function actualizarContenido(){
        contenidoPanel.innerHTML = "";
    }

    function mostrarEncontrados(){
        actualizarContenido();
        let encontrados = 0;

        // 1. BUSCAR EN ETIQUETAS DE LA PÁGINA
        document.querySelectorAll('a, link, video, source, script, iframe, img').forEach(el => {
            let ruta = el.src || el.href || el.getAttribute("data-src");
            if(ruta && ruta.includes('.m3u8')){
                contenidoPanel.appendChild(crearElementoEnlace(ruta, false));
                encontrados++;
            }
        });

        // 2. BUSCAR EN TEXTO CÓDIGO FUENTE (si está oculto)
        if(encontrados === 0){
            let textoTotal = document.body.innerHTML + document.documentElement.outerHTML;
            let regex = /https?:\/\/[^\s"']+\.m3u8[^\s"']*/g;
            let coincidencias = textoTotal.match(regex);
            if(coincidencias){
                coincidencias.forEach(url => {
                    contenidoPanel.appendChild(crearElementoEnlace(url, false));
                    encontrados++;
                });
            }
        }

        if(encontrados === 0){
            contenidoPanel.innerHTML = '<p style="color:white; text-align:center; padding:20px; font-size:14px;">❌ No se encontraron archivos .m3u8<br>La búsqueda está activa, carga una página con streams</p>';
        }
    }

    function mostrarFavoritos(){
        actualizarContenido();
        let lista = obtenerFavoritos();
        if(lista.length === 0){
            contenidoPanel.innerHTML = '<p style="color:white; text-align:center; padding:20px; font-size:14px;">⭐ Aún no tienes enlaces guardados<br>Guarda tus streams favoritos para verlos aquí</p>';
        } else {
            lista.forEach(url => contenidoPanel.appendChild(crearElementoEnlace(url, true)));
        }
    }

    // ==============================================
    // 🔄 BÚSQUEDA AUTOMÁTICA CONTINUA
    // ==============================================
    setInterval(() => {
        // Si el panel está abierto, actualizamos la lista cada 3 segundos
        if(panel.style.display === "block") mostrarEncontrados();
    }, 3000);

    console.log("✅ SISTEMA EXOPLAYER CARGADO | PUERTO 2904 ACTIVO");
})();
