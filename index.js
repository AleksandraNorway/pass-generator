const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let randNumberOne = document.getElementById("rand-number1")
let randNumberTwo = document.getElementById("rand-number2")
let generatePass = document.querySelector("button")
let inputNumber = document.getElementById("input-number")
 let alertTextError = document.getElementById("alert-text-error")
 let alertText = document.getElementById("alert-text")
  
generatePass.addEventListener('click', function(){
    randNumberOne.textContent = ""
    randNumberTwo.textContent = ""
    if(inputNumber.value < 6) {
       alertTextError.innerHTML = "Amount to small, try higher number...!"
    } else {
          for (let i=0; i < inputNumber.value; i++) {
         let newPassOne = Math.floor(Math.random() * characters.length)
         let newPassTwo = Math.floor(Math.random() * characters.length)
         randNumberOne.textContent += characters[newPassOne]
         randNumberTwo.textContent += characters[newPassTwo]
         alertText.innerHTML = "Click on password to copy"
         alertTextError.innerHTML = ""
    
   }  
   
    }
   
  
})

function copyToClipboard(element) {
    if (element.textContent) {
       navigator.clipboard.writeText(element.textContent)
            .then(() => alertText.innerHTML = "<span>Password copied to clipboard!</span>")
            .catch(err => {
                console.error("Error copying text: ", err);
                alertTextError.innerHTML = "Failed to copy password.";
            });
    }
}

randNumberOne.addEventListener('click', function() {
    copyToClipboard(randNumberOne);
});

randNumberTwo.addEventListener('click', function() {
    copyToClipboard(randNumberTwo);
});



