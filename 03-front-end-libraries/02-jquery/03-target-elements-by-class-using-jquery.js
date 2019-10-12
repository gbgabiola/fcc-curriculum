/**
 * Target Elements by Class Using jQuery
 *
 * Target your divelements with the class wellby using the $(".well")selector.
 * Then use jQuery's .addClass() function to add the classes animatedand shake.
 **/

$(document).ready(function() {
  $('button').addClass('animated bounce');
  $('.well').addClass('animated shake');
});
