// get input elements
const baseCalc = document.getElementById("base-calc")
const peopleCalc = document.getElementById("people-calc")
const percentCalc = document.querySelectorAll(".percent-calc")
const customCalc = document.getElementById("custom-calc")

// get result elements
const nu = document.querySelector(".nu")
const nu2 = document.querySelector(".nu2")


// funtion to update results
function updateResults(tipAmount, totalAmountValue) {
    nu.textContent = `$${tipAmount.toFixed(2)}`
    nu2.textContent = `$${totalAmountValue.toFixed(2)}`
}

// calculate tip as the user enters the percentage
percentCalc.forEach((inputButton) => {
    inputButton.addEventListener("click", (e) => {
        e.preventDefault()

         // parte de erro
        TipPercentage = parseFloat(inputButton.innerText.replace("%", "") )/ 100
        amount = parseFloat(baseCalc.value)
        people = peopleCalc.value

        if (people <=0 ) {
            document.querySelector(".error").classList.toggle("error-active")
            peopleCalc.classList.toggle("error-active")
            return
        }
        const tipAmount = (amount * TipPercentage) / people
        const totalAmountValue = (amount / people) + tipAmount

        updateResults(tipAmount, totalAmountValue)
    })
})

// calculate tip as the user enters the custom percentage
function calculateCustomTip() {
    amount = parseFloat(baseCalc.value)
    people = peopleCalc.value
    customTipPercentage = parseFloat(customCalc.value) / 100

    const customTip = (amount * customTipPercentage) / people
    const totalAmountValue = (amount / people) + customTip

    updateResults(customTip, totalAmountValue)

    customCalc.addEventListener("input", calculateCustomTip)
}
//DESCOBRIR PQ O LAYOUT DO DESIGN DESALINHA COM EFETUA-SE O CALCULO E PQ O CUSTOM-CALC N FUNCIONA
 //problema do custom-calc n é na fonte
// clear results
document.querySelector(".reset-btn").addEventListener("click", () => {
    nu.textContent = "$" + (0, 0).toFixed(2)
    nu2.textContent = "$" + (0, 0).toFixed(2)
    baseCalc.value = "";
    peopleCalc.value = "";
})