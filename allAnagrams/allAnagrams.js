/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

 var allAnagrams = function(string) {
  // Your code here.
var length=string.length**string.length
var obj={}
var i =0;
var result =[]
while(i<length){
  var str = "";
  while(str.length < string.length){
    str += string[Math.floor(Math.random() * string.length)];
  }
  if(obj[str]===undefined){
    obj[str] =null 
    i++
  }
}
return Object.keys(obj)

};



