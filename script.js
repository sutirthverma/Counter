let decrease = document.querySelector('.decrease');
let reset = document.querySelector('.reset');
let increase = document.querySelector('.increase');
let count = document.querySelector('.count');
let countNum = Number(count.innerText);

reset.addEventListener('click', function(){
    count.innerText = "0";
    countNum = 0;
    check(countNum);
})

increase.addEventListener('click', function(){
    countNum++;
    count.innerText = countNum;
    check(countNum);
})

decrease.addEventListener('click', function(){
    countNum--;
    count.innerText = countNum;
    check(countNum);
})


function check(num){
    if(num < 0){
        count.style.color = "red";
    }else if(num > 0){
        count.style.color = "green";
    }else{
        count.style.color = "black";
    }
}