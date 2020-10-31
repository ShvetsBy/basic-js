module.exports = function repeater(str, options ) {

  let result = '';
  let additionSeparator = '|';
  let separator = '+';
  
  if (typeof str != "string") {
     str = str + "";
  };

  if(options.addition === undefined){
      options.addition = '';
  };

  if(options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  };
  
  if(options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  };

  if (options.additionSeparator) {
      additionSeparator = options.additionSeparator;
  };

  if (options.separator) {
      separator = options.separator;
  };


  for (let i = 1; i<=options.repeatTimes; i++) {
    result += str;
    for (let j = 1; j<=options.additionRepeatTimes; j++) {
      result += options.addition;
      if(j < options.additionRepeatTimes) result += additionSeparator;
    };
    if(i < options.repeatTimes) result += separator;
  }

  return result;
};
  

// function repeater( str, options ) {

//   let result = '';
//   let additionSeparator = '|';
//   let separator = '+';
  
//   if (typeof str != "string") {
//     str = str + "";
//   };

//   if(options.addition === undefined){
//       options.addition = '';
//   };
//   if(options.additionRepeatTimes === undefined) {
//       options.additionRepeatTimes = 1;
//   };
//   if(options.repeatTimes === undefined) {
//       options.repeatTimes = 1;
//   };
//   if (options.additionSeparator) {
//       additionSeparator = options.additionSeparator;
//   };
//   if (options.separator) {
//       separator = options.separator;
//   };


//   for (let i = 1; i<=options.repeatTimes; i++) {
//     result += str;
//     for (let j = 1; j<=options.additionRepeatTimes; j++) {
//       result += options.addition;
//       if(j < options.additionRepeatTimes) result += additionSeparator;
//     };
//     if(i < options.repeatTimes) result += separator;
//   }

//   return result;
// };

// repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg', additionRepeatTimes: 8, additionSeparator: 'U7L9D0f8pb' })

  // let resultRepeat = '';
  // let resultSeparator = '';
  
  // let resultAddition = '';
  // let resultAdditionSeparator = '';
  // let resultadditionRepeatTimes = 1;
  // console.log(options.repeatTimes);
  // console.log(options.separator);
  // console.log(options.addition);
  // console.log(options.additionRepeatTimes);
  // console.log(options.additionSeparator);

// function plusSeparator(str) {
//   return options.separator != null || options.separator != undefined ? resultSeparator = str + options.separator : resultSeparator = str;
//   } 

// function plusAddition(resultSeparator) {
//   return options.Addition != null || options.Addition != undefined ? resultAddition = resultSeparator + options.Addition : resultAddition = resultSeparator;
//   } 


// function multiplyAddition (resultadditionRepeatTimes) {
//   return options.Addition != null || options.Addition != undefined ? resultadditionRepeatTimes =  resultAddition * options.additionRepeatTimes : resultadditionRepeatTimes = resultAddition;
// }

// function plusAdditionSeparator(resultAdditionSeparator) {
//   return options.Addition != null || options.Addition != undefined ? resultAdditionSeparator =  resultadditionRepeatTimes + options.additionSeparator : resultAdditionSeparator = resultAdditionSeparator;
//   } 
 

  
//   for (j = 1; j <= options.repeatTimes; j++) {
//     plusSeparator(str);
//     plusAddition(resultSeparator);
//     multiplyAddition (resultadditionRepeatTimes);
//     plusAdditionSeparator(resultAdditionSeparator);

    
//   }

  // for (repeatTimes in options) {
  //   console.log(options.repeatTimes);
  //   // for (let i = 0; i < options.repeatTimes; i++) {
  //     // str = str + str;
  //     // i++;
  //     // console.log(str);
  // }

  // for (separator in options) {
  //   console.log(options.separator);
  //   // str = str + options.separator;
    
  // }

  // for (addition in options) {
  //   console.log(options.addition);
  //   // str = str + options.separator;
    
  // }

  // for (additionRepeatTimes in options) {
  //   console.log(options.additionRepeatTimes);
  //   // str = str + options.separator;
    
  // }

  // for (additionSeparator in options) {
  //   console.log(options.additionSeparator);
  //   // str = str + options.separator;
    
  // }
  
  
// switch (options) {
//     case repeatTimes:

//     case separator:

//     case repeatTimes:

//     case addition:

//     case repeatTimes:

//     case additionRepeatTimes:

//     case additionSeparator:
//   }


  // console.log(resultAdditionSeparator);
  // return plusAdditionSeparator;

  
// repeater('9UXKEEt8Aq', { repeatTimes: 4, separator: '1L467Kdqx2', addition: 'IMqCarClDg'})

  


// *	`str` это **строка**, которая будет повторена
// *	`options` это **объект** опций, который содержит следующие свойства:
//   -	`repeatTimes` устанавливает число повторений `str`
//   - `separator` это строка, разделяющая повторения `str`
//   - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
//   - `additionRepeatTimes` устанавливает число повторений `addition`
//   - `additionSeparator` это строка, разделяющая повторения `addition`