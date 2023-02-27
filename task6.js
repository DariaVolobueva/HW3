//first solution

// function diffrence(firstArr, secondArr){
//     if(Array.isArray(firstArr) && Array.isArray(secondArr)){
//         let resultArr = [];

//         for(let i = 0; i < firstArr.length; i++){
//             if(!resultArr.includes(firstArr[i])){
//                 resultArr.push(firstArr[i]);
//             }
//         }
    
//         for(let i = 0; i < secondArr.length; i++){
//             if(!resultArr.includes(secondArr[i])){
//                 resultArr.push(secondArr[i]);
//             }
//         }
    
//         return resultArr.sort((a, b) => a - b);
//     }
    
//     return "Incorrect value";
// }

//second solution

// function diffrence(firstArr, secondArr){
//     if(Array.isArray(firstArr) && Array.isArray(secondArr)){
//         let resultArr = [...firstArr, ...secondArr];

//         let uniq = Array.from(new Set(resultArr));
    
//         return uniq.sort((a, b) => a - b);
//     }
    
//     return "Incorrect value";
// }

//lodash solution

function diffrence(firstArr, secondArr){
    if(Array.isArray(firstArr) && Array.isArray(secondArr)){    
        return _.sortBy(_.union(firstArr, secondArr));
    }
    
    return "Incorrect value";
}

console.log(diffrence([1, 2, 3], [100, 2, 1, 10]));