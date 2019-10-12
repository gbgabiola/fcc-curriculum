/**
 * Target Elements by id Using jQuery
 *
 * First target your buttonelement with the id target3by using the $("#target3")selector.
 * Then use jQuery's .addClass()function to add the classes animatedand fadeOut.
 **/

$(document).ready(function() {
  $('button').addClass('animated bounce');
  $('.well').addClass('animated shake');
  $('#target3').addClass('animated fadeOut');
});
