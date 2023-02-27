//first solution

function calculateDifference(obj, num){
    if(typeof(obj) == "object" && !(obj === null) && !(Object.keys(obj).length === 0)){
        let objValues = Object.values(obj);
        let cost = 0;
    
        for(let i = 0; i < objValues.length; i++){
            cost+= objValues[i];
        }
    
        if(cost > num){
            return cost - num;
        } else{
            return "Can`t pay insurance because sum of items less than insurance";
        }
    }

    return "Incorrect value"
}

console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));
console.log(calculateDifference({}, 5));
console.log(calculateDifference({ skate: 100, painting: 200, shoes: 1 }, 400));