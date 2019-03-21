new WOW().init();

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
    osAnimationClass = osElement.attr('data-os-animation'),
    osAnimationDelay = osElement.attr('data-os-animation-delay');
    osElement.css({
      '-webkit-animation-delay': osAnimationDelay,
      '-moz-animation-delay': osAnimationDelay,
      'animation-delay': osAnimationDelay
    });
    var osTrigger = ( trigger ) ? trigger : osElement;

    new Waypoint({
      element: osElement,
      handler: function(direction) {
        osElement.addClass('animated').addClass(osAnimationClass);
        },
        triggerOnce: true,
        offset: '90%'
      });
  });
}

onScrollInit( $('.os-animation') );
onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );