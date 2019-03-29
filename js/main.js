// Initalizes WOWJS
new WOW().init();

// Navigation Tabs
var tabs = $('.tabs');
var items = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
});

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  stagger: 50,
  transitionDuration: 600,
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 80,
    gutter: 20
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
  },
});

// filter items on button click
$('.filter-button-group').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});