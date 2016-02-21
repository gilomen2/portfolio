$(document).ready(function() {

$('.arrow').hide();

$('#header-headlines').addClass('animated bounceInDown');
$('.hi-icon-wrap').addClass('animated bounceInUp');

setTimeout(function() {
    $('.arrow').show();
}, 5000);

$.backstretch([
        "assets/wonder.jpg"
     ]);


$('#submit').click(function(){
$.post("send_form_email.php", $("#contactform").serialize(),  function(response) {
$('#success').html(response);

});
return false;
});

$(function() {

$(".roll").css("opacity","0");


$(".roll").hover(function () {


$(this).stop().animate({
opacity: .7
}, "350");
},


function () {


$(this).stop().animate({
opacity: 0
}, "350");
});
});

$("#back-top").hide();


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('#item_1, .arrow').click(function () {
			$('body,html').animate({
				scrollTop: $('#content').offset().top
			}, 800);
			return false;
		});

$('#item_2').click(function () {
			$('body,html').animate({
				scrollTop: $('#content1').offset().top
			}, 800);
			return false;
		});

$('#item_3').click(function () {
			$('body,html').animate({
				scrollTop: $('#content2').offset().top
			}, 800);
			return false;
		});

$('#item_4').click(function () {
			$('body,html').animate({
				scrollTop: $('#content3').offset().top
			}, 800);
			return false;
		});
	});


$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#navigation').css('margin-top','0px');
			} else {
				$('#navigation').css('margin-top','-60px');;
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


$(document).scroll(function(){

    var docScroll = $(document).scrollTop(),
        boxCntOfset = $(".skills-line").position().top + 150,
        boxCntOfset1 = $("#content").offset().top - 5,
        boxCntOfset2 = $("#content1").offset().top - 5,
        // boxCntOfset3 = $("#content2").offset().top - 5,
        boxCntOfset4 = $("#content3").offset().top - 5,
        boxCntOfset5 = $("#content4").offset().top - 5,
        boxCntOfset6 = $("#content").position().top + 100,
        boxCntOfset7 = $("#content1").position().top + 100,
        // boxCntOfset8 = $("#content2").position().top + 100,
        boxCntOfset9 = $("#content3").position().top + 100;


    if(docScroll >= boxCntOfset ) {

      $("#line-1").css('width','85%'); //technical product management
      $("#line-2").css('width','65%'); //agile project management
      $("#line-3").css('width','50%'); //client relationship management
      $("#line-4").css('width','40%'); //web design
      $("#line-5").css('width','90%'); //html & css, sass
      $("#line-6").css('width','40%'); //javascript
      $("#line-7").css('width','70%'); //rails development
      $("#line-8").css('width','60%'); //wordpress development
      $("#line-9").css('width','75%'); //b2b marketing
      $("#line-10").css('width','70%'); //adobe illustrator
      $("#line-11").css('width','70%'); //adobe photoshop
    } else {
      $("#line-1").css('width','0px');
      $("#line-2").css('width','0px');
      $("#line-3").css('width','0px');
      $("#line-4").css('width','0%');
      $("#line-5").css('width','0%');
      $("#line-6").css('width','0%');
      $("#line-7").css('width','0%');
      $("#line-8").css('width','0%');
      $("#line-9").css('width','0%');
      $("#line-10").css('width','0%');
      $("#line-11").css('width','0%');

    }

    if((docScroll >= boxCntOfset1) && (docScroll <= boxCntOfset2)) {
        $("#item_1").css('color','#32323c');
    } else {
        $("#item_1").css('color','#f2f2f2');
    }

     if((docScroll >= boxCntOfset2) && (docScroll <= boxCntOfset4)) {
        $("#item_2").css('color','#32323c');
    } else {
        $("#item_2").css('color','#f2f2f2');
    }

    // if((docScroll >= boxCntOfset3) && (docScroll <= boxCntOfset4)) {
    //     $("#item_3").css('color','#32323c');
    // } else {
    //     $("#item_3").css('color','#f2f2f2');
    // }

    if(docScroll >= boxCntOfset4) {
        $("#item_4").css('color','#32323c');
    } else {
        $("#item_4").css('color','#f2f2f2');
    }

    if(docScroll >= boxCntOfset6) {
        $("#content").css('padding-top','100px');
        $("#content").css('padding-bottom','100px');
    } else {
        $("#content").css('padding-top','200px');
        $("#content").css('padding-bottom','0px');
    }

    if(docScroll >= boxCntOfset7) {
        $("#content1").css('padding-top','100px');
        $("#content1").css('padding-bottom','100px');
    } else {
        $("#content1").css('padding-top','200px');
        $("#content1").css('padding-bottom','0px');
    }

    // if(docScroll >= boxCntOfset8) {
    //     $("#content2").css('padding-top','100px');
    //     $("#content2").css('padding-bottom','100px');
    // } else {
    //     $("#content2").css('padding-top','200px');
    //     $("#content2").css('padding-bottom','0px');
    // }

    if(docScroll >= boxCntOfset9) {
        $("#content3").css('padding-top','100px');
        $("#content3").css('padding-bottom','100px');
    } else {
        $("#content3").css('padding-top','200px');
        $("#content3").css('padding-bottom','0px');
    }

  });

});
