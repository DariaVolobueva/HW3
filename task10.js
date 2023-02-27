//first solution

// function fileName(str){
//     if(typeof(str) == 'string'){
//         if(str.lastIndexOf(".") === -1){
//             return "This isn`t a file, it`s a directory";
//         }

//         let index = str.lastIndexOf("\\");
//         let dot = str.lastIndexOf(".");
//         let nameOfFile = str.slice(index + 1, dot);
        
//         return nameOfFile;
//     }

//     return "Incorrect value";
// }

//second solution 

function fileName(str){
    if(typeof(str) == 'string'){
        if(str.lastIndexOf(".") === -1){
            return "This isn`t a file, it`s a directory";
        }

        return str.slice(str.lastIndexOf("\\") + 1, str.lastIndexOf("."));
    }

    return "Incorrect value";
}

console.log(fileName('C:\\Users\\daria\\OneDrive\\Рабочий стол\\Programming\\Sigma\\HW2\\images.jpg'));