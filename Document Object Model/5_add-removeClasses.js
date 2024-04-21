var selectedElement = document.getElementById('main-heading');
console.log(window.getComputedStyle(selectedElement).borderRadius);

// setInterval(function(){
//     selectedElement.classList.add('big');
// }, 2000);   


var setbtn = document.getElementById('btn');
setbtn.onclick = function(){
    selectedElement.classList.add('big');
};

var setbtn1 = document.getElementById('btn1');
setbtn1.onclick = function(){
    selectedElement.classList.remove('big');
};

var newElement = document.createElement('p');
newElement.id = "p3";

console.log(newElement)
var valueinp = document.createTextNode("AtharvaVasantYadav");
newElement.appendChild(valueinp);

selectedElement.appendChild(newElement);
console.log(selectedElement);
