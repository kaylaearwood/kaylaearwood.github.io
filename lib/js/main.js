// @codekit-prepend "vendor/modernizr-3.5.0.min.js", "vendor/jquery-3.2.1.min.js", "vendor/aos.js", "plugins.js";

$(document).ready(function () {

  $('body').addClass('loaded');

  // AOS Init
  AOS.init({
    duration: 500,
    once: true,
    delay: 200,
  });

});
