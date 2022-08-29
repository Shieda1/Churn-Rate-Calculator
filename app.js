// https://www.omnicalculator.com/finance/churn-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const churnrateRadio = document.getElementById('churnrateRadio');
const costumersatstartofaperiodRadio = document.getElementById('costumersatstartofaperiodRadio');
const customerslostduringperiodRadio = document.getElementById('customerslostduringperiodRadio');

let churnrate;
let costumersatstartofaperiod = v1;
let customerslostduringperiod = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

churnrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Costumers at start of a period';
  variable2.textContent = 'Customers lost during period';
  costumersatstartofaperiod = v1;
  customerslostduringperiod = v2;
  result.textContent = '';
});

costumersatstartofaperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'Churn rate';
  variable2.textContent = 'Customers lost during period';
  churnrate = v1;
  customerslostduringperiod = v2;
  result.textContent = '';
});

customerslostduringperiodRadio.addEventListener('click', function() {
  variable1.textContent = 'Churn rate';
  variable2.textContent = 'Costumers at start of a period';
  churnrate = v1;
  costumersatstartofaperiod = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(churnrateRadio.checked)
    result.textContent = `Churn rate = ${computechurnrate().toFixed(2)}`;

  else if(costumersatstartofaperiodRadio.checked)
    result.textContent = `Costumers at start of a period = ${computecostumersatstartofaperiod().toFixed(2)}`;

  else if(customerslostduringperiodRadio.checked)
    result.textContent = `Customers lost during period = ${computecustomerslostduringperiod().toFixed(2)}`;
})

// calculation

function computechurnrate() {
  return (Number(customerslostduringperiod.value) / Number(costumersatstartofaperiod.value)) * 100;
}

function computecostumersatstartofaperiod() {
  return (Number(customerslostduringperiod.value) / Number(churnrate.value)) * 100;
}

function computecustomerslostduringperiod() {
  return (Number(churnrate.value) / 100) * Number(costumersatstartofaperiod.value);
}