/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (num) {
    var chars = ["R","P","S"];
    var length=3**num;
    var result =[]
    for(var i = 0 ; i <length;i++){
      var len = Math.floor(Math.random() * 4);
      var str = "";
      while(str.length < num){
        str += chars[Math.floor(Math.random() * chars.length)];
      }
       result.push(str)

}
return result
}