//imgLink

$(document).ready(function(){

$("a .Hover01").fadeTo(0,1.0);

$("a .Hover01").hover(function(){

        $(this).fadeTo(150,0.7);

    },

    function(){

        $(this).fadeTo(100,1.0);

    });

});