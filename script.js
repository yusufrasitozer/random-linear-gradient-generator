// Variables ------------------------------------------------------
const generate = document.getElementById('generate')
const hex = document.getElementById('hex')
const hex1 = document.getElementById('hex1')




// Functions --------------------------------------
// Generate Gradient
function generateGradient () {
    //Rgba 1
 let x = Math.floor(Math.random() * 256);
 let y = Math.floor(Math.random() * 256);
 let z = Math.floor(Math.random() * 256);
   // Rgba 2
 let a = Math.floor(Math.random() * 256);
 let b = Math.floor(Math.random() * 256);
 let c = Math.floor(Math.random() * 256);


 let bgColor = "linear-gradient(90deg, rgba(" + x + "," + y + "," + z + "), rgba(" + a + "," + b + "," + c + ")) ";




 

 
// Insert DOM
 document.body.style.background = bgColor
 hex1.innerHTML = `CSS Code:`;
 hex.innerHTML = ` Background: ${bgColor}`;



}




// Event Listeners---------------------------------------------------
generate.addEventListener('click', generateGradient)
