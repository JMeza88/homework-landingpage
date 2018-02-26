console.log('It is connected');
//ready function below
// $(function() {
// 	var $hide = $('.hide');
// 	var $show = $('#show-this-on-click')
// 	$hide.on('click', function() {
// 		$show.class('display', block);
//  		$show.slideDown('slow',function(){
//  		});

// 	});
// });


// $(function() {
// $('#show-this-on-click').on('click', function(){
// 	$(".hide").show("slow")
// 	});
// });

function showMore(){
  $("#show-this-on-click").slideDown().show();
  $(".readmore").hide();
  $(".readless").show();
}

$(".readmore").click(showMore);

function showLess(){
	$(".hide").slideUp().hide();
	$(".readmore").show();
}

$(".readless").click(showLess);

function learnMore(){
	$('#learnmoretext').show().slideDown();
	$('.learnmore').hide();

}

$(".learnmore").click(learnMore)