// AJUSTES GENERALES OBLIGATORIOS
WebSettings ajustes = webview1.getSettings();
ajustes.setJavaScriptEnabled(true);
ajustes.setDomStorageEnabled(true);
ajustes.setAllowFileAccess(true);
ajustes.setAllowContentAccess(true);
ajustes.setMediaPlaybackRequiresUserGesture(false);
ajustes.setSupportZoom(true);
ajustes.setBuiltInZoomControls(true);
ajustes.setDisplayZoomControls(false);
ajustes.setUseWideViewPort(true);
ajustes.setLoadWithOverviewMode(true);

// ✅ ESTAS 2 LÍNEAS SON LAS QUE HACEN QUE CARGUE YANDEX, ANTES NO LAS TENÍAS
ajustes.setJavaScriptCanOpenWindowsAutomatically(true);
ajustes.setUserAgentString("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");

if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
    ajustes.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
}

// PANTALLA COMPLETA (igual que te iba bien)
webview1.setWebChromeClient(new WebChromeClient() {
    private View pantallaGrande;
    private CustomViewCallback volver;
    @Override
    public void onShowCustomView(View vista, CustomViewCallback cb) {
        if(pantallaGrande!=null)return;
        pantallaGrande=vista; volver=cb;
        setContentView(pantallaGrande);
    }
    @Override
    public void onHideCustomView() {
        if(pantallaGrande==null)return;
        setContentView(R.layout.main); // ⚠️ cambia si tu pantalla se llama otro nombre
        pantallaGrande=null; volver.onCustomViewHidden(); volver=null;
    }
});

// ✅ ESTA PARTE ARREGLADA: hace que abra todo dentro y cargue tu código
webview1.setWebViewClient(new WebViewClient() {
    @Override
    public boolean shouldOverrideUrlLoading(WebView v, String url) {
        v.loadUrl(url); // esto es lo que hacía que no abriera nada antes
        return true;
    }
    @Override
    public void onPageFinished(WebView v, String url) {
        super.onPageFinished(v, url);
        // TU CÓDIGO LISTO PARA CARGAR
        v.loadUrl("javascript:(function(){let s=document.createElement('script');s.src='https://sacanario88.github.io/Wey/Js/ini2.js';document.head.appendChild(s);})();");
    }
});

// CARGAR YANDEX
webview1.loadUrl("https://yandex.com");
