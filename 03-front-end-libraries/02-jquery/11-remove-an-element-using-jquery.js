/**
 * Remove an Element Using jQuery
 *
 * Remove element target4 from the page by using the .remove()function.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
  $('#target4').remove();
});
