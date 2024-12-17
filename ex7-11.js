function uru() {
var seireki =Number(document.getElementById('tosi').value); 
var uruu =(seireki/4)
var heinen=(seireki%4)
if (heinen=0) { alert("閏年"); } 
if (heinen>0) { alert("平年"); }
