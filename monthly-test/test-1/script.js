$(document).ready(function() {
    $.get("data.json",{},function(data) {
        $('.app-name').append('<h1>'+data.appName+'</h1>');
        for(var i=0; i<data.headers.length;i++){
            $('thead').append('<th>'+data.headers[i]+'</th>');
        }
            loadTableData(data);
        /* for(var i=0; i<data.users.length;i++) {
            var tableData=$("<tr><td>"+(i+1)+"</td><td>"+data.users[i].name+"</td><td>"+data.users[i].email+"</td><td>"+data.users[i].country+"</td><td>"+data.users[i].salary+"</td><td>"+"<button type='button' class='btn btn-danger'>Delete</button>"+"</td></tr>");   
            $('tbody').append(tableData);
        } */

        $('body').on('click','th',sortColumn('salary'));        
        var sortDirection =false;
        function sortColumn(columnName) {
            var dataType = typeof data.users[0][columnName];
            sortDirection = !sortDirection;

            switch(dataType) {
                case 'number':
                    sortNumberColumn(sortDirection,columnName);
                    break;
            }
            loadTableData(data);
            console.log(data.users);
        }
        function loadTableData(data) {
            for(var i=0; i<data.users.length;i++) {
                var tableData=$("<tr><td>"+(i+1)+"</td><td>"+data.users[i].name+"</td><td>"+data.users[i].email+"</td><td>"+data.users[i].country+"</td><td>"+data.users[i].salary+"</td><td>"+"<button type='button' class='btn btn-danger'>Delete</button>"+"</td></tr>");   
                $('tbody').append(tableData);
            }

        }
        function sortNumberColumn(sort,columnName) {
            data.users = data.users.sort((p1,p2) => {
                return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
            });

        }
    });
    $('body').on('click', '.btn', function() {
        $(this).parent().parent().remove();
    }); 
    


});
    
 
    
    
    
    