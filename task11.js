//first solution

// function shift(firstStr, secondStr){
//     if(typeof(firstStr) == 'string' && typeof(secondStr) == 'string'){
//         for(var i = 0; i < firstStr.length; i++){
//             if(firstStr === secondStr){
//                 return firstStr;
//             }
//             else{
//                 firstStr = firstStr.substr(firstStr.length-1) + firstStr.substr(0, firstStr.length-1);
//             }
//         }
    
//         return false; 
//     }
    
//     return "Incorrect value";
// }

//second solution

function shift(firstStr, secondStr){
    if(typeof(firstStr) == 'string' && typeof(secondStr) == 'string'){
        for(var i = 0; i < firstStr.length; i++){
            if(firstStr === secondStr){
                return firstStr;
            }
            else{
                firstStr = firstStr.slice(firstStr.length-1) + firstStr.slice(0, firstStr.length-1);
            }
        }
    
        return false; 
    }
    
    return "Incorrect value";
}

console.log(shift("abcd", "cdab")); //cdab