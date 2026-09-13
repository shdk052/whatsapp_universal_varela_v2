(function () {
  "use strict";

  const FONT_ID = "whatsapp-all-varela-font";
  const MOTION_CLASS_NAME = "whatsapp-varela-motion";

  function loadFont() {
    if (document.getElementById(FONT_ID)) {
      return;
    }

    const preconnect = document.createElement("link");
    preconnect.rel = "preconnect";
    preconnect.href = "https://fonts.gstatic.com";
    preconnect.crossOrigin = "anonymous";
    document.head.appendChild(preconnect);

    const link = document.createElement("link");
    link.id = FONT_ID;
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap";
    document.head.appendChild(link);
  }

  function enableMotion() {
    document.body.classList.add(MOTION_CLASS_NAME);
  }

  loadFont();
  enableMotion();
})();