// select elements
const balanceEl = document.querySelector(".balance .value");
const incomeTotalEl = document.querySelector(".income-total");
const outcomeTotalEl = document.querySelector(".outcome-total");
const incomeEl = document.querySelector("#income");
const expenseEl = document.querySelector("#expense");
const allEl = document.querySelector("#all");
const incomeList = document.querySelector("#income .list");
const expenseList = document.querySelector("#outcome .list");
const allList = document.querySelector("#all .list");

// select buttons
const expenseBtn = document.querySelector(".tab2");
const incomeBtn = document.querySelector(".tab1");
const allBtn = document.querySelector(".tab3");

// input buttons
const addExpense = document.querySelector(".add-expense");
const expenseTitle = document.querySelector("expense-title-input");
const expenseAmount = document.querySelector("expense-amount-input");

const addIncome = document.querySelector(".add-income");
const incomeTitle = document.querySelector("income-title-input");
const incomeAmount = document.querySelector("income-amount-input");

// variables
let ENTRY_LIST = [];
let balance = 0, income = 0, outcome = 0;

const DELETE = "delete", EDIT = "edit";

// event listeners
expenseBtn.addEventListener("click", function(){
    show(expenseEl);
    hide([incomeEl, allEl]);
    active(expenseBtn);
    inactive([incomeBtn, allBtn]);
})
incomeBtn.addEventListener("click", function(){
    show(incomeEl);
    hide([expenseEl, allEl]);
    active(incomeBtn);
    inactive([expenseBtn, allBtn]);
})
allBtn.addEventListener("click", function(){
    show(allEl);
    hide([incomeEl, expenseEl]);
    active(allBtn);
    inactive([incomeBtn, expenseBtn]);
})

// helpers
function show(element){
    element.classList.remove("hide");
}

function hide(elements){
    elements.forEach( element => {
        element.classList.add("hide");  
    })
}

function active(element){
    element.classList.add("active");
}

function inactive(elements){
    elements.forEach( element => {
        element.classList.remove("active");  
    })
}