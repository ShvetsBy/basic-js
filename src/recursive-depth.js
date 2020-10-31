const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator { 

  calculateDepth(arr) {
    
    let arrDepth = 1;
    

    for (let i = 0; i <= arr.length; i++){

      let localDepth = 1;

      if (Array.isArray(arr[i])) {
      
        localDepth += this.calculateDepth(arr[i]);
        
        arrDepth = Math.max(arrDepth, localDepth);

      } 
      }
      
      return arrDepth;

  }
};


  // function calculateDepth(arr) {
    
  //   arrDepth = 1;

  //   for (i = 0; i < arr.length; i++){
  //     let localDepth = 1;
  //     if (Array.isArray(arr[i])) {
  //       localDepth+= this.calculateDepth(arr);
  //       arrDepth = Math.max(arrDepth, localDepth)

  //     } 
  //     }
  //     console.log (arrDeph);
  //     return arrDeph;
  //   }
    
    
  

// const arr = [1, 2, 3, 4, 5, [1], 2]

//   calculateDepth(arr); 