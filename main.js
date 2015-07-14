$(document).on("ready", function() {

// the three jQuery functions below simply hide the submission form upon dom ready.

$(".formContainer").hide();

$("body").on("click", ".addMediaButton", function(){
	$(".buttonDiv").hide()

})

$("body").on("click", ".addMediaButton", function(){
	$(".formContainer").show()
	
})


var levelsObject = { 
	four: "Scrub",
	100: "Scallywag",
	// 200: Beginner,
	// 300: Rooki,
	// 400: Novice,
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





// function below defines click event functionality when submitting the form. it appends most recent to top or just prepends. 

$("body").on("click", ".submitButton", function() {
	event.preventDefault()
	var tempLocation = $(".formLocation").val()
	var tempDetails = $(".formDescription").val()
	// var temppUploadFile = $(".uploadFile").val()
	// var rating = $(".star").attr("value"))


	var submittedInfo = new FormsObject(tempLocation, tempDetails)

	submittedInfo.html = $("<div class='submittedAchievementBox'><div class='col-md-2'><p>" + tempLocation + "</p></div><div class='madPropsButtonContainer'><p>Mad Props</p><input type='image' class='madPropsButton' src='http://photo.solidstockartcontent.com/stock-illustration-fist-bump-or-punching-on-white-background-113081.png' alt='Submit Form' /></div><div class='propsButtonContainer'><p class='propsButtonText'>Give 'em Props!</p><input type='image' class='propsButton' src='http://previews.123rf.com/images/tribalium123/tribalium1231303/tribalium123130300129/18787559-Human-okay-hand-button-icon-OK-hand-symbol--Stock-Vector-ok-best-quality.jpg' alt='Submit Form' /></div></div>")

	entriesArray.push(submittedInfo)

// include if statement below plust another variable with different styled class in order to alternate color of postings on page. 
	
	entriesArray.forEach(function(element) {
		$(".newsFeed").prepend(element.html)
	})
	

	$(".formContainer").hide();
	$(".buttonDiv").show();

})




entriesArray.forEach(function(element) {
		$(".newsFeed").prepend(element.html)
})


// personObject.prototype.default = function() {
var name = "name"
var totalProps = 0
// var levelRating = levelsObject.0

// console.log(levelRating.0)

var defaultPerson = new personObject(name, totalProps)
	
	
	// console.log(defaultPerson)





// this block defines the behavior for the props button within each submitted Achievement. it increments the total number of props value by one.


$(document).on("click", ".propsButtonContainer", function() {

	
	$(this).empty()
	$(this).prevAll().remove()

	var gaveProps = $("<p class='propsButtonText'>That's Watsup!</p>")
	
	$(this).append(gaveProps)
	
	defaultPerson.totalProps++

	var appendedCount = $("<h1 class='propsCount' style='font-size: 100px'>" + defaultPerson.totalProps.toString() + "</h1>")

	console.log(defaultPerson)
	$(".propsCount").remove()

	$(".totalPropsContainer").append(appendedCount)




})












});