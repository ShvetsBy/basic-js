const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    
  if (!Array.isArray(members)) return false;

    let brandName = members.reduce(function (allNames, name) {
      return typeof(name) == 'string' ? allNames + name.trim()[0] : allNames
    }, '');
    
    return brandName.toUpperCase().split('').sort().join('');
    
  } 
  // function getFirstLetter (name) {
  //       if (typeof name != 'string') {
  //         return ' ';
  //       } else if (/[a-z]|[A-Z]/.test(name.charAt(0))) {
    
  //         return name.charAt(0).toUpperCase();
  //       }

  //       }
 
  //     const firstLetters = members.map(getFirstLetter).sort();
  //     const brandName = firstLetters.join('');
  //     const brandNameDone = brandName.trim();
  //     return brandNameDone;





// function createDreamTeam(members) {
//   if (Array.isArray(members)) 
  
//   if (!Array.isArray(members)) return false;
// 	let team = members.reduce(function (allNames, name) {
// 		return typeof(name) == 'string' ? allNames + name.trim()[0] : allNames
// 	}, '');
//   return team.toUpperCase().split('').sort().join('');
  
// } 
  
  // это работало, кроме случаев с с проьелами в начале строки
    // function getFirstLetter (name) {
    //   if (typeof name != 'string') {
    //     return ' ';
    //   } else if (/[a-z]|[A-Z]/.test(name.charAt(0))) {
  
    //     return name.charAt(0).toUpperCase();
    //   }
    //     // console.log(name.charAt(0));
  
        
    



  // stringLetters = firstLetters.toString();
  // console.log(stringLetters.trim());

  // console.log(stringLetters.split());

  // return ((members.map(getFirstLetter).join('').sort()).toString())


// createDreamTeam ([
//   ['David Abram'],
//   ['Robin Attfield'],
//   'Thomas Berry',
//   ['Paul R.Ehrlich'],
//   'donna Haraway',
//   ' BrIaN_gOodWiN  ',
//   {
//     0: 'Serenella Iovino'
//   },
//   'Erazim Kohak',
//   '  val_plumwood',
// ]);

// createDreamTeam (
//   [
//     '   William Alston ',
//     ' Paul Benacerraf',
//     '  Ross Cameron',
//     '       Gilles Deleuze',
//     '  Arda Denkel ',
//     '  Michael Devitt',
//     '  Kit Fine',
//     ' Nelson Goodman',
//     'David Kolb',
//     '   Saul Kripke',
//     '  Trenton Merricks',
//     '  Jay Rosenberg',
//   ]
// );

// createDreamTeam({'foo': 'bar'});
// 'CEJKLMNPRT'