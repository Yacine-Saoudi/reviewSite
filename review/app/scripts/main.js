var avgArray=[];
var commId=0;
var scoreArray=[];
var nameArray=[];
var commentArray=[];
var displayArray=[];
var commPart=0;
var total=0;
var result;

// when the submit button is clicked, the comment function is put into the "commOne" <p> tag
$("#submit").click(function()
{
	
	$("#commOne").html(Comment())

});


// function that makes you go back to the last page you were in
function goBack () {
	window.history.back();
}


// function that saves the comment in an array and appends it
function Comment ()
{
	// every time the comment function restarts these variables are reset to say nothing so that info
	// previously input wont be put again 
	var useScore=" ", useName=" ", useComment=" ";


	// gets the number put into the score input and saves it in an array
	useScore=document.getElementById("score");
	scoreArray[commPart]=useScore.elements["reviewScore"].value;
	displayArray[0]=scoreArray[commPart]
    document.getElementById("score").reset();
    // if the number is between 0 and 10 then continue the function as usual
	if (displayArray[0]>=0 && displayArray[0]<=10){

		// get whatever was typed from the "name" input and save it in the array
		useName=document.getElementById("name");
		nameArray[commPart]=useName.elements["userName"].value;
		displayArray[1]=nameArray[commPart]
	    document.getElementById("name").reset();

		// get whatever was typed from the "comment" input and save it in the array
		useComment=document.getElementById("comment");
		commentArray[commPart]=useComment.elements["userReview"].value;
		displayArray[2]=commentArray[commPart]
	    document.getElementById("comment").reset();


	    // add 1 to "commPart" which shows how many comments have been put
		commPart++

		// if the user doesnt type anything as their name they will be called anonymouse automatically
		if (displayArray[1]=="") {
			displayArray[1]="Anonymouse";
		}

		//add the score input earlier into the average array where it is saved
		for (var j = commPart-1; j < commPart; j++) {
			avgArray[j]=displayArray[0];
		}

		//goes through the whole comment array (which has the score, name of the user, and comment they wanted to share)
		for (var i = 0; i < displayArray.length; i++) {
			// when the for loop gets to displayArray[0], show the name of the user and "Rates this:"
			if (i==0) {
			$("#commOne").append("<b>"+displayArray[1]+" Rates this: "+"</b>");
			}
			// when i doesn't equal 1 in the for loop, put 2 breaks after appending it
			if (i!=1) {		
				$("#commOne").append(displayArray[i]+"<br><br>");
			}
			//otherwise do this
			else {
				// if the comment array is empty, say the user doesn't say anything about this movie
				if (displayArray[2]=="") {
					$("#commOne").append("<b>"+displayArray[1]+" Says Nothing"+"</b>");

				}
				//otherwise if he does have a name but the user says: with a bold and breaks
				else {
				$("#commOne").append("<b>"+displayArray[1]+" Says:"+"</b>"+"<br><br>");
				}
			}


		}
		//after appending the whole array, put a divider after it to separate it from the other comments
		$("#commOne").append("<hr>");
		var  total=0;
		//find the average of all the user's scores 
		for (var i = 0; i < avgArray.length; i++) {
			total = Number(total) + Number(avgArray[i]);
		avg=total/avgArray.length;
			$("#userAvg").empty();


		}
		// display all user's score and put them in the userAvg <h> tag
		$("#userAvg").append(avg)
	}
	// if the number isn't valid then make an alert saying that its invalid and reset the score array
	else{
		window.alert("Invalid movie score");
		displayArray[0]="";
	}

}

var getSearch;
var search;

function search(){

	// get what the user input in the search field
	getSearch=document.getElementById("search");
	search=getSearch.elements["inputField"].value;

	// search for it in this if statement, if the input has any of the correct terms it will
	// same the url in a variable called "result", then the "change()" function gets played
	if (search=="Mission Impossible") {
		result="reviewPage";
		change();
	}
	else if (search=="Incredibles 2" || search=="Incredibles II") {
		result="reviewPage2";
		change();
	}
	else if (search=="Mama Mia"){
		result="reviewPage3";
		change();
	}
	else if (search=="Hotel Transylvania") {
		result="reviewPage4";
		change();
	}
	else if (search=="Home") {
		result="index"
		change();
	}
	else if (search=="Truman Show") {
		result="reviewPage5";
		change();
	}
	else if (search=="Austin Powers") {
		result="reviewPage6";
		change();
	}
	// if the user puts in an incorrect search term, make an alert saying the movie doesnt exist
	else{
		window.alert("Movie doesn't exist, try again");
	}



};

// when change is played, put the website name with the result gotten from above and it will lead you to that page
function change(){
	 window.location.href = "http://localhost:9000/"+result+".html";
};

