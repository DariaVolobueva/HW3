//first solution

function task15(){
    let counter = 0;
    let src = prompt("Write a string");
    let arr = src.split(" ");
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    ul.appendChild(li);
    let ar1 = arr[0].toUpperCase();
    li.textContent = ar1;
    for(let i = 1; i < arr.length - 2; i++){
        let liArr = document.createElement('li');
        liArr.textContent = arr[i];
        ul.appendChild(liArr);
    }
    let liPreLast = document.createElement('li');
    liPreLast.textContent = arr[arr.length - 2].toLowerCase();
    let liLast = document.createElement('li');
    liLast.textContent = arr[arr.length - 1].toLowerCase();
    ul.appendChild(liPreLast);
    ul.appendChild(liLast);
    document.body.appendChild(ul);

    for(letter in src){
        if(src[letter] === 'a')
        {
            counter++;
        }
    }

    alert("A for:" + counter);
    setTimeout(() => {
        if(!confirm("Are you still here?")){
            window.close();
        }
    }, 300000);
}

task15();