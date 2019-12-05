/*
Character Frequency
Write a function call characterFrequency that takes as its input a string and returns an array
of arrays as shown below sorted in descending order by frequency
and then by ascending order by character.


characterFrequency("aaabbc") -->    [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]

characterFrequency("mississippi")  -->  [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]

characterFrequency("") -->  [ ]
*/

function charFrequency (string){
    var obj={}
    var result= []
    var elemnt =[]
    var counter=1;
    for (var i =0 ; i < string.length; i++){
        if(obj[string[i]]=== undefined){
            obj[string[i]]= null
           elemnt.push(string[i]) 
        }else {continue}
        
        for(var j =i+1 ; j < string.length; j++){
            if (string[i] === string[j]){
                counter ++;
            }
        }
        elemnt.push(counter)
        result.push(elemnt)
        elemnt=[]
        counter=1;

        
    }
    return result
}