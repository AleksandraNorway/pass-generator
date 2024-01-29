let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let score1 = 0;
let score2 = 0;


function addScoreHome(points) {
   score1 += points;
   homeScore.innerText = score1;
   updateScoreStyles()
   
}
function addScoreGuest(points) {
   score2 += points;
   guestScore.innerText = score2;
   updateScoreStyles()
}

function updateScoreStyles() {
if (score1 > score2) {
    homeScore.classList.add('highliter')
    guestScore.classList.remove('highliter')
} else if (score1 < score2)  {
     guestScore.classList.add('highliter')
     homeScore.classList.remove('highliter')
} else {
    // Set the border color for the else condition
     guestScore.classList.remove('highliter')
     homeScore.classList.remove('highliter') // Replace 'anotherColor' with the color of your choice
}
}
// Initialize styles on page load
updateScoreStyles();
 
 function newGame() {
     score1 = 0;
     score2 = 0;
     homeScore.innerText = "0";
     guestScore.innerText = "0";
     
 }
