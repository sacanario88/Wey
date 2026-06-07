(function (){
    // ✅ ELIMINADO: No metemos un formulario dentro de otro, creamos solo el input directamente
    let t = document.createElement('div'); // Usamos un div en vez de formulario para evitar conflictos
    t.innerHTML += `
    <div id='mas'> 
    <input id='boligrafo'
    style='width:90%; height:12px; margin:5px; padding:8px; border-radius:4px; background:#111; color:#0f0; font-family:monospace;'></input>
    </div>`;
    document.body.appendChild(t);


    document.getElementById('boligrafo').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            Ejecutar();
            this.value=''; // Limpiamos el input
        }
    });

    function Ejecutar() {
        let codigo = document.getElementById("boligrafo").value.trim();
        try {
            if(codigo) {
                // ✅ Se registra en consola
                console.log("✅ Ejecutado:", codigo);
                // ✅ Ejecutamos asegurando que funcione con window, location, etc.
                window.eval(codigo); 
            }
        } catch (error) {
            alert("❌ ERROR: " + error.message);
            console.error("❌ Error:", error.message);
        }
    }
        
})();
