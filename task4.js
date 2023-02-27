//first solution

// function average(arr){
//     if(Array.isArray(arr)){
//         let averArr = [];

//         for(let i = 0; i < arr.length - 1; i++){
//             if(Number.isInteger(arr[i]) && Number.isInteger(arr[i + 1])){
//                 averArr.push((arr[i] + arr[i + 1]) / 2);
//             }
//         }
    
//         return averArr;
//     }

//     return "Incorrect value";
// }

//second solution

// function average(arr){
//     let averArr = [];

//     if(Array.isArray(arr)){
//         arr.forEach((item, index, arr) =>{
//             if(index === arr.length - 1)
//             {
//                 return false;
//             }
//             averArr.push((item + arr[index + 1]) / 2);
//         });

//         return averArr;
//     }

//     return "Incorrect value";
// }

//lodash solution

function average(arr){
    let averArr = [];
    
    if(Array.isArray(arr)){
        _.forEach(arr, (item, index) =>{
            if(index === arr.length - 1)
            {
                return false;
            }
            averArr.push((item + arr[index + 1]) / 2);
        });

        return averArr;
    }
        
    return "Incorrect value";
}

console.log(average([1, 3, 5 , 1, -10]));