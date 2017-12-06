var Enumeration = function() {}

Enumeration.prototype.find = function(array, callback) {
  for(let item of array) {
    const isItem = callback(item);

    if (isItem) {
      return item;
    }
  }
}

Enumeration.prototype.map = function(array, callback) {
  arrayNumbers = [];
  for(let num of array) {
    result = callback(num);
    arrayNumbers.push(result);
  }
  return arrayNumbers;
}

Enumeration.prototype.filter = function(array, callback){
  arrayNumbers = [];
  for(let num of array){
    if(callback(num)){
      arrayNumbers.push(num);
    }
  }
  return arrayNumbers;
};

Enumeration.prototype.some = function(array, callback) {
  for(let num of array) {
    if(callback(num)) {
      return true;
    }
  }
  return false;
}

Enumeration.prototype.every = function(array, callback){
   for(let item of array){
     if(callback(item) === false){
       return false;
     }
   }
   return true;
}

Enumeration.prototype.reduce = function(array, callback){
  let total = 0;
  for(let num of array){
    total = callback(total, num);
  }
  return total;
}

module.exports = Enumeration;
