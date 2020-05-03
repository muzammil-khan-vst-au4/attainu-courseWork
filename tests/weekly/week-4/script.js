/* 
1. Done. Create a form with input box (name, age) and a submit button
2. Done. if any of the input values is falsy, show relevant error in bootstrap alert box
3. Done. If the name value already exists in the list, show an error in bootstrap alert box
4. Done. If the age value is less than 15, show an error in bootstrap alert box — there should be only one html tag to for all alert, switch the classes accordingly
5. Done. On every successful submission, render the values (“name (bold) - age (italic)” format) in a list and show a success message in bootstrap alert box
 */
var data= [{ 
    name: "Muzammil",
    age: 24,
     }];
/* function checkinArray(nameInput) {
    for(var i= 0; i < data.length; i++) {
        if(nameInput == data[i].name) {
            return true;
        } else {
            return false;
        }
    }
}     */
$(document).ready(function() {
    $('button').on('click', function() { 
        var name = $('#name').val();
        var age = $('#age').val();
        if(!name) {
            $('#alert').html("");
            $('<div/>').text('Please enter name').appendTo('#alert');
            $('#alert').addClass('alert alert-danger');
        } 
        else if(!age || age < 15) {
            $('#alert').html("");            
            $('<div/>').text('Invalid age').appendTo('#alert');
            $('#alert').addClass('alert alert-danger');
        } else{
            $('#alert').html("");
            
            if(data.some(function(elem){
                return elem.name === name;
            }) === true){
                $('#alert').html("");
                $('<div/>').text('Name already exists').appendTo('#alert');
                $('#alert').addClass('alert alert-warning');
                
            } else {
                $('#alert').html("");
                data.push({"name": name, "age": age});
                $('<div/>').text('Name added successfully').appendTo('#alert');
                $('<b/>').text(name + ' ').appendTo('#alert');
                $('<i/>').text(age).appendTo('#alert');
                $('#alert').addClass('alert alert-success'); 

            }
        }
        $('ol').html("");
        for(var j=0; j < data.length; j++) {
            var list = $('<li/>').html('<b>'+data[j].name+'</b> <i>'+data[j].age+'</i>');
            list.appendTo('ol');
        }
    })
});
        
    

            /* for(var i= 0;i<data.length;i++) {
                if(name == data[i].name) { 
                    $('#alert').html("");
                    $('<div/>').text('Name already exists').appendTo('#alert');
                    $('#alert').addClass('alert alert-warning');
                } else {*/
                       /* var obj = {};
                       obj["name"] = name;
                       obj["age"] = age;
                       data.push(obj); */
                      /*  data[i].name = name;
                       data[i].age = age; */
                   
              
            /* for(var i in data) { 
                if(name == data[i].name) {
                    $('#alert').html("");
                    $('<div/>').text('Name already exists').appendTo('#alert');
                    $('#alert').addClass('alert alert-warning');
                    alert("if is executed");
                    break;
                } else {
                    data.push({"name": name, "age": age});
                    alert("else is executed");
                    for(var j = 0; j < data.length; j++){
                    var list = $('<li/>').text(data[j].name);
                    console.log(j);
                    list.appendTo('ol');
                    }
                    break;
                    }
            } 
        }
     
    });*/
    


