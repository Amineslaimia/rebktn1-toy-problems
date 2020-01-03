/*
Longest Run

Write a function that, given a string, finds the longest run of identical characters and returns an array containing the start and end indices of that run. 
If there are two runs of equal length, return the first one. Return [0,0] for no runs.

longestRun("abbbcc") // [ 1, 3 ]
longestRun("aabbc") // [ 0, 1 ]
longestRun("") // [ 0, 0 ]
longestRun("mississippi") // [ 2, 3 ]
longestRun("abcdefgh") // [ 0, 0 ]
longestRun("abccccccc") // [ 2, 8 ]
*/

function longestRun(string) {
    var longestIndexStart = -1;
         var longestCount = 0;
         var currentCount = 0;
         var currentIndexStart = 0;
         if(string===''){
                 return [0,0]
         }
 
         for (var idx = 0; idx < string.length; idx++){
                 
             if (string[idx] === string[currentIndexStart]){
                 currentCount++;
                 if(idx===string.length-1){
                     longestIndexStart = currentIndexStart;
                     longestCount = currentCount;
                         break
                 }
                 
             }else{
                 if (currentCount > longestCount)
                 {
                     longestIndexStart = currentIndexStart;
                     longestCount = currentCount;
                 }
 
                 currentIndexStart = idx;
                 currentCount = 1;
             }
         }
         return [longestIndexStart,longestIndexStart+longestCount-1]
 }
