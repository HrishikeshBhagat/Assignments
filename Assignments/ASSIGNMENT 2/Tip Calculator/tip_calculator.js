const tip=document.getElementById("range");
const tipRange=document.querySelector(".rangePercent");
const tipamt=document.querySelector(".tipamt");
const amountTotal=document.querySelector(".bill");
// element triggered a specified event
tip.addEventListener("input", function(event) {
  let billInput=document.getElementById("num").value;
  let tipR=event.target.value;

    tipRange.textContent=`${tipR}`;
    tipamt.textContent= `${billInput * (tipR/100).toFixed(2)}%`;
    console.log(tipR)
    amountTotal.textContent=tipCalc(parseFloat(billInput), parseFloat(tipR)) 
} )

function tipCalc(amountTotal, tip){
  let tipc=(amountTotal * tip/100);
  return tipc+amountTotal;
}