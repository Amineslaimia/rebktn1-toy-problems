/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
<<<<<<< HEAD
*/
function zerosum (array){
    var negobg={}
    for  (var i =0;i<array.length;i++){
        if(array[i]<0){
            if(negobg[array[i]]===undefined){
                negobg[array[i]]=null
            }
        }
    }
    for  (var i =0;i<array.length;i++){
        if(negogb[0-array[i]]===null){
            return true
        }
    }
 return false
}
=======
*/
>>>>>>> 95af5ca94c596181a543f52fbc950149d417307f
