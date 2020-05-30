var doorImage1 = document.getElementById("door1");
var doorImage2 = document.getElementById("door2");
var doorImage3 = document.getElementById("door3");

var botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
var beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
var spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
var closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

var numClosedDoors = 3;
var openDoor1;
var openDoor2;
var openDoor3;
var startButton = document.getElementById("start");
var currentlyPlaying = true;

const randomChoreDoorGenerator = ()=>{
  var choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;

  }
  else if (choreDoor === 1){
    openDoor2 = botDoorPath;
     openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;

  }
  else{
    openDoor3 = botDoorPath;
     openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;

  }

}

doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying){
     doorImage1.src = openDoor1;
  playDoor(doorImage1);

  }
 
  }

doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentlyPlaying){
     doorImage2.src = openDoor2;
  playDoor(doorImage2);

  }

}
doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying){
     doorImage3.src = openDoor3;
  playDoor(doorImage3);

  }
  
  
}

startButton.onclick = () => {
  if(!currentlyPlaying){
  startRound();}
  
}

function startRound(){
  
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
  
}

const gameOver = (status) => {
  if(status === "win"){
    startButton.innerHTML = "YOU win! PLay again?"
  }
  else{
    startButton.innerHTML = "Game over! PLay again?"
  }
  currentlyPlaying = false;


}

function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }
  else{
    return false;
  }

}

function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }
  else{
    return true;
  }

}

function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver("win");
  }
  else if(isBot(door)){
    gameOver();

  }
}

startRound();