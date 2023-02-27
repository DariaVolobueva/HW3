// import _ from 'lodash';
//first solution

// function MaxMinSub(arr){
//     if(Array.isArray(arr)){
//         if(arr.length > 1){
//             arr.sort((a, b) => a-b);
//             return arr[arr.length - 1] - arr[0];
//         }
    
//         return 0;
//     }

//     return "Incorrect value";
// }

//second solution

// function MaxMinSub(arr){
//     if(Array.isArray(arr)){
//         if(arr.length > 1){
//             return Math.max(...arr) - Math.min(...arr);
//         }
    
//         return 0;
//     }

//     return "Incorrect value";
// }

//lodash solution

function MaxMinSub(arr){
    if(Array.isArray(arr)){
        if(arr.length > 1){
            return _.max(arr) - _.min(arr);
        }

        return 0;
    }

    return "Incorrect value";
}

console.log(MaxMinSub([1, 2, 3, -4]));