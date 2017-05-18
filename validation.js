
function submitForm() {
  var name = $('#firstName').val() + ' ' + $('#lastName').val();

  $('#status').text('please wait ...');

  $.post('emailForm.php', {
    name: name,
    email: $('#email').val(),
    company: $('#company').val(),
    comment: $('#comment').val()
  })
  .then(function(data) {
    $('#form').prepend(data);
  });  
}

/*-------------------------- check for all letters ----------------*/

function allalphabetic(the_string) {

  var letters = /^[a-zA-Z]+$/;

  if (the_string.match(letters)) {
    return true;
  }
}

/*------------------- validate each individual textbox input---------*/

function validate_email(the_string) {

  var valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  if ((the_string.length > 0) && (valid.test(the_string))){

    return true;
  }
}

function validate_firstName(the_string) {

  if ((the_string.length > 0) && (the_string.length <= 20)){

    return true;
  }
}

function validate_lastName(the_string) {

  if ((the_string.length > 0) && (the_string.length <= 20)){

    return true;
  }
}

function validate_company(the_string) {

  if ((the_string.length > 0) && (the_string.length <= 20)){

    return true;
  }
}

function validate_comment(the_string) {

  if ((the_string.length > 0) && (the_string.length <= 180)){

    return true;
  }
}

/*------------------------- validate all and call -------------------*/


function validate_input(e) {
  e.preventDefault();

  var error_message = '';

  if (!validate_email($('#email').val())) {

    error_message += "Invalid Email. ";
  }

  if (!validate_firstName($('#firstName').val())) {

    error_message += "Invalid First Name. ";
  }

  if (!validate_lastName($('#lastName').val())) {

    error_message += "Invalid Last name. ";
  }

  if (!validate_company($('#company').val())) {

    error_message += "Invalid Company Name. ";
  }

  if (!validate_comment($('#comment').val())) {

    error_message += "Invalid Comment. May exceed 180 characters.";
  }

  if ( error_message.length > 0 ) {
    alert(error_message);
    return false;
  } else {
    submitForm();
  }
}

$('#submitForm').on('click', validate_input);