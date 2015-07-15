$(document).on("ready", function() {

// The three jQuery functions above simply hide the submission form upon dom ready.
$(".formContainer").hide();

$("body").on("click", ".addMediaButton", function(){
	$(".buttonDiv").hide()

})

$("body").on("click", ".addMediaButton", function(){
	$(".formContainer").show()
	
})


// Arrays for data structures. 

var levelsObject = { 
	Scrub: 0,
	Scallywag: 5,
	Beginner: 10,
	Miley Cyrus: 25;
	Rookie: 15,
	Novice: 20,

}




var personArray = []

var entriesArray = [] 

var personObject = function(name, totalProps, levelRating) {
	this.name = name;
	this.totalProps = 0;
	this.levelRating = levelRating;

}


var FormsObject = function(location, description, uploadFile){
	this.location    = location;
	this.description = description;
	this.uploadFile  = uploadFile;

}




// protototype Create method. Grants html to be injected into news feed upon submit click event. not sure how to incorporate but I do know its better from a data-driven app perspective.  

// FormsObject.prototype.create = function() {
// 	var tempLocation = $(".formLocation").val()
// 	var tempDetails = $(".formDescription").val()

// 	var submittedInfo = new FormsObject(tempLocation, tempDetails)
	
// 	appenditure = $("<div class='submittedAchievementBox'><div class='col-md-2'><p>" + this.location + "</p></div><div class='starsContainer'><span class='star-rating'><input class='star' type='radio' name='rating' value='1'><i></i><input class='star' type='radio' name='rating' value='2'><i></i><input class='star' type='radio' name='rating' value='3'><i></i><input class='star' type='radio' name='rating' value='4'><i></i><input class='star' type='radio' name='rating' value='5'><i></i></span><strong class='choice'>Choose a rating</strong></div><div class='col-md-12'><p>" + this.description + "</p></div></div>")
// 	submittedInfo.html = appenditure
	
// 	return submittedInfo

// }


// entriesArray.forEach(function(element) {
// 		$(".newsFeed").prepend(element.html)
// })





// The function below defines click event functionality when submitting the form. 
// It appends most recent to top (prepends). 

$("body").on("click", ".submitButton", function() {
	event.preventDefault()
	var tempLocation = $(".formLocation").val()
	var tempDetails = $(".formDescription").val()
	// var temppUploadFile = $(".uploadFile").val()


	var submittedInfo = new FormsObject(tempLocation, tempDetails)

	submittedInfo.html = $("<div class='submittedAchievementBox'><div class='col-md-2'><p>" + tempLocation + "</p></div><div class='madPropsButtonContainer'><input type='image' class='madPropsButton' src='http://photo.solidstockartcontent.com/stock-illustration-fist-bump-or-punching-on-white-background-113081.png' alt='Submit Form' /></div><div class='propsButtonContainer'><p class='propsButtonText'><input type='image' class='propsButton' src='http://previews.123rf.com/images/tribalium123/tribalium1231303/tribalium123130300129/18787559-Human-okay-hand-button-icon-OK-hand-symbol--Stock-Vector-ok-best-quality.jpg' alt='Submit Form' /></div></div>")
	submittedInfo.whitehtml = $("<div class='submittedAchievementBox2'><div class='col-md-2'><p>" + tempLocation + "</p></div><div class='madPropsButtonContainer'><input type='image' class='madPropsButton' src='http://photo.solidstockartcontent.com/stock-illustration-fist-bump-or-punching-on-white-background-113081.png' alt='Submit Form' /></div><div class='propsButtonContainer'><p class='propsButtonText'><input type='image' class='propsButton' src='http://previews.123rf.com/images/tribalium123/tribalium1231303/tribalium123130300129/18787559-Human-okay-hand-button-icon-OK-hand-symbol--Stock-Vector-ok-best-quality.jpg' alt='Submit Form' /></div></div>")
	entriesArray.push(submittedInfo)

	 
	var alternateColor = function() { // this alternateColor function below simply alternates the appended div in order to alternate background colors.
		entriesArray.forEach(function(element) {
			if (entriesArray.indexOf(element) % 2 === 0 ) {
				$(".newsFeed").prepend(element.html)
			}
			else {
				$(".newsFeed").prepend(element.whitehtml)
			}
		})	

		}

	alternateColor()

	$(".formContainer").hide();
	$(".buttonDiv").show();

})




// Global function to pass defintions to personObject paramaters. I couldn't get the Total Props Given 
// ticker to work without these global variables in place. 

var totalPropsKeeper = function() {
	var name = "name"
	var totalProps = 0
	// var levelRating = levelsObject.0

	var defaultPerson = new personObject(name, totalProps)
	

	return defaultPerson.totalProps
}


var totalPropsKeeperResult = totalPropsKeeper() // holds the value of totalPropsKeeper function above in variable. 




// The code block below define the behavior for the give props button within each submitted Achievement. 
// It increments the total number of props value by 1.

$(document).on("click", ".propsButtonContainer", function() {

	
	$(this).empty()
	$(this).prev().remove()

	var gaveProps = $("<p class='propsButtonText'>That's Watsup!</p>")
	
	$(this).append(gaveProps)
	
	var propsIncrementer = function() {

		totalPropsKeeperResult++

		var appendedCount = $("<h1 class='propsCount' style='font-size: 100px'>" + totalPropsKeeperResult + "</h1>")
		return appendedCount

	}

	$(".propsCount").remove()

	$(".totalPropsContainer").append(propsIncrementer)


})


// this function acts only on props button click. when clicked checks current value of total props 
// given and sees if the level rating needs to be changed. 

$(document).on("click", ".propsButtonContainer", function() {
	
	var levelChanger = function() {
		for (var prop in levelsObject) {
			if ( levelsObject.hasOwnProperty(prop) ) {
				var value = levelsObject[prop]
			} 
			if (value === totalPropsKeeperResult ) {
				$(".levelTitle").remove()
				$(".currentLevel").append(prop)
			}
				
		}
	}

		levelChanger()

})

	
// The code block below define the behavior for the give props button within each submitted Achievement. 
// It increments the total number of props value by 3.

$(document).on("click", ".madPropsButtonContainer", function() {

	
	$(this).empty()
	$(this).next().remove()

	var gaveMadProps = $("<p class='propsButtonText'>That's Watsup!</p>")
	
	$(this).append(gaveMadProps)

	var madPropsIncrementer = function() {

		var madProps = totalPropsKeeperResult+=3

	
		
		var appendedCount2 = $("<h1 class='propsCount' style='font-size: 100px'>" + madProps + "</h1>")
		return appendedCount2

	}
	
	$(".propsCount").remove()

	$(".totalPropsContainer").append(madPropsIncrementer)




})






















});