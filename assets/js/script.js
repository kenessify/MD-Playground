/**
 * Created by McWilliam on 18/11/2016.
 */
$(document).ready(function(){
    $('.bars-item').click(function () {
        var __class=$(this).attr('__class');
        console.log(__class)
        $(this).toggleClass(__class);
    })

    // $('.__3-bars').append('<span></span>')
})
