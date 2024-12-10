function BMI計算() { 
var 体重 = Number(document.getElementById('weight').value); 
var 身長 = Number(document.getElementById('height').value) / 100;
// cmをmに変換 
var BMI = 体重 / (身長 * 身長); alert("あなたのBMIは: " + bmi.toFixed(2) + " です"); }
