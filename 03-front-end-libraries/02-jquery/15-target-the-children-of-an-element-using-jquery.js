/**
 * Target the Children of an Element Using jQuery
 *
 * jQuery has a function called children() that allows you to access the children of whichever element you've selected.
 *
 * Give all the children of your right-well element the color orange.
 */

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5').clone().appendTo('#left-well');
  $('#target1').parent().css('background-color', 'red');
  $('#right-well').children().css('color', 'orange');
});
