//first solution

// function arrChange(arr){
//     let maxValue = 0;
//     let finalArr = [];
//     let arrLength = arr.length;

//     for(let i = 0; i < arrLength; i++){
//         maxValue = Math.max(...arr);
//         if(arrLength % 2 === 0){
//             if(i % 2 === 0){
//                 finalArr.push(maxValue);
//                 let indexOfMaxElem = arr.indexOf(maxValue);
//                 arr.splice(indexOfMaxElem, 1);
//             } else {
//                 finalArr.unshift(maxValue);
//                 let indexOfMaxElem = arr.indexOf(maxValue);
//                 arr.splice(indexOfMaxElem, 1);
//             }
//         } else{
//             if(i % 2 === 0){
//                 finalArr.unshift(maxValue);
//                 let indexOfMaxElem = arr.indexOf(maxValue);
//                 arr.splice(indexOfMaxElem, 1);
//             } else {
//                 finalArr.push(maxValue);
//                 let indexOfMaxElem = arr.indexOf(maxValue);
//                 arr.splice(indexOfMaxElem, 1);
//             }
//         }
//     }
//     return finalArr;
// }

//lodash solution

function arrChange(arr){
    let maxValue = 0;
    let finalArr = [];
    let arrLength = arr.length;

    for(let i = 0; i < arrLength; i++){
        maxValue = _.max(arr);
        if(arrLength % 2 === 0){
            if(i % 2 === 0){
                finalArr.push(maxValue);
                let indexOfMaxElem = _.indexOf(arr, maxValue);
                arr.splice(indexOfMaxElem, 1);
            } else {
                finalArr.unshift(maxValue);
                let indexOfMaxElem = _.indexOf(arr, maxValue);
                arr.splice(indexOfMaxElem, 1);
            }
        } else{
            if(i % 2 === 0){
                finalArr.unshift(maxValue);
                let indexOfMaxElem = _.indexOf(arr, maxValue);
                arr.splice(indexOfMaxElem, 1);
            } else {
                finalArr.push(maxValue);
                let indexOfMaxElem = _.indexOf(arr, maxValue);
                arr.splice(indexOfMaxElem, 1);
            }
        }
    }
    return finalArr;
}

console.log(arrChange([23, 1, 8, 6 , 8, 3]));