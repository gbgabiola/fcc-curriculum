/**
 * Target the Same Element with Multiple jQuery Selectors
 *
 * Add the animatedclass to all elements with type button.
 * Add the shakeclass to all the buttons with class .btn.
 * Add the btn-primaryclass to the button with id #target1.
 *
 * Note: You should only be targeting one element and adding only one class at a time. Altogether, your three individual selectors will end up adding the three classes shake, animated, and btn-primaryto #target1
 **/

$(document).ready(function() {
  $('button').addClass('animated');
  $('.btn').addClass('shake');
  $('#target1').addClass('btn-primary');
});
