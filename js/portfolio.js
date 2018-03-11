$(function() {
  function getHashFilter() {
      var filter = (location.hash.substring(1) || '*');
      if(filter === '*')
          return filter;
      else
          return '.' + filter;
  }

  var $grid = $('#grid');
  var $filters = $("#filters");

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }

    isIsotopeInit = true;
    // filter isotope
    $grid.isotope({
      itemSelector: '.item',
      filter: hashFilter
    });

    // set selected class on button
    if (hashFilter) {
      $filters.find('.active').removeClass('active');
      $filters.find('[href="#' + (hashFilter && hashFilter.substring(1) || '*') + '"]').addClass('active');
    }
  }

  $(window).on('hashchange', onHashchange);
  // trigger event handler to init Isotope
  $filters.hide();
  $grid.hide().imagesLoaded(function() {
    $grid.show();
    onHashchange();
    $filters.show();
  });
});
