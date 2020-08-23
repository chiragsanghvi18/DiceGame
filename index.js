var randomNo = (Math.random()*6);
randomNo = Math.floor(randomNo)+1;

console.log("Player 1: "+randomNo);
var imgchoose = "images/dice"+randomNo+".png";
console.log(imgchoose);

document.getElementsByClassName("img1")[0].setAttribute("src",imgchoose);


var randomNo1 = (Math.random()*6);
randomNo1 = Math.floor(randomNo1)+1;

console.log("Player 2: "+randomNo1);
var imgchoose1 = "images/dice"+randomNo1+".png";
console.log(imgchoose1);

document.getElementsByClassName("img2")[0].setAttribute("src",imgchoose1);

if(randomNo>randomNo1){
    document.querySelector("h1").innerHTML="⛳Player 1 Wins!";
}
else if(randomNo<randomNo1){
    document.querySelector("h1").innerHTML="Player 2 Wins⛳!";
}
else if(randomNo===randomNo1){
    document.querySelector("h1").innerHTML="Draw!";
}