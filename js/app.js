//No demand
function noDemand(element){
    const previousMoney = document.getElementById(element+'-cost');
    previousMoney.innerText = '0';
}
//Maximun Demand
function maximmDemand(element){
    const previousMoney = document.getElementById(element+'-cost');
    previousMoney.innerText = '180';
}
// Update Total Money
function updateTotalMoney(){
    const totalCost = document.getElementById('total-cost');
    const total = document.getElementById('total');
    const bestPrice = document.getElementById('best-price');
    const totalMemoryCost = document.getElementById('memory-cost');
    const totalStorageCost = document.getElementById('storage-cost');
    const totalDeliveryCost = document.getElementById('delivery-cost');
    const newTotalCost = parseInt(bestPrice.innerText) + parseInt(totalMemoryCost.innerText) + parseInt(totalStorageCost.innerText) + parseInt(totalDeliveryCost.innerText);
    totalCost.innerText = newTotalCost;
    total.innerText = newTotalCost;

}
document.getElementById('eight-unifide-memory').addEventListener('click',function(){
    noDemand('memory'); //call function and passing parameter
    updateTotalMoney();
});
document.getElementById('sixteen-unifide-memory').addEventListener('click',function(){
    maximmDemand('memory');
    updateTotalMoney();
});
document.getElementById('lowest-storage').addEventListener('click',function(){
    noDemand('storage');
    updateTotalMoney();
});
document.getElementById('medium-storage').addEventListener('click',function(){
    const previousMoney = document.getElementById('storage-cost');
    previousMoney.innerText = '100';
    updateTotalMoney();
});
document.getElementById('maximum-storage').addEventListener('click',function(){
    maximmDemand('storage');
    updateTotalMoney();
});
document.getElementById('free-delivery').addEventListener('click',function(){
    noDemand('delivery');
    updateTotalMoney();
});
document.getElementById('charge-delivery').addEventListener('click',function(){
    const previousMoney = document.getElementById('delivery-cost');
    previousMoney.innerText = '20';
    updateTotalMoney();
});

//Apply pomo code
document.getElementById('apply-pomo').addEventListener('click',function(){
     const pomoValue = document.getElementById('pomo-code');
     if(pomoValue.value == 'stevekaku') // Check pomo code
     {
         const total = document.getElementById('total');
         const totalCost = document.getElementById('total-cost');
         const newTotal = (parseInt(totalCost.innerText) * 80)/100; // set 80% Money
         total.innerText = newTotal;
     }
     pomoValue.value = ''; // passing empty value
});