var selectedEle = document.getElementById('btn');
var selectbg = document.getElementById('main')

console.log(selectbg)
function onBtnClick(){
    var randomNum = Math.floor(Math.random()*255);
    selectbg.style.backgroundColor= "rgb(" + Math.floor(Math.random()*255)+ "," + Math.floor(Math.random()*255)+ "," + Math.floor(Math.random()*255)+ ")";
    console.log(Math.floor(Math.random()*255));
    console.log(randomNum);
}
// 1
// selectedEle.onclick = onBtnClick; // don't add paranthesis while funct. name writing

// 2
selectedEle.addEventListener('click', onBtnClick)



