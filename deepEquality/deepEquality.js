/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
var deepEquals = function(apple, orange) {
    for (var key in apple) {
      if (apple.hasOwnProperty(key) !== orange.hasOwnProperty(key)) return false;
      switch (typeof (apple[key])) {
        case 'object':
          if (!deepEquals(apple[key], orange[key])) return false;
          break;
        case 'function':
          if (typeof (apple[key]) == 'undefined' || (apple[key].toString() != orange[key].toString())) return false;
          break;

          
        default:
          if (apple[key] != orange[key]) return false;
      }
    }
  
    return true;
  };
