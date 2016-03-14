//---Global Variables

var trainData = new Firebase ("https://trainschedulehmwk.firebaseio.com/");
var name ="";
var destination = "";
var frequency = 0;
var nextArrival = 0;
var minAway =0;


//--Functions 

$('#submit').on('click', function(){

	name = $('#name').val().trim();
	destination = $('#destination').val().trim();
	frequency = $('#frequency').val().trim();
	nextArrival= $('#nextArrival').val().trim();
	minAway = $('#minAway').val().trim();
	console.log('1');
	$('.table').append("<tr>"+
						"<td>"+name+"</td>"+
						"<td>"+destination+"</td>"+
						"<td>"+frequency+"</td>"+
						"<td>"+nextArrival+"</td>"+
						"<td>"+minAway+"</td>");
	console.log('2');
	
	trainData.push({
		name: name, 
		destination: destination,
		start: start,
		frequency: frequency
	});

	$('#name').val('');
	$('#role').val('');
	$('#date').val('');
	$('#rate').val('');

return false;

});



employeeData.on('child_added', function(snapshot, prevChildKey){
	var newPost = snapshot.val();
	$('#past').append(newPost);
});







//--Main 

