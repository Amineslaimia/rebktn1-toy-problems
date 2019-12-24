/*
Balanced Brackets
Given a string, return true if its arrangement of parenthesis (), curly-brackets {}, and square-brackets [] would be considered valid in code and mathematics (is balanced).

isBalanced("(x + y) - (4)") // true
isBalanced("(((10 ) ()) ((?)(:)))") // true
isBalanced("[{()}]") // true
isBalanced("(50)(") // false
isBalanced("[{]}") // false
*/

var isBalanced = function(str) {
    var  paraesCount =0;
    var  curlyCount =0;
    var  squareCount =0;
    
      for (var i = 0 ;i <str.length; i++){
          if(str[i]==='(')
          paraesCount++;
          if(str[i]===')')
          paraesCount--;
          if(str[i]==='{')
          curlyCount++;
          if(str[i]==='}')
          curlyCount--;
          if(str[i]==='[')
          squareCount++;
          if(str[i]===']')
          squareCount--;
          console.log(paraesCount,curlyCount =0,squareCount)
          if(paraesCount <0 ||curlyCount<0 ||squareCount<0 ){
              return false
          }
      } 
      return(paraesCount===0 &&curlyCount===0 &&squareCount===0 )
  };