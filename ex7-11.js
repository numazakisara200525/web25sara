function uru() {
var seireki =Number(document.getElementById('tosi').value); 
var heinen1=(seireki%4)
var heinen2=(seireki%100)
var heinen3=(seireki%400)
if (heinen3 == 0) { alert("閏年"); } 
else if (heinen2 == 0) { alert("平年"); } 
else if (heinen1 == 0) { alert("閏年"); } 
else { alert("平年");
