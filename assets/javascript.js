//---Global Variables

var trainData 	= new Firebase ("https://trainschedulehmwk.firebaseio.com/");
var name 		="";
var destination = "";
var frequency 	= 0;
var nextArrival = 0;
var minAway 	= 0;
var firstTrain 	="";
var now = moment();


//Momnent JS calulations------------------------------------

$('#time').html(now.format("LT"));



//--Functions 

$('#submit').on('click', function(){

	name 		= $('#name').val().trim();
	console.log(name);
	destination = $('#destination').val().trim();
	console.log(destination);
	frequency 	= $('#frequency').val();
	console.log(frequency);
	firstTrain = $('#firstTrain').val();
	var firstTimeConverted = moment(firstTrain,"hh:mm").subtract(0, "years");
		console.log(firstTimeConverted._i);


	// nextArrival= 5;
	// console.log(nextArrival);
	

	console.log(firstTrain)
	// Calculation tp get time away
	var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
		console.log("DIFFERENCE IN TIME: " + diffTime);

	// Calculation to get current minutes away
		//time apart
	var tRemainder = diffTime % frequency; 
			console.log(tRemainder);
		//mintes until train
	var minAway = frequency - tRemainder;
		console.log("MINUTES TILL TRAIN: " + minAway);
		//next arrival
	nextArrival = moment().add(minAway, "m").format("hh:mm A");
			console.log("ARRIVAL TIME: " + nextArrival);


	console.log(minAway);
	$('.table').append("<tr>"+
						"<td>"+name+"</td>"+
						"<td>"+destination+"</td>"+
						"<td>"+now.format("hh:mm A")+"</td>"+
						"<td>"+frequency+"</td>"+
						"<td>"+nextArrival+"</td>"+
						"<td>"+minAway+"</td>");
	console.log('2');
	
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



trainData.on('child_added', function(snapshot, prevChildKey){
	var newPost = snapshot.val();
	$('#past').append(newPost);
});







//--Main 

