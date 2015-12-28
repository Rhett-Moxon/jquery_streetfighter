
/* "$(function(){});" is shorthand for "$(document).ready(function(){});". This is known a "document ready event". The purpose of the document ready event is to prevent any jQuery code from running before the document is finished loading (is ready). */

$(function() {





  /* Declaring all the vaiables used in the file using one "var". One "var" used with "," after each different variable assignment to declare all variables in 1 declaration.

  Converting each jquery fetch to a variable will store each image in cache.<--doesnt seem to work.

  Creating a variable named "$images" and assigning its value to the HTML div that has the ID of "images" using a jquery selector of "$("#images")". 

  The "$" in front of the variable name is a reminder the variable is a jquery object */
  var $images = $("#images"),

    /* Creating a variable named "$ball" and assigning its value to the HTML div that has the ID="ball" using a jquery selector of "$("#ball")".

    The "$" in front of the variable name is a reminder the variable is a jquery object */ 
    $ball = $("#ball"),

    /* "audioBallSound" is appended with ".get(0)" because jquery does not support HTMLs <audio> tag, ".get(0)" turns "audioBallSound" into a Vanilla JS object */ 
    audioBallSound = $('#ball_sound').get(0),

    /* "preventMultipleSpace" is a varible which is being set to false which will be used to prevent infinite firing of .keydown() jquery event method.

    When set to false it tells the interpreter space bar is not being pushed down. When set to true it tells the interpreter space bar is being pushed down which will tell "spaceBarDown" function to not run. */ 
    preventMultipleSpace = false;




  /* $images is a variable assigned the jquery object $("#images") which is the div assigned the ID of "images". */ 
  $images

    /* ".addClass('ready')" adds the class "ready", which contains the image "ready.gif", to $images which is the div assigned the ID of "images". */
    .addClass('ready')

    /* ".mousedown(function(){})" tells the interpreter when the left mouse button is pressed down on "$images" run an anonymous function. */
    .mousedown(function() {

    /* "$(this).addClass('pose');" adds the class "pose", which contains the image "pose.gif", to "$(this)", "$(this)" is "this" in jquery form which makes it a jquery object which allows it to use jquery methods.

     "$(this)" is the jquery form of "this", "this" works as a reference to the current object whose method or constructor is being invoked, in this case "$images" */
      $(this).addClass('pose');

    })


    /* ".mouseup(function(){})" tells the interpreter when the left mouse button is raised after being pressed on "$images" run an anonymous function. */
    .mouseup(function() {

    /* "$(this).removeClass('pose');" removes the class "pose", which contains the image "pose.gif", from "$(this)", "$(this)" is "this" in jquery form which makes it a jquery object which allows it to use jquery methods.

    After removing the class "pose" $images once again recieves the class "ready".

    "$(this)" is the jquery form of "this", "this" works as a reference to the current object whose method or constructor is being invoked, in this case "$images" */
      $(this).removeClass('pose');

    });




  /* "$(document)" is javascripts "document" selected using jquery which turns it into a jquery object and allows it to have jquery object methods applied to it.

  "document" is javascripts keyword for an HTML DOM document object. This document contains all the elements that it consists of. It is the top most level.  */ 
  $(document)

    
    /* ".keydown(spaceBarDown)" .keydown() is a jquery object event method that triggers a function on an event handler for the selected elements, in this case the event handler is pressing a key down, the key used is spacebar.

    In this case .keydown has been given the named function "spaceBarDown" to exicute. */
    .keydown(spaceBarDown)

    
    /* ".keyup(spaceBarUP)" .keyup() is a jquery object event method that triggers a function on an event handler for the selected elements, in this case the event handler is releasing a key up, the key used is spacebar.

    In this case .keydown has been given the named function "spaceBarDown" to exicute. */
    .keyup(spaceBarUp);



  /* "function spaceBarDown(e){}" is the creation of a named function named "spaceBarDown".

  "e" is shorthand for "event", so the function "spaceBarDown()" has the parameter "event" */ 
  function spaceBarDown(e) {

    /* "if" statement asking if "e.which" is equal to 32, 32 is the number assigned to the spacebar. "e.which" is short for event.which.

    "event.which" is for key or mouse events, it is a property that indicates the specific key or button that was pressed. */
    if (e.which == 32) {

      /* "if" statement asking if "preventMultipleSpace" is true. Writing "preventMultipleSpace" with no "=" and "true" is short for true. "!preventMultipleSpace" is short for false. 

      If "preventMultipleSpace" is true it means the spacebar is being pushed down via "spaceBarDown", in which case we dont want it to fire multiple times so "return". */
      if (preventMultipleSpace) {
        /* Return tells interpreter to stop and go back to where it was */
        return;
      }

      /* "preventMultipleSpace" is a varible which is being set to true which will be used to prevent infinite firing of .keydown() jquery event method.

      When set to true it tells the interpreter the space bar is being pushed down which will tell "spaceBarDown" function to not run. */ 
      preventMultipleSpace = true;

      
      /* "playBall(e);" is told to run. "playBall(e);" is a named function that tells "audioBallsound", which is a vanilla JS variable attached to the <audio> tag that has an ID="ball_sound", to set volume to a certain value, load the audio file it references and play the audio file it references. */ 
      playBall(e);

      /* "$images.addClass('throw')" adds the class "throw", which contains the image "throw.png", to "$images" which references the div assigned ID="images". */
      $images.addClass('throw');

      /* "$ball" is a jquery object that references the div with the ID="ball". The "$" in front of the variable name is a reminder the variable is a jquery object */ 
      $ball

        /* Why did you put ".finish()" here? */
        .finish()

        /* ".show()" tells "$ball" to change the css "display" value of the div with ID="ball" to whatever value it was before it was hidden. In this case the div is set to "display:none" when the document is first loaded so ".show()" will set the display to a divs default display value which is block.  */
        .show()

        /* "$ball" is given the jquery object method "animate()" which animates CSS properties. */
        .animate(

          /* "$ball" is told to animate from its current "left:" value until its "left:" value reaches 835px. */
          {left:'835px'},

          /* The animation is told to exicute over a duration of 500 milliseconds. */
          500,

          /* On completion of the animation an anonymous funtion is told to run. */
          function(){

            /* "$(this)" refers to the object that invoked it, in this case "$ball", "$(this)" is then given a CSS method which sets CSS properties to "display:none" and "left:520px", those are the CSS values given to the div when the document is first loaded. */
            $(this).css({display:'none',left:'520px'});
          });
    }
  }


    /* "function spaceBarUp(e){}" is the creation of a named function named "spaceBarUp".

  "e" is shorthand for "event", so the function "spaceBarUp()" has the parameter "event" */ 
  function spaceBarUp(e) {

    /* "if" statement asking if "e.which" is equal to 32, 32 is the number assigned to the spacebar. "e.which" is short for event.which.

    "event.which" is for key or mouse events, it is a property that indicates the specific key or button that was interacted with. */
    if (e.which == 32) {

      /* "preventMultipleSpace" being set to false will allow "spaceBarDown" to run on .keydown() the next time the spacebar is pressed down. */ 
      preventMultipleSpace = false;

      /* "$images" object which is linked to the ID="images" div has the class "throw" removed, which then defaults back to its original class of "ready". */ 
      $images.removeClass('throw');

      /* "$ball" which is linked to the ID="ball" div is told to .hide() which sets its CSS "display:" value to "none". */ 
      $ball.hide();
    }
  }

  
  /* "function playBall(e){}" is the creation of a named function named "playBall".

  "e" is shorthand for "event", so the function "spaceBarUp()" has the parameter "event" */ 
  function playBall(e) {

    /* audioBallSound, which references the audio element with ID="ball_sound", sets the elements ".volume" to "0.5", volume value ranges from 0.0 to 1.0. */ 
    audioBallSound.volume = 0.5;

    /* audioBallSound, which references the audio element with ID="ball_sound", tells the element to ".load". */ 
    audioBallSound.load();

    /* audioBallSound, which references the audio element with ID="ball_sound", tells the elements to ".play". */ 
    audioBallSound.play();
  }
});