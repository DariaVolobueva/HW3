//first solution

function doesBrickFit(a, b, c, w, h){
    let sq = (w * h)**2;

    if((a * b)**2 <= sq || (a * c)**2 <= sq || (c * b)**2 <= sq){
        return true;
    }

    return false;
}

console.log(doesBrickFit(1, 2, 2, 1, 1));