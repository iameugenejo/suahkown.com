$(function() {
  var $body = $('body');

  var $menu = $('#menu').on('click', function(e) {
    if($menu.hasClass('in')) {
      $(this).removeClass('in');
      $body.removeClass('noscroll');
    }
  });

  $menu.on('show.bs.collapse hide.bs.collapse', function(e) {
    e.preventDefault();
  }).find('a').on('click', function(e) {
    e.stopPropagation();
  });

  $('.navbar-toggle').on('click', function(e) {
    e.preventDefault();
    $menu.addClass('in').addClass('collapse');
    $body.addClass('noscroll');
    $menu.show();
  });
});