/**
 * Use appendTo to Move Elements with jQuery
 *
 * jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.
 *
 * Move your target2 element from your left-well to your right-well.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
});
