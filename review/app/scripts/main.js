var avgArray=[];
var commId=0
var scoreArray=[]
var nameArray=[]
var commentArray=[]
var displayArray=[]
var commPart=0;
var avg=0;
var len=0;
var total=0;
var total2=0;
$("#submit").click(function()
{
	
	$("#commOne").html(Comment())

});

function goBack () {
	window.history.back();
}

function Comment ()
{

	var useScore=" ", useName=" ", useComment=" ";


	useScore=document.getElementById("score");
	scoreArray[commPart]=useScore.elements["reviewScore"].value;
	displayArray[0]=scoreArray[commPart]
    document.getElementById("score").reset();


	if (displayArray[0]>=0 && displayArray[0]<=10){

		useName=document.getElementById("name");
		nameArray[commPart]=useName.elements["userName"].value;
		displayArray[1]=nameArray[commPart]
	    document.getElementById("name").reset();


		useComment=document.getElementById("comment");
		commentArray[commPart]=useComment.elements["userReview"].value;
		displayArray[2]=commentArray[commPart]
	    document.getElementById("comment").reset();



		commPart++
		debugger;

		if (displayArray[1]=="") {
			displayArray[1]="Anonymouse"
		}

		for (var j = commPart-1; j < commPart; j++) {
			avgArray[j]=displayArray[0]
		}


		for (var i = 0; i < displayArray.length; i++) {
			if (i==0) {
			$("#commOne").append("<b>"+displayArray[1]+" Rates this: "+"</b>")
			}
			if (i!=1) {		
				$("#commOne").append(displayArray[i]+"<br><br>")
			}
			else {
				if (displayArray[2]=="") {
					$("#commOne").append("<b>"+displayArray[1]+" Says Nothing"+"</b>")

				}
				else {
				$("#commOne").append("<b>"+displayArray[1]+" Says:"+"</b>"+"<br><br>")
				}
			}


		}
		$("#commOne").append("<hr>")
		var  total=0;
		for (var i = 0; i < avgArray.length; i++) {
			total = Number(total) + Number(avgArray[i]);
		avg=total/avgArray.length;
			$("#userAvg").empty();


		}

		$("#userAvg").append(avg)
	}
	else{
		displayArray[0]=""
	}

}

