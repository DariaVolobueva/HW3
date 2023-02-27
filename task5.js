//5.1 first solution

// function countVowels(str){
//     if(typeof(str) == 'string'){
//         let vovels = ['a', 'e', 'o', 'i', 'u'];
//         let slicedStr = str.toLowerCase().split("");
//         let vovelsCount = 0;

//         for(let i = 0; i < slicedStr.length; i++){
//             for(let y = 0; y < vovels.length; y++){
//                 if(slicedStr[i] === vovels[y]){
//                     vovelsCount++;
//                 }
//             }
//         }

//         return vovelsCount;
//     }
    
//     return "Incorrect value"
// }

//5.1 second solution

// function countVowels(str){
//     if(typeof(str) == 'string'){
//         let vovels = ['a', 'e', 'o', 'i', 'u'];
//         let slicedStr = str.toLowerCase().split("");
//         let vovelsCount = 0;

//         for(let i = 0; i < slicedStr.length; i++){
//             if(vovels.includes(slicedStr[i])){
//                 vovelsCount++;
//             }
//         }

//         return vovelsCount;
//     }
    
//     return "Incorrect value"
// }

//5.1 third solution

function countVowels(str){
    if(typeof(str) == 'string'){
        let vovels = ['a', 'e', 'o', 'i', 'u'];
        let slicedStr = str.toLowerCase().split("");
        let vovelsCount = 0;

        let resultArr = slicedStr.filter((letter)=>{
            if(vovels.includes(letter)){
                return true;
            }
        });

        return resultArr.length;
    }
    
    return "Incorrect value"
}

console.log(countVowels("PaLmOlive"));

//5.2 first solution

function removeABC(str){
    if(typeof(str) == 'string'){
        strCopy = str;
        str = str.replace(/[abcABC]/g, '');
    
        if(strCopy === str){
            return null;
        }
    
        return str;
    }
    
    return "Incorrect value";
}

console.log(removeABC("This might Be a bit hard"));
console.log(removeABC("hello world"));