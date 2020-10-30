const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(fullDate) {
  
if (fullDate == null) {
  return 'Unable to determine the time of year!';
};

if (toString.call(fullDate) != '[object Date]') throw Error('Not a date!');


let date = fullDate;
let month = date.getMonth();
let seasons = ['winter', 'spring', 'summer', 'fall'];

switch (month) {
  case 0:
  case 1:
  case 11:
    // console.log(seasons[0]);
    return seasons[0];
    break;

    case 2:
    case 3:
    case 4:
    
    // console.log(seasons[2]);
    return seasons[1];
    break;

    case 6:
    case 7:
    case 5:
    // console.log(seasons[3]);
    return seasons[2];
    break;

    case 8:
    case 9:
    case 10:
    
    // console.log(seasons[4]);
    return seasons[3];
    break;

};

};


// function getSeason(fullDate) {

// if (fullDate == null) {
//   alert ('Unable to determine the time of year!');
// };

// if (toString.call(fullDate) != '[object Date]') {
//   throw Error('Not a date!');
// };

// let date = fullDate;
// let month = date.getMonth();
// let seasons = ['winter', 'spring', 'summer', 'fall'];



// switch (month) {
//   case 0:
//   case 1:
//   case 11:
//     console.log(seasons[0]);
//     return seasons[0];
//     break;

//     case 2:
//     case 3:
//     case 4:
    
//     console.log(seasons[2]);
//     return seasons[2];
//     break;

//     case 6:
//     case 7:
//     case 5:
//     console.log(seasons[3]);
//     return seasons[3];
//     break;

//     case 8:
//     case 9:
//     case 10:
    
//     console.log(seasons[4]);
//     return seasons[4];
//     break;

// };

// };

// getSeason(new Date(1456, 7, 2, 1, 50, 9, 238));
// getSeason('https://www.famousbirthdays.com/faces/disguised-toast-image.jpg');

