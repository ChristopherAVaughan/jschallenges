$(function(){

	//Part 1: Red and Black change in "FeedTemplate" header
	var i = 0;

	$("h1").click(function(){
	    i++;
	    if (i%2 != 0) {
	   $("h1").css("color", "red");
	} else {    $("h1").css("color", "black");
	}
	});


	//Part 2: The links on the side of the page – "section 1," "section 2," etc. –
    //hide every odd-numbered menu wihtout referencing them by id.
	$("h5:odd").hide(function(){
       $(this).hide();
   	});
	


	//Part 3: Swap out any reference of "bacon" to "Laser" to "Asti Spumante"
	$("p").not("aside p").text(function () {
   		return $(this).text().replace("Bacon", "Asti Spumante"); 
		});



	//Part 4: Delete the last two posts in the middle section (they have a CSS class "post")
	$(".post").slice(-2).remove();


	//Part 5: Hide images in the aside
	$("aside p").hide(function(){
       		$(this).hide();
  			});


})

