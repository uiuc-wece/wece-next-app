$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

var $form = $('form#join-form'),
    url = 'https://script.google.com/macros/s/AKfycbz1yXFCt7nFu-zpkEfLgMtQjXEMgN_aV_GXVbQ3-guQxRwmhAE/exec'

$('#submit-form').on('click', function (e) {
    e.preventDefault();
    var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: $form.serializeObject(),
        success: function () {                        // If 200 OK
            alert('Your netID was recorded. Thanks!');
        },
        error: function (xhr, text, error) {              // If 40x or 50x; errors
            alert('Error: ' + error);
        }
    }).success(
    );
})