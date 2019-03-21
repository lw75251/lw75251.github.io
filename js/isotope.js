// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  stagger: 50,
  transitionDuration: 600,
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 80,
  },
  cellsByRow: {
    columnWidth: 220,
    rowHeight: 220
  },
  masonryHorizontal: {
    rowHeight: 110
  },
  cellsByColumn: {
    columnWidth: 220,
    rowHeight: 220
  }
});

// filter items on button click
$('.filter-button-group').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});