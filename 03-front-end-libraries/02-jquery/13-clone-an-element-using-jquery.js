/**
 * Clone an Element Using jQuery
 *
 * jQuery has a function called clone() that makes a copy of an element.
 *
 * Clone your target5 element and append it to your left-well.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5').clone().appendTo('#left-well');
});
