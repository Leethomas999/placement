// HINT: You can delete this console.log after you no longer need it!

console.log('JavaScript code has loaded!')

// First, tell us your name

let yourName = "Lee Thomas" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type

let gb = 0      // Ginger bread

let cc = 0      // Chocolate Chip

let sugar = 0   // Sugar Sprinkle

let total=0   // Total

// Code to update name display 

document.getElementById("credit").textContent = "Created by Lee Thomas"

// Event listener for clicks on the "+" button for Ginger Bread cookies

document.getElementById("add-gb").addEventListener("click", function() {

    // HINT: You can delete this console.log after you no longer need it!

    console.log("Ginger bread + button was clicked!")

    gb+=1;

    document.getElementById("qty-gb").textContent=gb;

    total+=1;

    document.getElementById("qty-total").textContent=total;

})


document.getElementById("minus-gb").addEventListener("click", function() {

    gb-=1;

    document.getElementById("qty-gb").textContent=gb;

    total-=1;

    document.getElementById("qty-total").textContent=total;

})

// Event listener for clicks on the "+" button for Chocolate Chip Cookies

document.getElementById("add-cc").addEventListener("click", function() {

    cc+=1;

    document.getElementById("qty-cc").textContent=cc;

    total+=1;

    document.getElementById("qty-total").textContent=total;

})

document.getElementById("minus-cc").addEventListener("click", function() {

    cc-=1;

    document.getElementById("qty-cc").textContent=cc;

    total-=1;

    document.getElementById("qty-total").textContent=total;

})

document.getElementById("add-ss").addEventListener("click"),fuction()
   ss=+1;



// TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked

// sugar is the same as above 

// Event listener for clicks on the "+" button for Sugar Sprinkles cookies

// TODO: Hook up event listeners for the rest of the buttons 
 