//first solution

// function Task2(str, num){
//     if(typeof(str) === "string" && typeof(num) === "number"){
//         let resultArr = [];
//         let arr = str.split(" ");
    
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i].length > num){
//                 resultArr.push(arr[i]);
//             }
//         }
    
//         return resultArr;
//     }

//     return "Incorrect value";
// }

//second solution

// function Task2(str, num){
//     if(typeof(str) === "string" && typeof(num) === "number"){
//         let arr = str.split(" ");

//         let resultArr = arr.filter((word) =>{
//             if(word.length > num){
//                 return true;
//             }
//         });

//         return resultArr;
//     }
    
//     return "Incorrect value";
// }

//lodash solution

function Task2(str, num){
    if(typeof(str) === "string" && typeof(num) === "number"){
        let arr = _.split(str, " ");

        let resultArr = _.filter(arr, (word) =>{
            if(word.length > num){
                return word;
            }
        });

        return resultArr;
    }
    
    return "Incorrect value";
}

console.log(Task2(`Мікробики мікробики займались аеробікой не зміг поли помить не хотів їх убить`, 4));