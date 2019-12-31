$(document).ready(function() {
    $('body').on('click', '.btn-danger', function(event) {
        var itemId = $(this).attr('itemid');
        console.log(itemId);
        $.ajax({
            url:'/cart/remove/'+itemId,
            method: 'DELETE',
            data:{itemId: itemId}
        }).done(function(data){
            console.log(data);
            //alert("Applied to the job Successfully!");
        })
        $(this).parent().parent().empty();
    })
})
   /*  $('table').on('click', '.btn-info', function(event) {
        var itemId = $(this).attr('itemid');
        console.log(itemId);
        /* $('.edit').on('click', '.item-submit', function(event) {
            //event.preventDefault();
            
            $.ajax({
                url:'/cart/update/'+itemId,
                method: 'PUT',
                data:{itemId: itemId}
            }).done(function(data){
                console.log(data);
                //alert("Applied to the job Successfully!");
            })
        })
    }) */
