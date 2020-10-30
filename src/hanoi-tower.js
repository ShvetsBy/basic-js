const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    
    let turns = (Math.pow(2, disksNumber) - 1);
    let seconds = Math.floor((turns * 3600) / turnsSpeed);
    return {turns, seconds};

};




// function calculateHanoi(disksNumber, turnsSpeed) {
  
//   let turnNumbers = (Math.pow(2, disksNumber) - 1);
//   console.log(turnNumbers);
//   let elapsedTime = Math.floor((turnNumbers * 3600) / turnsSpeed);
//   console.log(elapsedTime);

//   console.log(`turns: ${turnNumbers}, seconds: ${elapsedTime}`);
//   return `turns: ${turnNumbers}, seconds: ${elapsedTime}`
  

// };

// calculateHanoi(9, 4308); 