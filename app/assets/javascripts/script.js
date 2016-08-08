function randomShake() {
    function shake() {
        $(".skills img." + randomImage + "").addClass('active');
        $(".skills img." + randomImage + "").siblings().removeClass('active');
    };
    function stopShake() {$(".skills img." + randomImage + "")};
    var skillImages = ["html", "css", "js", "ruby"]
    var randomImage = skillImages[Math.floor(Math.random() * skillImages.length)];
    shake();
    setTimeout(function() {
        stopShake();
    }, 1500);
};

setInterval(function() {
    randomShake();
}, 6000);

var slickNav = function() {
    $(function() {
        $('#menu').slicknav();
    });
};

var sweetAlerts = function() {
    if ($.trim($("#notice").html()) == '') {} else {
        var text = $("#notice").text();
        ohSnap(text, {
            "color": "orange",
            "duration": "4000"
        });
        $("#notice").remove();
    };
};

var unslider = function() {
    var w_height = $(window).height();
    $('.head .slider').find('li').css('height', w_height);
    $('.head h2').css('margin-top', w_height/2.5 +"px");
    $('.slider').unslider({
        autoplay: true,
        infinite: true,
        speed: 1000,
        delay: 10000,
        pause: true,
        arrows: false,
        nav: false
    });
};

var moreInfo = function() {
    $("a.land").parent("li").addClass("rotated").find("ul").show();
    $("img.land").show();
    $(".serviceoptions a").on("click", function(e) {
        e.preventDefault();
        var block = $(this).parent("li").find("ul").css("display");
        //  If closed and clicked
        if (block !== "block") {
            $(this).closest("ul").find(">li").each(function() {
                $(this).removeClass("rotated");
            });
            $(".serviceimages img").hide();
            $(".serviceoptions li ul").slideUp();
            $(this).parent("li").addClass("rotated");
            $(this).parent("li").find("ul").slideDown();
            var imageClass = $(this).attr("class");
            $(".serviceimages img." + imageClass + "").fadeIn();
            //  If open and clicked
        } else {
            $(this).parent("li").removeClass("rotated");
            $(this).parent("li").find("ul").slideUp();
        };
    });
};

var scrollDown = function() {
    $(".downarrow").on("click", function(e){
    e.preventDefault();
    var w_height = $(window).height();
    var y = $(window).scrollTop();
    $("html, body").animate({
        scrollTop: y + $(window).height()
    }, w_height);  
    });
};

var scrollFade = function(){
        $(window).scroll( function(){
        $('.fadeIn').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'},500);
            };
        }); 
    });
};

$(document).ready(function() {
    slickNav();
    sweetAlerts();
    unslider();
    randomShake();
    setInterval;
    setTimeout;
    moreInfo();
    scrollDown();
    scrollFade();
});
