//first solution

// function Task12(n){
//     let a = [];
//     let b = [];
//     let c = [];

//     for(let i = 0; i < n; i++){
//         a.push(Math.floor(Math.random() * 10));
//     }

//     for(;;){
//         let index1 = 0;
//         let index2 = 1;
//         let max = Math.abs(a[0] - a[1]);

//         for(let i = 0; i < a.length; i++){
//             for(let j = i+1; j < a.length; j++){
//                 if(i === j){
//                     continue;
//                 }
    
//                 if(Math.abs(a[i] - a[j]) < max){
//                     max = Math.abs(a[i] - a[j]);
//                     index1 = i;
//                     index2 = j;      
//                 }
//             }
//         }
//         if(a.length === 0){
//             break;
//         }

//         if(a.length === 1){
//             b.push(a[0]);
//         }

//         if(a[index1] >= a[index2]){
//             b.push(a[index1]);
//             c.push(a[index2]);
//             } else{
//                 b.push(a[index2]);
//                 c.push(a[index1]);
//             }
//             a.splice(index1, 1);
//             if(index1 < index2) {
//                 a.splice(index2 - 1, 1);
//             }
//              else {
//                 a.splice(index2 - 1, 1);
//             }
        

//     }
//     return [a, b, c];
// }

//second solution

// function Task12(n){
//     if(typeof(n) == 'number'){
//         let a = [];
//         let b = [];
//         let c = [];
    
//         n = 2 * n;
    
//         for(let i = 0; i < n; i++){
//             a.push(Math.floor(Math.random() * n));
//         }
    
//         for(;;){
//             let index1 = 0;
//             let index2 = 1;
//             let max = Math.abs(a[0] - a[1]);
    
//             a.forEach((num, index) =>{
//                 a.forEach((num1, index1 = index+ 1) =>{
//                     if(num === num1){
//                         return false;
//                     }
    
//                     if(Math.abs(num - num1) < max){
//                         max = Math.abs(num - num1);
//                         index1 = index;
//                         index2 = index1;      
//                     }
//                 });
//             });
    
//             if(a.length === 0){
//                 break;
//             }
    
//             if(a.length === 1){
//                 b.push(a[0]);
//             }
    
//             if(a[index1] >= a[index2]){
//                 b.push(a[index1]);
//                 c.push(a[index2]);
//                 } else{
//                     b.push(a[index2]);
//                     c.push(a[index1]);
//                 }
//                 a.splice(index1, 1);
//                 if(index1 < index2) {
//                     a.splice(index2 - 1, 1);
//                 }
//                  else {
//                     a.splice(index2 - 1, 1);
//                 }
            
    
//         }
//         return [a, b, c];
//     }

//     return "Incorrect value";
// }

//lodash solution

function Task12(n){
    if(typeof(n) == 'number'){
        let a = [];
        let b = [];
        let c = [];
    
        n = 2 * n;
    
        for(let i = 0; i < n; i++){
            a.push(Math.floor(Math.random() * n));
        }
    
        for(;;){
            let index1 = 0;
            let index2 = 1;
            let max = Math.abs(a[0] - a[1]);

            _.forEach(a, (num, index) =>{
                _.forEach(a,(num1, index1 = index+ 1) =>{
                    if(num === num1){
                        return false;
                    }
    
                    if(Math.abs(num - num1) < max){
                        max = Math.abs(num - num1);
                        index1 = index;
                        index2 = index1;      
                    }
                }); 
            });
    
            if(a.length === 0){
                break;
            }
    
            if(a.length === 1){
                b.push(a[0]);
            }
    
            if(a[index1] >= a[index2]){
                b.push(a[index1]);
                c.push(a[index2]);
                } else{
                    b.push(a[index2]);
                    c.push(a[index1]);
                }
                a.splice(index1, 1);
                if(index1 < index2) {
                    a.splice(index2 - 1, 1);
                }
                 else {
                    a.splice(index2 - 1, 1);
                }
            
    
        }
        return [a, b, c];
    }

    return "Incorrect value";
}

console.log(Task12(5));