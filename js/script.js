// Kristin Skelton 2/28/2015
// Script for style web page

//Variables for url
var url = "http://api.bing.net/qson.aspx?Query=";
var endUrl = "&JsonType=callback&JsonCallback=?";

// Function to fill results while the user is typing
$('input').on('keyup', function() {
	
	$.ajax({
		//Combine start and end url with results value
		url: encodeURI(url + $(this).val() + endUrl),
		dataType: 'jsonp'
	}).done(function(response){
		//Get results
		var results = response.SearchSuggestion.Section;

		$('#results').empty();

		//Iterate through the results array and display the values in the results div
		$.each(results, function(i, value){	
			var html = $('<a href="">' + value.Text + '</a>');
			
			//Open a new window when result is selected
			$('a').click(function(){
				window.open("http://www.bing.com/search?q=" + value.Text);
			});
			//Append the results to the results div
			$('#results').append(html);
		});
	});
});