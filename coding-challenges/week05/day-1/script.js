$(document).ready(function() {
    $.get('https://dog.ceo/api/breeds/image/random', {}, function(data) {
    $('img').attr("src", data.message);    
    });
    $('button').on('click', function() {
        $.get('https://dog.ceo/api/breeds/image/random', {}, function(data) {
        $('img').attr("src", data.message);    
        });
    });
});