$(document).ready(function() {

	$("#images")
		.css("background-image", "url(images/ready.gif)")
		.css('cursor','pointer')
		.mousedown(function(){
			$(this).css("background-image", "url(images/cool.gif)");
		})
		.mouseup(function(){
			$(this).css("background-image", "url(images/ready.gif)");
		});

	$(document)
		.keydown(function(e){
			if(e.which == 32){
				playBall();
				$("#images")
					.css("background-image", "url(images/throw.png)");
				$("#ball")
					.finish()
					.show()
					.animate({'left':'835px'},500,function(){
						$(this).hide();
						$(this).css('left', '520px')
					});
			}
		})
		.keyup(function(e){
			if(e.which == 32){
				$("#images")
					.css("background-image", "url(images/ready.gif)");
				$("#ball")
					.hide();
			}
		});
});

function playBall() {
  $('#ball_sound')[0].volume = 0.5;
  $('#ball_sound')[0].load();
  $('#ball_sound')[0].play();
}