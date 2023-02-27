// first solution

function generatePassword(){
    let symb = '_';
    let bigLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    let smolLetters = 'qwertyuiopasdfghjklzxcvbnm';
    let passwd = [];
    let numOfArr;
    let countOfNumbers = 0;
    let countOfBigLetters = 0;
    let num = Math.floor(Math.random() * (21 - 6) + 6);

    if(num > 20 || num < 6){
        console.log("Incorrect value");
    }

    for(let i = 0; i <= num; i++){
        if(passwd.length > 0){
            if(typeof(passwd[i-1]) === "number" || countOfNumbers > 5){
                numOfArr = Math.floor(Math.random() * 2);
            }
            else{
                numOfArr = Math.floor(Math.random() * 3);
            }
        } 
        if(numOfArr === 2){
            passwd.push(Math.floor(Math.random() * 10));
            countOfNumbers++;
        } else if (numOfArr === 0){
            passwd.push(bigLetters[Math.floor(Math.random() * 26)]);
            countOfBigLetters++;
        } else{
            passwd.push(smolLetters[Math.floor(Math.random() * 26)]);
        }
    }

    while(countOfBigLetters < 2){
        let indexOfpasswd = 0;
        indexOfpasswd = Math.floor(Math.random() * num);
        for(let k = 0; k < num; k++){
            if(bigLetters.indexOf(passwd[indexOfpasswd]) == -1){
                countOfBigLetters++;
                break;
            }  
            indexOfpasswd = Math.floor(Math.random() * num);
        }
        passwd[indexOfpasswd] = bigLetters[Math.floor(Math.random() * 26)];
    }

    if(countOfBigLetters > 3){
        let indexOfpasswd = 0;
        indexOfpasswd = Math.floor(Math.random() * num);
        passwd[indexOfpasswd] = symb;
    } else{
        let indexOfpasswd = 0;
        indexOfpasswd = Math.floor(Math.random() * num);
        for(let k = 0; k < num; k++){
            if(bigLetters.indexOf(passwd[indexOfpasswd]) == -1){
                countOfBigLetters++;
                break;
            }  
            indexOfpasswd = Math.floor(Math.random() * num);
        }
        passwd[indexOfpasswd] = symb;
    }

    return passwd.join("");
}

console.log(generatePassword());