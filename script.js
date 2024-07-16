const slot1 = $("#slot-1");
const slot1scroll = $("#slot-1-scroll");
const slot2scroll = $("#slot-2-scroll");
const slot3scroll = $("#slot-3-scroll");

function spin(){
    runNum(slot1scroll,100);
    runNum(slot2scroll,120);
    runNum(slot3scroll,140);
    
}

function runNum(slotscroll,duration){
    for (let i=0; i<duration; i++){
        setTimeout(function() {
            const num = Math.floor(Math.random()*9);
            let children = $(slotscroll).children();
            console.log(num);
            children[0].innerHTML = num == 0 ? 9 : num;
            children[1].innerHTML = num+1;
            children[2].innerHTML = num+2 == 10 ? 1 : num+2;
        }, 20 * i);
    }
}

