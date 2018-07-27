$(document).ready(function(){
 $('.header').height($(window).height());
})

$(document).ready(function(){
 $('.overlay').height($(window).height());
})


var scrolled;
window.onscroll = function() {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled > 200){
        $(".navbar").css({"background": "#333333"})
    }
    if(200 > scrolled){
        $(".navbar").css({"background": "transparent"})
    }

}
