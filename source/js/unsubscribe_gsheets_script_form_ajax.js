$.fn.serializeObject = function() {
  var o = {};
  var a = this.serializeArray();
  $.each(a, function() {
    if (o[this.name]) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push(this.value || "");
    } else {
      o[this.name] = this.value || "";
    }
  });
  return o;
};

var $form = $("form#unsubscribe-form"),
  url =
    "https://script.google.com/macros/s/AKfycbwyS4Us0lkzSDiFNLrikWOyYTSrAqYvqXhWRfw20l4fR6HtkGg/exec";

// Variable to hold request
var request;

$("#submit-form").on("click", function(e) {
  // Prevent default posting of form - put here to work in case of errors
  e.preventDefault();

  // Abort any pending request
  if (request) {
    request.abort();
  }

  // Let's select and cache all the fields
  var $inputs = $form.find("input, button");

  // get serialized data
  var data = $form.serializeObject();

  // Let's disable the inputs for the duration of the Ajax request.
  // Note: we disable elements AFTER the form data has been serialized.
  // Disabled form elements will not be serialized.
  $inputs.prop("disabled", true);

  var request = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: data
  });

  // Callback handler that will be called on success
  request.done(function(response, textStatus, jqXHR) {
    alert("You have successfully unsubscribed.");
  });

  // Callback handler that will be called on failure
  request.fail(function(jqXHR, textStatus, errorThrown) {
    alert("Error: " + textStatus, errorThrown);
  });

  // Callback handler that will be called regardless
  // if the request failed or succeeded
  request.always(function() {
    // Reenable the inputs
    $inputs.prop("disabled", false);
  });
});
