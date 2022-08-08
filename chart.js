// Select Chart Element
const chart = document.querySelector(".chart")

// Create Canvas Element
const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// Append canvas to chart element
chart.appendChild(canvas);

// Get the context of the canvas
const ctx = canvas.getContext("2d");

// Set the line width
ctx.lineWidth = 8;

// Circle radius
const R = 20;

// Define colors
const incomeColor = "#3affa3";
const expenseColor = "#00574b";

function drawCircle(color, ratio, anticlockwise){

    ctx.strokeStyle = color;
    ctx.beginPath();
    
    //@param: X position, Y position, radius, start angle, end angle, anticlockwise?
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart(income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income + outcome);

    drawCircle(incomeColor, - ratio, true);
    drawCircle(expenseColor, 1 - ratio, false);
}



