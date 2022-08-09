var i = 0;
var dura=2000;

var g = document.querySelector(".b");

  
var millisecond=0;
var minutes=0;
var second=0;
var appms=document.querySelector(".ti3");
var apps=document.querySelector(".ti2");
var appm=document.querySelector(" .ti1");
var buttonStart=document.querySelector(".start");
var buttonStop=document.querySelector(".stop");
var buttonRestart=document.querySelector(".restart");
var Interval;

buttonStart.onclick=function(){
    clearInterval(Interval);
    Interval=setInterval(startTimer,10);
}

buttonStop.onclick = function() {
    clearInterval(Interval);
    document.querySelector(".start").innerHTML="RESUME";
    document.querySelector(".start").addEventListener("click",function(){document.querySelector(".start").innerHTML="START"
      
    });
    document.querySelector(".restart").addEventListener("click",function(){document.querySelector(".start").innerHTML="START"
      
    });
    document.querySelector(".stop").addEventListener.toggle("click",function(){Interval=setInterval(startTimer,10);})
   }



buttonRestart.onclick=function(){

    clearInterval(Interval);
    millisecond="00";
    second="00";
    minutes="00";
    appms.innerHTML=millisecond;
    apps.innerHTML=second;
    appm.innerHTML=minutes;

}

function startTimer(){

    millisecond++;
    if(millisecond<9){

        appms.innerHTML="0"+millisecond;
    }
    if(millisecond>9){
        appms.innerHTML=millisecond;}
    

    if (millisecond> 99){
       // console.log("second");
        second++;
        apps.innerHTML = "0" + second;
        millisecond = 0;
        appms.innerHTML = "0" + millisecond;
      }
      
      if (second < 9){
        apps.innerHTML = "0"+second;}
        if(second>9){
          apps.innerHTML=second;

        }
        if(second==60){
         minutes++;
         second=0;
         appm.innerHTML="0"+minutes;

        }
    
}






