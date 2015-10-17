var generate = function(length) {
	var $row = $('.row');
	for (var i = 0; i < length; i++) {
		$row.append('<div class="square"></div>');
	};
	for (var i = 0; i < length - 1; i++) {
		$('#rest').append($row.clone());
	};
	var width = $('#container').css('width');
	var height = $('#container').css('height');
	width = parseInt(width.replace('px', '')) / length;
	height = parseInt(height.replace('px', '')) / length;
	$('.square').css('width', width + 'px');
	$('.square').css('height', height + 'px');
	hover();
};

var hover = function() {
	$('.square').mouseenter(function() {
		$(this).css('background', 'black');
	});
};

var buttons = function() {
	$('#new').click(function() {
		var length = window.prompt("Make the grid a square of what side length?");
		$('#rest').empty();
		$('.row').empty();
		generate(length);
	});
	$('#random').click(function() {
		random();
	})
}

var random = function() {
	var red = Math.floor(Math.random() * 255)
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	var colour = "rgba( " + red + ", " + green + ", " + blue + ", 1)"
	$('.square').mouseenter(function() {
		$(this).css('background', colour);
	});
}

$(document).ready(function() {
	generate(16);
	buttons();
});