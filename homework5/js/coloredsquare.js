
function(){
var maxZ = 1000;
window.onload = function(){
var add=document.getelementbyid("add");
add.onclick=addsquare;
var colors=document.getelementbyid("colors");
colors.onclick=changecolors;
var squareCount = parseInt(Math.random()*21)*30;
for(var i = 0; i < squarecount; i++){
addSquare();
}
};
function changeColors(){
var squares=document.querySelectorall("#squarearea div")
for (var i=0; i<square.length; i++){
square[i].style.backgroundcolor= getrandomcolor();
}
}

function addSquare() {
var square = document.createElement("div");
square.classname = "square";
square.style.left=parseInt(Math.random() *650)+ "px";
square.style.top=parseInt(Math.random() *250)+ "px";
square.style.backgroundcolor= getrandomcolor();
square.onclick=squareclick;
var squareArea = document.getElementById("squarearea");
squareArea.appendChild(square);
}

function getrandomcolor() {
var letters="0123456789abcdef";
var result= "#"
for (var i = 0; i <6; i++){
result +=letters.charAt(parseInt (math.random( ) * letters.length));
}
return result;
}
function square.click(){
var oldZ = parseInt(this.style.zIndex);
if (oldZ ==maxZ) {
this.parentNode.removeChild(this);
}else {
maxZ++;
this.style.zIndex = maxZ;
}
}
})();
