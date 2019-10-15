/**
 * Target Even Elements Using jQuery
 *
 * Try selecting all the even target elements and giving them the classes of animated and shake. Remember that even refers to the position of elements with a zero-based system in mind.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
  $('#target2').appendTo('#right-well');
  $('#target5').clone().appendTo('#left-well');
  $('#target1').parent().css('background-color', 'red');
  $('#right-well').children().css('color', 'orange');
  $('#left-well').children().css('color', 'green');
  $('.target:nth-child(2)').addClass('animated bounce');
  $('.target:even').addClass('animated shake');
});
