
var start=new Date().getTime();
// choosing random color
function randomColor(){
  var letters='0123456789ABCDEF'.split('');
  var color='#';
  for(var i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)]
  }
  return color;
}
// close
// make random shape
function makeshape() {
   var top=Math.random()*100;
   var left=Math.random()*100;
   var width=Math.random()*300+50;


   if(Math.random()*1<0.5){
     document.getElementById('shape').style.borderRadius="50%";
   }else{
     document.getElementById('shape').style.borderRadius="0%";

   }


  document.getElementById('shape').style.width=width+"px";
  document.getElementById('shape').style.height=width+"px";
  document.getElementById('shape').style.top=top+"%";
  document.getElementById('shape').style.left=left+"%";
  document.getElementById('shape').style.display="block";
  document.getElementById('shape').style.backgroundColor=randomColor();
  start=new Date().getTime();
}
// close

setTimeout(makeshape,Math.random()*500);

var count=0
var score=0;
var best=0;
// main function
document.getElementById('shape').onclick=function functionName() {
  if(count<10){

  document.getElementById('shape').style.display="none";

  var end=new Date().getTime();
  var time=(end-start)/1000
  if(best==0){
    best=time;
  }else if (time<best && best!=0) {
    best=time

  }
  score+=time

  document.getElementById('time').innerHTML=time+"s";

  setTimeout(makeshape,Math.random()*500);

  count+=1;

}else{
  document.getElementById('shape').style.display="none";
  document.getElementById('heading').style.display="none";
  document.getElementById('start').style.display="none";
  document.getElementById('p1').style.display="none";
  document.getElementById('p2').style.display="none";
  document.getElementById('time').style.display="none";
  document.getElementById('gameover').innerHTML="GAME OVER!";
  document.getElementById('totalscore').innerHTML="YOUR MINIMUM TOATAL SCORE : ";
  document.getElementById('totaltime').innerHTML=score+" seconds";
  document.getElementById('best').innerHTML="your best click timing is ";
  document.getElementById('besttime').innerHTML=best+" seconds";
  document.getElementById('restart').innerHTML="Play Again!";



}

}
// close
