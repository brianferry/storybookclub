(function(window) {
  window.env = window.env || {};

  // Environment variablesh
  window["env"]["apiUrl"] = "${API_URL}";
  window["env"]["debug"] = "${DEBUG}";
})(this);