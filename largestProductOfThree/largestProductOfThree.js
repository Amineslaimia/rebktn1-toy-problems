/*
Largest Product of Three
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.

largestProductOfThree([ 2, 1, 3, 7 ]) // 42
largestProductOfThree([ 0, 2, 3 ]) //	0
largestProductOfThree([1, 4, -5, -2]) // 40
*/

function largestProductOfThree(array) {
    var product =0;
    for (var i =0 ; i<array.length-2;i++){
        for(var j=i+1 ;j<array.length-1;j++){
            for(var k = j+1 ;k<array.length;k++){
                
                if(array[i]!==array[j]!==array[k]){
                if(product<array[i]*array[j]*array[k]){
                    product=array[i]*array[j]*array[k];

                }
                }
            }
        }
    }
    return product
}

