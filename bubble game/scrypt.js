// create bubble
function createbubble (){
    var cnt = "";
    for(i=1;i<=90;i++){
        var num = Math.floor(Math.random()*100);
    cnt += `<div class="bubble">${num}</div>`
    }
    document.querySelector(".cnt-bottom").innerHTML=cnt;
}
createbubble();

// set timer 

var timer = 60;
function runtimer (){
    var timerint = setInterval(() => {
        if (timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector(".cnt-bottom").innerHTML = `<h1>GMAE OVER<h1>`;
        }
        
    }, 1000);

}
runtimer();

// chage hit value 
var hitval = 0;
function changehit (){
     hitval = Math.floor(Math.random()*100) ;
    document.querySelector("#hit").textContent = hitval ;
}
changehit();

// score incriment
var score = 0 ;
function scoreincrement (){
 score += 10 ;
 document.querySelector("#scoreint").textContent = score;
}
// Response 
document.querySelector(".cnt-bottom").addEventListener("click", function (details){
    var num = (Number(details.target.textContent));
 if (num == hitval){
        scoreincrement();
        createbubble();
        changehit();
    }
    
})
