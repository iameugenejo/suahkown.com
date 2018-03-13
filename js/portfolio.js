(function() {
  $.event.special.swipe.horizontalDistanceThreshold = (screen.availWidth) / 3;

  $('body').on('swiperight', function(e) {
    window.location.href = $('.left-arrow').attr('href');
  }).on('swipeleft', function(e) {
    window.location.href = $('.right-arrow').attr('href');
  });
})();