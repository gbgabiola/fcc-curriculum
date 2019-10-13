/**
 * Disable an Element Using jQuery
 *
 * Disable only the target1 button.
 **/

$(document).ready(function() {
  $('#target1').css('color', 'red');
  $('#target1').prop('disabled', true);
});
