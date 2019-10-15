/**
 * Target a Specific Child of an Element Using jQuery
 *
 * jQuery uses CSS Selectors to target elements. The target:nth-child(n) CSS selector allows you to select all the nth elements with the target class or element type.
 *
 * Make the second child in each of your well elements bounce. You must select the elements' children with the target class.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5').clone().appendTo('#left-well');
  $('#target1').parent().css('background-color', 'red');
  $('#right-well').children().css('color', 'orange');
  $('.target:nth-child(2)').addClass('animated bounce');
});
