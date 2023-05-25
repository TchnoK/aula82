var mouseEvent = "empty"
var lastpositionX, lastpositionY

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "purple";
widthline = 1;

canvas.addEventListener("mousedown", mymousedown);
function mymousedown() {
    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", mymousemove)
function mymousemove(e) {
    positionmouseX = e.clientX - canvas.offsetLeft;
    positionmouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = widthline;
        ctx.moveTo(lastpositionX, lastpositionY);
        ctx.lineTo(positionmouseX, positionmouseY);
        ctx.stroke()
    }
    lastpositionX = positionmouseX
    lastpositionY = positionmouseY
}
canvas.addEventListener("mouseup", mymouseUp)
function mymouseUp() {
    mouseEvent = "mouseup";
}

function cleararea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}