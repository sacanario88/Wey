(function() {
  // Evitar carga múltiple
  if (document.getElementById('reproductor-inyectado')) return;

  // Cargar librería HLS si no existe
  if (!window.Hls) {
    const hlsScript = document.createElement('script');
    hlsScript.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest';
    document.head.appendChild(hlsScript);
    hlsScript.onload = iniciarReproductor;
  } else {
    iniciarReproductor();
  }

  function iniciarReproductor() {
    // Crear estilos dinámicamente
    const estilos = document.createElement('style');
    estilos.textContent = `
      *[data-repro-iny] { margin:0; padding:0; box-sizing:border-box; }
      #reproductor-inyectado {
        position:fixed; top:0; left:0; width:100vw; height:100vh;
        object-fit:contain; background:#000; z-index:999990;
        border:none;
      }
      #controles-inyectados {
        position:fixed; top:10px; left:10px; z-index:999995;
        display:flex; flex-wrap:wrap; gap:4px;
      }
      #controles-inyectados input, #controles-inyectados button {
        padding:8px 12px; font-size:14px; border-radius:4px; border:none;
        background:#222; color:#fff;
      }
      #controles-inyectados input { width:320px; }
      #controles-inyectados button { background:#00ccff; color:#000; cursor:pointer; }
      #puntero-inyectado {
        position:fixed; top:0; left:0; width:22px; height:22px;
        background:#00ccff; border-radius:50%; box-shadow:0 0 10px #00ccff;
        pointer-events:none; z-index:999999; opacity:1;
        transition:opacity 0.4s ease;
      }
      #puntero-inyectado.oculto { opacity:0; }
      body { cursor:none !important; }
    `;
    document.head.appendChild(estilos);

    // Crear elementos del reproductor
    const puntero = document.createElement('div');
    puntero.id = 'puntero-inyectado';
    puntero.dataset.reproIny = 'true';

    const controles = document.createElement('div');
    controles.id = 'controles-inyectados';
    controles.dataset.reproIny = 'true';
    controles.innerHTML = `
      <input id="enlace-inyectado" placeholder="URL .m3u8 o .mp4" data-reproIny="true">
      <button id="btn-cargar" data-reproIny="true">▶️ Cargar</button>
      <button id="btn-pantalla" data-reproIny="true">⛶ Pantalla</button>
      <button id="btn-grabar" data-reproIny="true">⏺️ Grabar</button>
    `;

    const reproductor = document.createElement('video');
    reproductor.id = 'reproductor-inyectado';
    reproductor.dataset.reproIny = 'true';
    reproductor.controls = true;
    reproductor.playsInline = true;
    reproductor.preload = 'auto';

    // Agregar elementos al cuerpo
    document.body.appendChild(puntero);
    document.body.appendChild(controles);
    document.body.appendChild(reproductor);

    // Variables globales del módulo
    const v = reproductor;
    let tPuntero;
    let grabacion;
    let flujo;

    // Funcionalidad del puntero
    document.addEventListener('mousemove', e => {
      puntero.style.transform = `translate(${e.clientX - 11}px, ${e.clientY - 11}px)`;
      puntero.classList.remove('oculto');
      clearTimeout(tPuntero);
      tPuntero = setTimeout(() => puntero.classList.add('oculto'), 2000);
    });

    // Cargar HLS optimizado
    function cargarHLS(url) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: true,
          maxBufferLength: 20,
          maxMaxBufferLength: 40,
          backBufferLength: 60,
          startLevel: -1,
          capLevelToPlayerSize: true,
          fragLoadingTimeOut: 15000,
          manifestLoadingTimeOut: 8000
        });
        hls.loadSource(url);
        hls.attachMedia(v);
      } else if (v.canPlayType('application/vnd.apple.mpegurl')) {
        v.src = url;
      }
    }

    // Cargar automático (HLS o MP4)
    function cargar() {
      const url = document.getElementById('enlace-inyectado').value.trim();
      if (!url) return;
      if (url.includes('.m3u8')) {
        cargarHLS(url);
      } else {
        if (window.Hls) Hls.destroyAll();
        v.src = url;
      }
      v.play().catch(e => console.log('Error al reproducir:', e));
    }

    // Pantalla completa
    function pantallaCompleta() {
      if (!document.fullscreenElement) {
        v.requestFullscreen?.() || v.webkitRequestFullscreen?.() || v.msRequestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }

    // Grabación de flujo
    document.getElementById('btn-grabar').addEventListener('click', function() {
      if (!grabacion) {
        flujo = v.captureStream();
        grabacion = new MediaRecorder(flujo);
        const datos = [];
        grabacion.ondataavailable = e => e.data.size && datos.push(e.data);
        grabacion.onstop = () => {
          const a = document.createElement('a');
          a.href = URL.createObjectURL(new Blob(datos, { type: 'video/mp4' }));
          a.download = 'stream_grabado.mp4';
          a.click();
          URL.revokeObjectURL(a.href);
        };
        grabacion.start();
        this.textContent = '⏹️ Parar';
      } else {
        grabacion.stop();
        grabacion = null;
        this.textContent = '⏺️ Grabar';
      }
    });

    // Eventos de botones y teclado
    document.getElementById('btn-cargar').addEventListener('click', cargar);
    document.getElementById('btn-pantalla').addEventListener('click', pantallaCompleta);
    document.getElementById('enlace-inyectado').addEventListener('keypress', e => {
      if (e.key === 'Enter') cargar();
    });
  }
})();
