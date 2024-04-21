var countdownelement = document.getElementById('countdown'); 
console.log(countdownelement);

countdown_value = countdownelement.innerHTML;
console.log(countdown_value);

let setint_id = setInterval(function(){
    countdown_value = countdown_value-1;
    if(countdown_value<0){
        return 0;
    }
    countdownelement.innerHTML = countdown_value;

    // updating css style - only inline css can be changed
    if(countdown_value %2 != 0){
        countdownelement.style.backgroundColor = "red";
    }
    else{
        countdownelement.style.backgroundColor = "cyan";

    }

}, 1000);

console.log(setint_id);