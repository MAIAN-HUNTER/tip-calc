const baseCalc = document.getElementById("base-calc")
const peopleCalc = document.getElementById("people-calc")
const percentCalc = document.querySelectorAll(".percent-calc")
const customCalc = document.getElementById("custom-calc")

const nu = document.querySelector(".nu")
const nu2 = document.querySelector(".nu2")

function updateResults(tipAmount, totalAmountValue) {
    nu.textContent = `$${tipAmount.toFixed(2)}`
    nu2.textContent = `$${totalAmountValue.toFixed(2)}`
}

percentCalc.forEach((inputButton) => {
    inputButton.addEventListener("click", (e) => {
        e.preventDefault()

        TipPercentage = parseFloat(inputButton.innerText.replace("%", "") )/ 100
        amount = parseFloat(baseCalc.value)
        people = peopleCalc.value

        if (people <=0 ) {
            document.querySelector(".error").innerHTML = "Can't be zero"
            peopleCalc.classList.toggle("error-active")
            return
        }
        const tipAmount = (amount * TipPercentage) / people
        const totalAmountValue = (amount / people) + tipAmount

        updateResults(tipAmount, totalAmountValue)
    })
})

function calculateCustomTip() {
   const amount = parseFloat(baseCalc.value)
   const people = parseFloat(peopleCalc.value)
   const customTipPercentage = parseFloat(customCalc.value) / 100

    if (isNaN(amount) || isNaN(people) || people <= 0 || isNaN(customTipPercentage)) {
        return;
    }

    const customTip = (amount * customTipPercentage) / people
    const totalAmountValue = (amount / people) + customTip

    updateResults(customTip, totalAmountValue)
}
    customCalc.addEventListener("input", calculateCustomTip);

document.querySelector(".reset-btn").addEventListener("click", () => {
    nu.textContent = "$" + (0, 0).toFixed(2)
    nu2.textContent = "$" + (0, 0).toFixed(2)
    baseCalc.value = "";
    peopleCalc.value = "";
})