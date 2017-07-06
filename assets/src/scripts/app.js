import paper from 'paper';

var numLow = 10;
var numHigh = 20;
var numPts = Math.floor(Math.random() * numHigh) + numLow  

var xLow = 32;
var yLow = 32;
var xHigh = window.innerWidth;
var yHigh = window.innerHeight;
      
// Only executed our code once the DOM is ready.
window.onload = function() {
    // Get a reference to the canvas object
    var canvas = document.getElementById('scribble');
    // Create an empty project and a view for the canvas:
    paper.setup(canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    
    for ( var i=0; i < numPts; i++ ){
        var xPos = Math.floor(Math.random() * xHigh) + xLow;  
        var yPos = Math.floor(Math.random() * yHigh) + yLow;  
        path.add(new paper.Point(xPos, yPos)); 
    }
    path.closed = true;
    //path.fullySelected = true;
    path.smooth();

    paper.view.onFrame = function(event) {
        for (var i = 0; i < numPts; i++) {
            var segment = path.segments[i];
            var sinusx = Math.sin(event.time * 1 + i);
            var sinusy = Math.sin(event.time * 1 + i);
            segment.point.x = segment.point.x + sinusx/5;
            segment.point.y = segment.point.y + sinusy/10;
        }
    } 

    // Draw the view now:
    paper.view.draw();

}

