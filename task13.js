// first solution
function ChangeStr(str){
    if(typeof(str) == 'string'){
        let resultStr = str.charAt(0).toUpperCase() + str.slice(1);
        resultStr = resultStr.replace(/https?:\/\/(\S+)/g, "[посилання заборонене]");
        resultStr = resultStr.replace(/[\w-]+@([\w-]+\.)+[\w-]+/g, "[контакти заборонені]");
        resultStr = resultStr.replace(/([0-9]{4,})\W/g, '');
    
        if(resultStr.length > str.length){
            setInterval(() => {
                alert("Чи потрібна вам допомога?");
            }, 5000);
        }
    
        return resultStr;
    }

    return "Incorrect value"
}

console.log(ChangeStr("lorem ipsum to http:// and https:// and probably http://rfergghrr.er some actions. http://rfergghrr.er OK go to the point tututu@hm.com 34598 friends it`s too many his email is tututu@hm.com but not tu@tu"));
