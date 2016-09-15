/**
 * Hockey is the game. Make it happen.
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a 
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 * 
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 * 
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * PUNT - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

 
 $(function(){
 
 	// MODEL
    // Source of truth
    var capsShoot = $('#caps-shoot');
    var pensShoot = $('#pens-shoot');
    var reset = $('#reset');
    var capsShotCount = 0;
    var capsGoalCount = 0;
    var pensShotCount = 0;
    var pensGoalCount = 0;
    var resetCount = 0;

	//VIEW
	//Rendering data to user
	document.body.style.backgroundImage = "url('images/ice.gif')";

  function render () {
	    $('#caps-numshots').text(capsShotCount);
	    $('#caps-numgoals').text(capsGoalCount);
	    $('#pens-numshots').text(pensShotCount);
	    $('#pens-numgoals').text(pensGoalCount);
	    $("#num-resets").text(resetCount);
	}

	//CONTROLLER
	//Caps shots and goals
	$('#caps-shoot').click(function() {
          capsShotCount++;
          var random = Math.random();
        	if (random <= 0.27) {
        		capsGoalCount++;
        		document.body.style.backgroundImage = "url('images/RockinRed.gif')";
          }
          render();
      })
	
	//Pens shots and goals
    $('#pens-shoot').click(function() {
          pensShotCount++;
          var random = Math.random();
        	if (random <= 0.18) {
        		pensGoalCount++;
        		document.body.style.backgroundImage = "url('images/PenguinPYellow.gif')";
        	}	
          render();
      })

	//Reset counter
    $('#reset').click(function() {
       	capsShotCount = 0;
    	capsGoalCount = 0;
    	pensShotCount = 0;
     	pensGoalCount = 0;
     	resetCount++;
     	$('#caps-numshots').text(capsShotCount);
	    $('#caps-numgoals').text(capsGoalCount);
	    $('#pens-numshots').text(pensShotCount);
	    $('#pens-numgoals').text(pensGoalCount);
	    $("#num-resets").text(resetCount);
      document.body.style.backgroundImage = "url('images/ice.gif')";
	    render();
	})
	

    
 }) //end of total function