let amt = 0;

function withdrawMoney() {
    let withdrawInput = parseFloat(prompt("How much money to withdraw?: "));
 amt = amt - withdrawInput;
return amt;

}

function depositMoney() {
    let depositInput = parseFloat(prompt("How much money to deposit?: "));
 amt = amt + depositInput;
return amt;

}

function currentBalance() {
    
     prompt(`${amt} dollars is your balance. Press any key to continue.`);
     
}
function bankFunction() {
    let userInput = prompt(
        "Choose an action: w = withdrawal | d = deposit | b = balance |  q = quit"
      ).toLowerCase();
       
     if (userInput == 'q') {
        throw new Error("Exiting the function.");
        
        
 }
   else if (userInput == 'w'){
    withdrawMoney();
       
       
            }

    else if (userInput ==  'd') {
            
        depositMoney();
        
     }

     else if (userInput ==  'b') {
        currentBalance();
        
     }   
     
     
        
     else {
        prompt("Invalid input.");
        return;
     } 
    }

    let quit=1;

  do   {
    bankFunction();}

while (quit=1);

  