$(document).ready(function() {
    $('.search').on('click', function() {
        var input = $('.input-box').val();
    
        $.get("https://raw.githubusercontent.com/attainu/attainu-eagle/master/coding-challenges/week-5/day-3/books.json",{}, function(data) {
            var bookData = JSON.parse(data);
            $("tbody").empty();
            for(var i in bookData) {
            //  for(var i=0; i< bookData.length;i++){  
            inputCapitalise = input.charAt(0).toUpperCase() + input.slice(1);
           // $("tbody").empty();
           // $( ".table" ).empty();
            //$('.table').prepend(" <tr><th>Title</th><th>Author</th><th>Country</th><th>Language</th><th>Link</th><th>Pages</th><th>Year</th></tr>")
            if(inputCapitalise == bookData[i].language){
                console.log(bookData[i].language);
                var tableData=$("<tr><td>"+bookData[i].title+"</td><td>"+bookData[i].author+"</td><td>"+bookData[i].country+"</td><td>"+bookData[i].language+"</td><td>"+bookData[i].link+"</td><td>"+bookData[i].pages+"</td><td>"+bookData[i].year+"</td></tr>");
                $('tbody').append(tableData);
                //tableData.insertAfter('.table tr:first');
                // $('').insertAfter('.table tr:first');
                //var appendTable =$('.table tr').eq(0);
              // $("<tr><td>"+bookData[i].title+"</td><td>"+bookData[i].author+"</td><td>"+bookData[i].country+"</td><td>"+bookData[i].language+"</td><td>"+bookData[i].link+"</td><td>"+bookData[i].pages+"</td><td>"+bookData[i].year+"</td></tr>").insertAfter(".table tr:first");
                //$('.table tr:first').append("<tr><td>"+bookData[i].title+"</td><td>"+bookData[i].author+"</td><td>"+bookData[i].country+"</td><td>"+bookData[i].language+"</td><td>"+bookData[i].link+"</td><td>"+bookData[i].pages+"</td><td>"+bookData[i].year+"</td></tr>");
                //appendTable.html("");
                //$('.table').append("<tr><td>"+bookData[i].title+"</td><td>"+bookData[i].author+"</td><td>"+bookData[i].country+"</td><td>"+bookData[i].language+"</td><td>"+bookData[i].link+"</td><td>"+bookData[i].pages+"</td><td>"+bookData[i].year+"</td></tr>");    
            }
            }
        });
    });
});