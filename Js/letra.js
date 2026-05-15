(function() {
    'use strict';

    // 1. BORRAMOS ESTILOS ANTERIORES
    document.querySelectorAll('link[rel="stylesheet"], style').forEach( hoja => {
        hoja.remove();
    });

    // 2. CREAMOS NUESTRO ESTILO
    let misEstilos = document.createElement("style");
    misEstilos.innerHTML = `
        * {
            background: black !important;
            color: lime !important;
            font-family: monospace !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }
        
        a {
            color: yellow !important;
        }

        /* 📱 AJUSTE PARA VÍDEOS EN MÓVIL */
        video, iframe {
            width: 98% !important;
            height: auto !important;
            max-height: 90vh !important;
            display: block !important;
            margin: 5px auto !important;
            border: 2px solid lime !important;
        }
    `;

    document.head.appendChild(misEstilos);

})();
