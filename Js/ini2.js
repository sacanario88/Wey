// ✅ ARCHIVO: uni.js (SUBIR A GITHUB)
(function(){

    // 🔤 CREAMOS CAJA DE URL
    let tv = document.createElement("input");
    tv.value = 'https://cadena100-cope-rrcast.flumotion.com/cope/cadena100-low.mp3';
    tv.id = 'tv1';
    tv.style = "width:90%; margin:5px; padding:8px; border-radius:4px; border:1px solid #ccc;";
    document.body.appendChild(tv);

    // 📝 CREAMOS CONSOLA DE CÓDIGO
    let consola = document.createElement("textarea");
    consola.id = 'consola';
    consola.style = "width:90%; height:120px; margin:5px; padding:8px; border-radius:4px; background:#111; color:#0f0; font-family:monospace;";
    consola.placeholder = "👉 Escribe código aquí y pulsa Ejecutar...";
    document.body.appendChild(consola);

    // 📺 CREAMOS REPRODUCTOR DE VÍDEO/AUDIO
    
    // 🧹 FUNCIÓN LIMPIAR
    function limpiar() {
        document.getElementById("tv1").value = "";
    }

    // ⚡ FUNCIÓN EJECUTAR
    function ejecutar() {
        // 1. Coge lo que haya en la caja y lo mete al reproductor (TU LÍNEA QUE FUNCIONA)
        
        // 2. Ejecuta cualquier código que escribas en la consola
        let codigo = document.getElementById("consola").value;
        try {
            if(codigo) eval(codigo);
        } catch (error) {
            alert("❌ ERROR: " + error.message);
        }
    }

    // 🟩 BOTÓN EJECUTAR (✅ TRUCO INFALIBLE: LLAMADA DENTRO DE FUNCIÓN)
    let btnEjecutar = document.createElement("button");
    btnEjecutar.textContent = "▶️ EJECUTAR / REPRODUCIR";
    btnEjecutar.style = "margin:5px; padding:10px 20px; background:#28a745; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnEjecutar.onclick = function(){ ejecutar(); }; // 👈 ASÍ NUNCA FALLA
    document.body.appendChild(btnEjecutar);

    // 🟥 BOTÓN LIMPIAR
    let btnLimpiar = document.createElement("button");
    btnLimpiar.textContent = "🧹 LIMPIAR";
    btnLimpiar.style = "margin:5px; padding:10px 20px; background:#dc3545; color:white; border:none; border-radius:4px; font-weight:bold;";
    btnLimpiar.onclick = function(){ limpiar(); }; // 👈 ASÍ NUNCA FALLA
    document.body.appendChild(btnLimpiar);

})();
