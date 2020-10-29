const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  


  if ( typeof sampleActivity != 'string' || !parseInt(sampleActivity) || sampleActivity > 0 || sampleActivity < 15) 
  {
    return false;
  } else {
    return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD))  
} 


};



// ! Go

// const MODERN_ACTIVITY = 15;
// const HALF_LIFE_PERIOD= 5730;

// function dateSample(sampleActivity) {


//   if (typeof sampleActivity == 'string') {
//       if (sampleActivity !== null || sampleActivity !== undefined || sampleActivity !== ' ' || (sampleActivity > 0 && sampleActivity < 15)) {
//         console.log(Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)));  
//         return Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD));  
//       } else {
//         console.log ('false')
//         false;
      
//     } }
//     else {
//       console.log ('false') 
//       false;
//     }
    

// //   const top = MODERN_ACTIVITY / sampleActivity;
// //   const topLn = Math.log(top);
// //   const k = 0.693 / HALF_LIFE_PERIOD;

// //   console.log(top);
// //   console.log(topLn);
// //   console.log (k);
// //   console.log (Math.ceil(topLn / k));

// //   // console.log (Math.ceil(top / k));

// //   console.log( 'Итого' + ' ' + Math.ceil((Math.log(MODERN_ACTIVITY / sampleActivity)) / (0.693 / HALF_LIFE_PERIOD)));

// //   return (topLn / k);

// // if ((arguments == number) || (arguments > 0 && arguments <= MODERN_ACTIVITY)){

// // }

// };

// dateSample('8');
