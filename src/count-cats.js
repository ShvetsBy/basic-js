


const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  let catArr = matrix.flat();
  let catCounter = 0;
  // console.log ('CatArr:' + ' ' + catArr)

    for (i = 0; i < catArr.length; i++) {
      // console.log(catArr[i]);
      if (catArr[i] === '^^') {
       catCounter = catCounter + 1;
      }
       
    };
    // console.log(catCounter);

  return catCounter;
};





// const CustomError = require("../extensions/custom-error");

// module.exports = 

// const matrix = [['##', 'dd', '00'],
// ['^^', '..', 'ss'],
// ['AA', 'dd', 'Oo']];

// ['##', 'dd', '00',
//   '^ ^', '..', 'ss',
//   'AA', 'dd', 'Oo'];

  
 
  // console.log (matrix.toString())

  // let flat

  

// matrix.filter(isCat);
// function countCats(/* matrix */) {
//   let cats = matrix.filter((matrixElement) => matrixElement === 'cat');

// console.log(cats);




  //   let cats = matrix
//     .toString()
//     .split("")
//     .filter( cats => parseInt(num) )
    
//     .join("")
   
//     return (cats.length);
// }
  
  
  //     catCountArr = [];


      

  // for (i = 0; i < matrix.length; i++) {
  //     catCountArr.concat(matrix.slice[i]);
      

  // }
  
  // console.log(catCountArr);

  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  
  
// isCat(matrix);