let calculateBtn = document.getElementById("calculate-btn");
let result = document.getElementById("result");

let calculate = () => {
    let income = Number(document.getElementById("income").value);
    let incomeChange = Number(document.getElementById("income-percent").value)
    let expenses = Number(document.getElementById("expenses").value);
    let expensesChange = Number(document.getElementById("expenses-percent").value)
    let savings = Number(document.getElementById("savings").value);
    let rate = Number(document.getElementById("rate").value);

    decimalRate = rate/100; // could this be a function if we also have % income and expenses
    let savingsYear = income - expenses;
    let retireWorth = expenses / decimalRate
    // let yearsToRetire = retireWorth / savingsYear
    // result.innerHTML = `<div>Assuming your expenses remain at ${expenses} and your income remains at ${income}, with no interest and a drawdown of ${rate}%, you will be able to retire in ${yearsToRetire} years. </div>`
    let savingsArr = []
    let yearsToRetire = 0
    while(retireWorth > savings) {
        savingsArr.push(savings);
        let interest = savings * decimalRate;
        // savingsYear *= 1 + (incomeChange)
        income *= (1+incomeChange)
        expenses *= (1+expensesChange)
        savings += interest + savingsYear;
        // console.log(yearsToRetire, savings)
        yearsToRetire ++;
    }

        console.log(savingsArr[1])
    // if(yearsToRetire == savingsArr.length) {
    //     console.log("yes")
    // }else {[
    //     console.log("no")
    // ]}

    result.innerHTML = `<div>Assuming your expenses remain at ${expenses} and your income remains at ${income}, with a return on your savings of ${rate}%, you will be able to retire in <span>${yearsToRetire}</span> years. </div>`

    

};

calculateBtn.addEventListener("click", calculate);
window.addEventListener("load", calculate);

