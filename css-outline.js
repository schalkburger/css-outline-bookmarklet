if (!("is_debugging" in window)) {
  is_debugging = false;
  var debug_el = document.createElement("style");
  debug_el.append(
    document.createTextNode(
      `*:not(path):not(g) { 
          color: rgb(255 255 255) !important;
          background: rgb(49 95 130 / 20%) !important;
          outline: dashed 1px rgb(255 255 255 / 50%) !important;
          box-shadow: none !important; }`
    )
  );
}
function enable_debugger() {
  if (!is_debugging) {
    document.head.appendChild(debug_el);
    is_debugging = true;
  }
}

function disable_debugger() {
  if (is_debugging) {
    document.head.removeChild(debug_el);
    is_debugging = false;
  }
}
!is_debugging ? enable_debugger() : disable_debugger();
