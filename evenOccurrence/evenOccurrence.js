/*
Even Occurrence
Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

evenOccurrence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]) // 2
evenOccurrence([ "cat", "dog", "dig", "cat" ]) // "cat"
evenOccurrence([[1,2,3], [1,2], [1,2,3]]) // [1,2,3]
evenOccurrence([{a: 1, b: 2}, {a:1, b:3}, {a:1, b:2}]) // {a:1, b:2}
*/

function evenOccurrence(arr){
    var obj={}
    var even =0
    for(var i =0 ;i <arr.length;i++){
        if(obj[ JSON.stringify(arr[i])]===undefined){
            obj[ JSON.stringify(arr[i])]=1

        }else{
            obj[ JSON.stringify(arr[i])]++
        }
    }
   
    var values=Object.values(obj);
    for(var i= 0;i<values.length;i++){
        if(values[i]%2===0){
            even=i
            break;
        }
    }
    return Object.keys(obj)[even]
    
}