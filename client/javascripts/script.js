const $ = require('jquery');

$(document).ready(function () {
  // Get current URL and set matching Nav Link to .active
  let url = window.location;
  $('ul.navbar-nav a[href="'+ url +'"]').append('<span class="sr-only">(current)</span>').parent().addClass('active');
  $('ul.navbar-nav a').filter(function() {
    return this.href == url;
  }).append('<span class="sr-only">(current)</span>').parent().addClass('active');
});

// Handle Sign Up form Submit
function addUser() {
  let email = $('#email').val();
  let password = $('#password').val();
  let passwordConfirm = $('#password-confirm').val();

  if (password != passwordConfirm) {
    alert('Passwords must match.');
  }
}
