const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;




// const chainMaker = {
  
//   let chain = '';
  
//   getLength() {
//     return arguments.length();
//   },

//   addLink(value) {
    
//     this.chain += this.chain

//   },
//   removeLink(position) {
//     this.chain -= this.chain
//   },

//   reverseChain() {
    
//     let reverse = '';
    
//     for ( i = 0; i < this.lenght; i++) {
//       reverse = line.split('').reverse().join('');
//     }
    
//   },

//   finishChain() {
    
//     return chain
//   }
// };


