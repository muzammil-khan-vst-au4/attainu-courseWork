$(document).ready(function() {
    var api = "https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-4/day-4/cities.json"
    $.ajax({
        method: "GET",
        url: api,
        success: function(response) {

            $('button').on('click',function() {
                var input = $('#input').val();
                console.log(input);
                var citiesObject=JSON.parse(response);
                for(var i in citiesObject) {
                    if(input == citiesObject[i].name.charAt(0)) {
                        var citiesElem = $('<li/>').text(citiesObject[i].name);
                        citiesElem.appendTo('.cities');
                        console.log(citiesObject[i].name);
                    }
                }
            })

            

        },
        error: function(error) {
            console.log("Error finding cities", error);

        }
    })
});