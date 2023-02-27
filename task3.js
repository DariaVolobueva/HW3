//first solution
// function endWith(firstStr, secondStr){
//     if(typeof(firstStr) == 'string' && typeof(secondStr) == 'string'){
//         return firstStr.endsWith(secondStr);
//     }

//     return 'Incorrect value';
// }

// console.log(endWith('abc', 'ac'));

// second solution

// function endWith(firstStr, secondStr){
//     if(typeof(firstStr) == 'string' && typeof(secondStr) == 'string'){
//         let first = firstStr.slice(-secondStr.length);

//         if(first === secondStr){
//             return true;
//         }

//         return false;
//     }

//     return 'Incorrect value';   
// }

//lodash solution 

function endWith(firstStr, secondStr){
    if(typeof(firstStr) == 'string' && typeof(secondStr) == 'string'){
        return _.endsWith(firstStr, secondStr);
    }

    return 'Incorrect value'; 
}

console.log(endWith('abc', 'bc'));