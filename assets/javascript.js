//---Global Variables

var trainData 	= new Firebase ("https://trainschedulehmwk.firebaseio.com/");
var name 		="";
var destination = "";
var frequency 	= 0;
var nextArrival = 0;
var minAway 	=0;
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
	nextArrival= $('#nextArrival').val();
	firstTrain = $('#firstTrain').val();
	console.log(firstTrain)
	minAway 	= $('#minAway').val()
	console.log(minAway);
	$('.table').append("<tr>"+
						"<td>"+name+"</td>"+
						"<td>"+destination+"</td>"+
						"<td>"+frequency+" mins </td>"+
						"<td>"+nextArrival+"</td>"+
						"<td>"+minAway+"</td>");
	console.log('2');
	
	trainData.push({
		name: name, 
		destination: destination,
		frequency: frequency,
		nextArrival: nextArrival,
		minAway: minAway,
		firstTrain: firstTrain
	});

	$('#name').val('');
	$('#destination').val('');
	$('#frequency').val('');
	$('#nextArrival').val('');
	$('#rate').val('');

return false;

});



trainData.on('child_added', function(snapshot, prevChildKey){
	var newPost = snapshot.val();
	$('#past').append(newPost);
});







//--Main 

