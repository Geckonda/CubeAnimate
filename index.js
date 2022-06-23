var cubeEdge = document.querySelector("#edges").childNodes;
cubeEdge = Array.prototype.slice.call(cubeEdge);
let random =  function (){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return rgb =  `rgb(${r},${g},${b})`;
}
let timer = setInterval(() =>{
    let top = document.querySelector("#top")
    let bot = document.querySelector("#bot")
    let firstColour = random();
    let secondColour = random();
    for(var i=1; i < cubeEdge.length; i+=2){
        cubeEdge[i].style.background = `linear-gradient(${firstColour}, ${secondColour})`;
        // cubeEdge[i].style.color = secondColour;
    }
    top.style.background = firstColour;
    bot.style.background = secondColour;
    if(window.screen.width > 550)
        bot.style.boxShadow = `0 0 60px 120px ${secondColour}`;
    else
        bot.style.boxShadow = `0 0 10px 30px ${secondColour}`;
},800)