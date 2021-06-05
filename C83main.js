
var last_x,last_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
line_width=2;
var width=screen.width;
new_width=screen.width-50;
new_height=screen.height-400;
if(width <992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(event){
    color=document.getElementById("color").value;
    line_width=document.getElementById("width").value;
    last_x=event.touches[0].clientX-canvas.offsetLeft;
    last_y=event.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(event){
current_x=event.touches[0].clientX-canvas.offsetLeft;
current_y=event.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=line_width;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
last_x=current_x;
last_y=current_y;
}
function clearArea(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}