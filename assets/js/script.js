
console.log('dark mode');


$(document).ready(function(){

	//------------------------------------
	// show hide each itme
	//------------------------------------

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(){
		$('body').toggleClass('darkmode');
	});

});