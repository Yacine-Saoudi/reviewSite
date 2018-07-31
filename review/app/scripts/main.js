var avgArray=[];
var commId=0
var scoreArray=[]
var nameArray=[]
var commentArray=[]
var displayArray=[]
var commPart=0;
$("#submit").click(function()
{
	
	$("#commOne").html(Comment())

});



function Comment ()
{
	debugger;

	var useScore=" ", useName=" ", useComment=" ";


	useScore=document.getElementById("score");
	scoreArray[commPart]=useScore.elements["reviewScore"].value;
	displayArray[0]=scoreArray[commPart]


	useName=document.getElementById("name");
	nameArray[commPart]=useName.elements["userName"].value;
	displayArray[1]=nameArray[commPart]


	useComment=document.getElementById("comment");
	commentArray[commPart]=useComment.elements["userReview"].value;
	displayArray[2]=commentArray[commPart]


	commPart++


	for (var j = commPart-1; j < commPart; j++) {
		avgArray[j]=displayArray[0]
	}

	for (var i = 0; i < displayArray.length; i++) {
		if (i==0) {
		$("#commOne").append(displayArray[1]+" Rates this: ")
		}
		if (i!=1) {		
			$("#commOne").append(displayArray[i]+"<br><br>")
		}
		else {
			$("#commOne").append(displayArray[1]+" Says:"+"<br><br>")
		}


	}
		$("#commOne").append("<hr>")


}