function uru() {
var seireki =Number(document.getElementById('tosi').value); 
if (document.getElementById('uru').value == '夢') {
alert('うるう年');} 
else {alert('平年');}
}
function bmi() { 
var a = Number(document.getElementById('weight2').value); 
var b = Number(document.getElementById('height2').value);
var bmiValue =(a/(b*b/100)*100);
if (bmiValue < 18.5) { alert("低体重：" + bmiValue); } 
else if (bmiValue < 25) { alert("普通：" + bmiValue); } 
else { alert("肥満：" + bmiValue); } }
