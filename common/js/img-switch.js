window.onload = function() {

$(function(){
    var wid = $(window).width();
    if( wid < 767 ){
        $('.hir').each(function(){
            $(this).attr("src",$(this).attr("src").replace('_pc', '_sp'));
        });
    }
});
}