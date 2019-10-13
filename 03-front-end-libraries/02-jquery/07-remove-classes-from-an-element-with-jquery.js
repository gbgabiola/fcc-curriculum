/**
 * Remove Classes from an Element with jQuery
 *
 * Remove the btn-defaultclass from all of our buttonelements.
 **/

$(document).ready(function() {
  $('button').addClass('animated bounce');
  $('.well').addClass('animated shake');
  $('#target3').addClass('animated fadeOut');
  $('button').removeClass('btn-default');
});
