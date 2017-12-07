//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION



        $( document ).ready(function() {
    console.log( "ready!" );
    
        $("button").click(function(){
    var rockPaperScissors = [
        "rock",
        "paper", 
        "scissors"
    ];
        var winnerText = "dont know yet";
        var getComputerChoice = rockPaperScissors[Math.floor(Math.random()*3)]; 
        var usersChoice = $("input").val();
        if((getComputerChoice=== "rock" && usersChoice=== "paper")||
        (getComputerChoice=== "paper" && usersChoice==="paper")||
        (getComputerChoice=== "scissors" && usersChoice==="scissors")){
                winnerText = "It's a tie!";
        }else if((getComputerChoice=== "rock" && usersChoice==="scissors")||
        (getComputerChoice=== "paper" && usersChoice==="rock")||
        (getComputerChoice=== "scissors" && usersChoice==="paper")) {
                winnerText = "getComputerChoice Wins!!";
        }else if ((getComputerChoice=== "rock" && usersChoice==="paper")||
        (getComputerChoice=== "paper" && usersChoice==="scissors")||
        (getComputerChoice=== "scissors" && usersChoice==="rock")){
                winnerText = "usersChoice Wins!";
        }
        
        $("#winner").text(winnerText);
       
       console.log(usersChoice);
       console.log(getComputerChoice);
        });
});
