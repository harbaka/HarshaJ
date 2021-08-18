window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values={amount :10000,years:10,rate:3.5};
  const amountDef=document.querySelector('#loan-amount');
  amountDef.value=values.amount;
  const  yearsDef=document.querySelector('#loan-years');
  yearsDef.value=values.years;
  const rateDef=document.querySelector('#loan-rate');
  rateDef.value=values.rate;
  update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let monthlyRate=(values.rate/100)/12;
  let n=(values.years)*12;
  
  const monthlyPayment= ((monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2);
  //console.log( monthlyPayment);
  return  monthlyPayment;

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
 let monthlyPayment=document.querySelector('#monthly-payment');
 monthlyPayment.innerText=monthly;
}
