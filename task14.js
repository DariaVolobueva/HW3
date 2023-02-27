//first solution

function counting(str){
    if(typeof(str) == 'string'){
        let right = 0;
        let left = 0;
    
        for(letter in str){
            if(!(left > right)){
                if(str[letter] === "("){
                    right++;
                } else if(str[letter] === ")"){
                    left++;
                }
            } else { return false; }  
        }
    
        if(right !== left){
            return false;
        }
    
        document.onselectstart = () =>{return false};
        document.oncontextmenu = () =>{return false};
        let div = document.getElementById("text");
        div.innerHTML = str;
    
        return true;
    }
    
    return "Incorrect value";
}

console.log(counting("(mfklff)afjkbfvb(admsdf() n(fdkcnfjvb))"));