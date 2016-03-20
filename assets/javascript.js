//---Global Variables

var trainData 	= new Firebase ("https://trainschedulehmwk.firebaseio.com/"); // reference to Firebase
var name 		="";
var destination = "";
var frequency 	= 0;
var nextArrival = 0;
var minAway 	= 0;
var firstTrain 	="";
var now = moment();





//--Functions 

$('#submit').on('click', function(){

	name 		= $('#name').val().trim();
	console.log(name);//-Test Variables

	destination = $('#destination').val().trim();
	console.log(destination);//-Test Variables

	frequency 	= $('#frequency').val();
	console.log(frequency);//-Test Variables

	firstTrain 	= $('#firstTrain').val();
	console.log (firstTrain);//-Test Variables

	var firstTimeConverted = moment(firstTrain,"hh:mm").subtract(0, "years");
	console.log(firstTimeConverted._i);//-Test Variables

	// Calculation tp get time away
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
	console.log("DIFFERENCE IN TIME: " + diffTime);//-Test Variables

	// Calculations to get current minutes away
	var tRemainder = diffTime % frequency; //time apart
			console.log(tRemainder);//-Test Variables
		
	var minAway = frequency - tRemainder;//mintes until train calculation
		console.log("MINUTES TILL TRAIN: " + minAway);//Test variables
		
	nextArrival = moment().add(minAway, "m").format("hh:mm A");//next arrival calculation
			console.log("ARRIVAL TIME: " + nextArrival);//Test variables


	//Append to table
	$('.table').append("<tr>"+
						"<td>"+name+"</td>"+
						"<td>"+destination+"</td>"+
						"<td>"+now.format("hh:mm A")+"</td>"+
						"<td>"+frequency+"</td>"+
						"<td>"+nextArrival+"</td>"+
						"<td>"+minAway+"</td>");

	
	//Pusching to Firebase
	trainData.push({
		name: name, 
		destination: destination,
		frequency: frequency,
		//nextArrival: nextArrival,
		minAway: minAway,
		firstTrain: firstTrain
	});

	$('#name').val('');
	$('#destination').val('');
	$('#frequency').val('');
	$('#rate').val('');

return false;

});



//If someone adds info
trainData.on('child_added', function(snapshot, prevChildKey){
	var newPost = snapshot.val();
	$('#past').append(newPost);
});







//--Main 

