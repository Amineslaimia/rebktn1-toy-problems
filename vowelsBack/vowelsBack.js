// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.





function vowelsBack(string){
    var alphabet='abcdefghijklmnopqrstuvwxyz';
    var vowels='aiu';
    var consonants='bfghjklmnpqrstvwxyz';
    var moveback='code'
    var result =''
   for (var i =0 ; i <string.length;i++){
       if(consonants.indexOf(string[i])!== -1){
           if(alphabet.indexOf(string[i])-9<0){
               if(moveback.indexOf(alphabet[25+(alphabet.indexOf(string[i])-9)])!== -1){
                result=result+string[i]
               }else{
                result=result+alphabet[25+(alphabet.indexOf(string[i])-9)]
               }
           }else{
            if(moveback.indexOf(alphabet[alphabet.indexOf(string[i])-9])!== -1){
                result=result+string[i]
               }else{
                result=result+alphabet[alphabet.indexOf(string[i])-9]
               
               }
               
           }
           
   
       }else if(vowels.indexOf(string[i])!== -1){
        if(alphabet.indexOf(string[i])-5<0){
            if(moveback.indexOf(alphabet[25+(alphabet.indexOf(string[i])-5)])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[25+(alphabet.indexOf(string[i])-5)]
            }
        }else{
         if(moveback.indexOf(alphabet[alphabet.indexOf(string[i])-5])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[alphabet.indexOf(string[i])-5]
            
            }
            
        }
       }else if(string[i]==='c'||string[i]==='o'){
        if(alphabet.indexOf(string[i])-1<0){
            if(moveback.indexOf(alphabet[25+(alphabet.indexOf(string[i])-1)])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[25+(alphabet.indexOf(string[i])-1)]
            }
        }else{
         if(moveback.indexOf(alphabet[alphabet.indexOf(string[i])-1])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[alphabet.indexOf(string[i])-1]
            
            }
            
        }
       }else if(string[i]==='d'){
        if(alphabet.indexOf(string[i])-3<0){
            if(moveback.indexOf(alphabet[25+(alphabet.indexOf(string[i])-3)])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[25+(alphabet.indexOf(string[i])-3)]
            }
        }else{
         if(moveback.indexOf(alphabet[alphabet.indexOf(string[i])-3])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[alphabet.indexOf(string[i])-3]
            
            }
            
        }
       }else if(string[i]==='e'){
        if(alphabet.indexOf(string[i])-4<0){
            if(moveback.indexOf(alphabet[25+(alphabet.indexOf(string[i])-4)])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[25+(alphabet.indexOf(string[i])-4)]
            }
        }else{
         if(moveback.indexOf(alphabet[alphabet.indexOf(string[i])-4])!== -1){
             result=result+string[i]
            }else{
             result=result+alphabet[alphabet.indexOf(string[i])-4]
            
            }
            
        }
       }
       
   }
   return  result
   }
 
