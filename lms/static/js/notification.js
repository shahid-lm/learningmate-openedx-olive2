var main = function() {
    $('.notification img').on(click(function() {
      $('.notification-menu').toggle();
      $('.notification-badge').hide();
    }));
}
$(document).ready(main);