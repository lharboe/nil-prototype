$(document).foundation();


var addKernel = function(data) {

	var item = "<div class='item small-3 cell'></div>";

	var canvas = $("<canvas/>");

	console.log(canvas[0]);
	var ctx = canvas[0].getContext("2d"),
    	img = data;

	// Get a pointer to the current location in the image.
	var palette = ctx.getImageData(0,0,160,120); //x,y,w,h
	// Wrap your array as a Uint8ClampedArray
	palette.data.set(new Uint8ClampedArray(img)); // assuming values 0..255, RGBA, pre-mult.
	// Repost the data.
	ctx.putImageData(palette,0,0);


	$(".kernels").append($(item).append(canvas));
}

addKernel([27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,]);
addKernel([27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,]);
addKernel([27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,27,32,26,28,200,10,20,]);