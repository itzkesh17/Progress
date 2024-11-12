let skill = document.getElementById("skill");
let percentage = document.getElementById("perc");

let initialVal = 0;
let endVal = 70;
let speed = 30;

let progress = setInterval(()=>{
    if(initialVal === endVal)
    {
        clearInterval(progress);
    }
    else
    {
        initialVal++;
        
        percentage.innerHTML = initialVal +"%";
        skill.style.background =`conic-gradient(#FEEC37 ${initialVal/100*360}deg, #F3C623 0deg)`

    }
},speed)