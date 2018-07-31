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

	useName=document.getElementById("name");
	nameArray[commId]=useName.elements["userName"].value;
	displayArray[0]=nameArray[commPart]

	useScore=document.getElementById("score");
	scoreArray[commId]=useScore.elements["reviewScore"].value;
	displayArray[1]=scoreArray[commPart]



	useComment=document.getElementById("comment");
	commentArray[commId]=useComment.elements["userReview"].value;
	displayArray[2]=commentArray[commPart]


	commPart++


	commId++

	for (var j = commPart-1; j < commPart; j++) {
		avgArray[j]=displayArray[1]
	}

	for (var i = 0; i < displayArray.length; i++) {
		$("#commOne").append(displayArray[i]+"<br><br>")
	}
		$("#commOne").append("<hr>")


}