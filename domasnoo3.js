var tort;         
var hare;
var len = 70;
var track;
var goagain;
var picture;
var intervalId;
var seconds;

function moveTort() {
   var type = Math.floor(1 + Math.random() * 10);
   if(type <= 5) {
      tort += 3;
   } 
   else if (type <= 7) {
      tort -= 6;
   } 
   else {
      tort++;
   }
   if(tort < 0) {
      tort = 0;
   } 
   else if(tort > len-1) {
      tort = 69;
   } 
} 
function moveHare() {

   var type = Math.floor(1 + Math.random() * 10);
   if(type <= 2) {
      ;
   }
   else if (type <= 4) {
      hare += 9;
   }
   else if (type <= 5) {
      hare -= 12;
   }
   else if (type <= 8) {
      hare++;
   }
   else {
      hare -=2;
   }

   if(hare < 0) {
      hare = 0;
   }
   else if(hare > len-1) {
      hare = 69;
   }
} 
function finish() {

   var startTxt = document.getElementById("start");
   var raceTime = document.getElementById("time");

   if (tort == len-1 && hare == len-1) {
      startTxt.innerHTML = " TIE ";
      picture.innerHTML = "<img src = 'tie.jpg' alt='Tied tortoise and hare'>";
   }

   else if (tort == len-1) {
      startTxt.innerHTML = " Tortoise wins!  ";
      picture.innerHTML = "<img src = 'tortoise.jpg' alt='tortoise'>";

   }
   
   else {
      startTxt.innerHTML = " Hare wins! ";
      picture.innerHTML = "<img src = 'hare.jpg' alt='hare'>";
   }

   raceTime.innerHTML = "Timer: " + seconds + " s";
} 

function move() {

   moveTort();
   moveHare();
   ++seconds;

   displayTrack();

   // Race has ended
   if (tort == len-1 || hare == len-1) {
      clearInterval(intervalId);
      finish();

      goagain.value = "Odnovo!";
      goagain.disabled = false;
      goagain.hidden = false;
   }
} 
function displayTrack() {

   var positions = "<tr class='track'>";

   for (var i = 0; i < len; i++) {
      var value = "<td>";

      if(i == hare && i == tort) {
         value = "<td class='occupied'>Ouch!";
      }
      else if(i == tort) {
         value = "<td class='occupied tort'>T";
      }
      else if(i == hare) {
         value = "<td class='occupied hare'>H";
      }
      positions += value + "</td>";
   }

   positions += "<tr><td>Start</td>"


   for (var i = 1; i < len-1; i++) {

      if((i + 1) % 5 == 0) {
         positions += "<td>" + (i + 1) + "</td>";
      }
      else {
         positions += "<td>" + "" + "</td>";
      }
   } // end for

   positions += "<td>Finish</td></tr>"
   track.innerHTML = positions;
} 
function startRace() {

   goagain.disabled = true;
   goagain.hidden = true;

   picture.innerHTML = "";

   var raceTime = document.getElementById("time");
   raceTime.innerHTML = "";

   tort = 0;
   hare = 0;
   seconds = 0;
  
   setTimeout(function(){intervalId = setInterval(move, 1000);}, 3500);
} 

function onLoad() {

   picture = document.getElementById("pic")
   picture.innerHTML = "<img src = 'start.jpg' alt='Tortoise and hare'>";

   goagain = document.getElementById("go");
   goagain.addEventListener("click", startRace, false);

   track = document.getElementById("racetrack");
} 

window.addEventListener("load", onLoad, false);