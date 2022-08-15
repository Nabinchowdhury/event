// <!--=============== option-1/ Directly set on HTML element====================== -->
//         <button onclick="console.log(7)">Click to show number</button>
//         <button onclick="document.body.style.backgroundColor
//         ='yellow'">Make yellow</button>




// ==============option-2/ Add onclick function on the HTML element======================
// ====================Important  ===>  We will use this======================== 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}





// <!-- ==========option-3/ add function on ID by JS ================================= -->
const blue = document.getElementById('make-blue');
blue.onclick = function makeBlue() {
    document.body.style.backgroundColor = "blue";
}
// <!-- ==========option-3(another)/ add function on ID by JS =========================== -->
const green = document.getElementById('make-green');
green.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = "green";
}







// <!--=========option-4(another)/adding eventListener & function in JS================  -->
const pink = document.getElementById('make-pink');
pink.addEventListener('click', function makePink() {
    document.body.style.backgroundColor = 'pink';
})

// <!--=========option-4(Final/adding eventListener & function in JS================  
// ==========Important: We will use this=====================================-->
document.getElementById('make-violet').addEventListener('click', function () {
    document.body.style.backgroundColor = "violet";
})