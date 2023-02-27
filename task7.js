//first solution

function switching(obj){
    if(typeof(obj) == "object" && !(obj === null)){
        let resultObj = {};
        let objValues = Object.values(obj);
        let i = 0;
    
        for(key in obj){
            resultObj[objValues[i]] = key;
            i++;
        }
    
        return resultObj;
    }

    return "Incorrect value";
}

console.log(switching({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));
console.log(switching([3, 5, 6, 7, 8]));
console.log(switching(null));