/**
 * Target the Parent of an Element Using jQuery
 *
 * jQuery has a function called parent() that allows you to access the parent of whichever element you've selected.
 *
 * Give the parent of the #target1 element a background-color of red.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5').clone().appendTo('#left-well');
  $('#target1').parent().css('backgroundColor', 'red');
});
