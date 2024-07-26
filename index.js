const billInput = document.getElementById('bill-amount')
const tipButtons = [...document.getElementsByClassName('tip-buttons')];
const numberOfPeople = document.getElementById('people-count')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')
const reset = document.getElementById('reset')
let bilValue = 0;
let percentValue = 0;
let peopleValue = 0;

billInput.addEventListener('input', (event)=>{
    bilValue = event.target.value
    calculation()
})


tipButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        percentValue = parseInt(event.target.textContent)
        calculation()
    });
});
customTipInput.addEventListener('input', (event) => {
    percentValue = parseFloat(event.target.value);
    calculation();
});
numberOfPeople.addEventListener('input', (event)=>{
    peopleValue = event.target.value
    calculation()
})


    function calculation(){
        const tipResultValue = (bilValue * (percentValue / 100)) / peopleValue
        const totalResultValue = tipResultValue + bilValue / peopleValue

        if(peopleValue){
             tipAmount.textContent = `$${tipResultValue}`
             totalAmount.textContent = `$${totalResultValue }`

        }
        
    }

 