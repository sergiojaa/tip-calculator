const billAmount = document.getElementById('bill-amount')
const fivePercent = document.getElementById('five')
const numberOfPeople = document.getElementById('people-count')
const tipAmount = document.getElementById('tip-amount')
const totalAmount = document.getElementById('total-amount')

let bilValue;
let percentValue;
let peopleValue
billAmount.addEventListener('input', (event) =>{
    bilValue = event.target.value
    calculation()
})

fivePercent.addEventListener('click', (event)=>{
    percentValue = parseInt(event.target.value) 
    calculation()
})

numberOfPeople.addEventListener('input', (event)=>{
    peopleValue = parseInt(event.target.value) 
    calculation()
})

function calculation(){
    const tipResultValue = bilValue * (percentValue / 100)/peopleValue
    const totalAmountValue = tipResultValue + bilValue / peopleValue
    console.log(totalAmountValue)
}