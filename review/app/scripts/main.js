var useInput;
var locArray=["commOne","commTwo","commThree","commFour"];
var commId=0
var scoreArray=[]
var nameArray=[]
var commentArray

$("#submit").click(function()
{
	debugger;

	var useScore, useName, useComment

	useScore=document.getElementById("score") ;
	scoreArray[commId=useScore.elements["reviewScore"].value;
	document.getElementById(commentArray[commId]).innerHTML=locArray[commId]

	useName=document.getElementById("name");
	nameArray[commId]=useName.elements["reviewName"]
	document.getElementById(commentArray[commId]).innerHTML=locArray[commId]

	useComment=document.getElementById("comment");
	commentArray[commId]=useName.elements["userReview"]
	document.getElementById(commentArray[commId]).innerHTML=locArray[commId]


	commId++

});
