$(document).ready(function(){
    $('.tabs').tabs({
        swipeable : true
    });

    $('.scrollspy').scrollSpy({
        getActiveElement :   function(id) {
            return $("a[href='#"+id+"']").parent("li").addClass("active");
        }
    });
    $("#loading").hide();
    $(window).scroll(function() {
        var scrollPos = $(document).scrollTop();
        if(scrollPos == 0){
            $("nav").removeClass('onscrollnav');
            $(".custom1").css('width', '20%');
            $(".custom1").css('padding-top', '0px');
            $(".custom1 img").attr('src', '/public/img/makassar-putih.png');
        }else{
            $("nav").addClass('onscrollnav');
            $(".custom1").css('width', '12%');
            $(".custom1").css('padding-top', '10px');
            $(".custom1 img").attr('src', '/public/img/makassar.png');
        }
    });

});
