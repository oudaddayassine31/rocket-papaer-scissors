function GetComputerChoice(){
    let x = Math.random();
    let decision ;
    if (x<=0.3) {
        decision="ROCKET";
    }
    else if (x>0.33 && x<=0.66 ){
        decision="PAPER"
    }
    else {
        decision="SCISSORS"
    }
    return decision

}
 function GetHumanChoice(){
    decision=prompt("please enter Rocket , Paper or Scissors").toUpperCase();
    return decision
 }

 let HumanScore = 0 ;
 let ComputerScore = 0 ;
function PlayRound(humanchoice,computerchoice){
    if (humanchoice==computerchoice) {console.log("draw , try again ",computerchoice)}
    else if ((humanchoice == "ROCKET" && computerchoice== "PAPER") || (humanchoice=="PAPER" && computerchoice == "SCISSORS") || (humanchoice=="SCiSSORS" && computerchoice=="ROCKET")) 
    {
        console.log(`you lost ${computerchoice}  beats ${humanchoice}`) ;
        ComputerScore++
    }
    else if ((computerchoice == "ROCKET" && humanchoice== "PAPER") || (computerchoice=="PAPER" && humanchoice == "SCISSORS") || (computerchoice=="SCiSSORS" && humanchoice=="ROCKET"))
    {

        console.log(`you won ${humanchoice}  beats ${computerchoice}`) ; 
        HumanScore++ 

         
    } 
}

PlayRound(GetHumanChoice(),GetComputerChoice());