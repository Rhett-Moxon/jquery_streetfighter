<<<<<<< HEAD

/* "$(function(){});" is shorthand for "$(document).ready(function(){});". This is known a "document ready event". The purpose of the document ready event is to prevent any jQuery code from running before the document is finished loading (is ready). */

$(function() {





  /* Declaring all the vaiables used in the file using one "var". One "var" used with "," after each different variable assignment to declare all variables in 1 declaration.

  Converting each jquery fetch to a variable will store each image in cache.

  Creating a variable named "$images" and assigning its value to the HTML div that has the ID of "images" using a jquery selector of "$("#images")" . */
  var $images = $("#images"),

    /* Assigning jquery fetch to a variable named $ball. Why is this variable written with a "$" in front of it? */ 
    $ball = $("#ball"),

    /*audioBallSound is appended with .get(0) because jquery does not support HTMLs <audio> tag, .get(0) turns audioBallSound into a Vanilla JS object */ 
    audioBallsound = $('#ball_sound').get(0),

    /* Veriable which will be used to prevent infinite firing of .keydown jquery method */ 
    preventMultipleSpace = false;





  $images

    .addClass('ready')

    .mousedown(function() {

      $(this).addClass('pose');

    })

    .mouseup(function() {

      $(this).removeClass('pose');

    });


  $(document)

    .keydown(spaceBarDown)

    .keyup(spaceBarUp);


  function spaceBarDown(e) {

    if (e.which == 32) {

      //Writing preventMultipleSpace with no = followed by value is short hand for true. !preventMultipleSpace would be false.
      if (preventMultipleSpace) {

        //return tells interpreter to stop and go back to where it was
        return;
        }

      preventMultipleSpace = true;

      playBall(e);

      $images.addClass('throw');

      $ball
        .finish()
        .show()
        .animate(
          {left:'835px'},
          500,
          function(){
            $(this).css({display:'none',left:'520px'});
          });
    }
  }


  function handleUp(e) {

      if (e.which == 32) {

        preventMultipleSpace = false;

        $images.removeClass('throw');

        $ball.hide();
      }
    }

    function playBall(e) {

    audioBallsound.volume = 0.5;

    audioBallsound.load();

    audioBallsound.play();

  }
});
=======
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
>>>>>>> 6a264354ef0e33aa9e5a09d05aad9f825c49ac75
