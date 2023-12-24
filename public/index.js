import { Invoice } from './modules/invoice.js';
const invOne = new Invoice('Stefan', 'work on website', 250);
const invTwo = new Invoice('Ivan', 'work on CSS', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((i) => {
    console.log(i.client, i.amount, i.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
