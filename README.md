# Frontend Mentor - product-preview-card-component-main

Olá, Este é mais um dos projeto feito pelo frontend mentor e estou muito feliz de compartilha-lo com o mundo!

## Ideias, Planejamento e Execução
Decidi por seguir a orientação do desafio, focando em aprender mais o JS, porém tive problemas com as tags HTML

### O que eu aprendi
Algo bem comun com iniciantes, erros com interatividade no JS: redimensionamento nas fontes e design de containers quando o usuario clica em reset ou faz o calculo das gorjetas usando qulaquer uma das opções. RESOLUÇÃO: tags HTML H1 serão redimensionadas para P o que causa a mudança indesejada. Usando tags P o redimensionamento não ocorre e pode até ser personalizada em CSS sem problemas
 
Pontos de destaque das tags HTML e classes CSS:

```html
  </div>

            <p class="nu">
               $0.00
            </p>
      </div>
```
````js
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
````
### Desenvolvimentos futuros
continuarei os desafio de front end

### sites com recursos Úteis

- [site W3schools](https://www.w3schools.com/css/css_rwd_intro.asp) - Este site me auxiliou a me localizar melhor nas diversas ferramentas de estilizações que o CSS tem a oferecer. Com certeza será um site que salvarei nos Favoritos.

## Autor
- Frontend Mentor - [@MAIAN-HUNTER](https://www.frontendmentor.io/profile/MAIAN-HUNTER)
- Linkedin - [Maian-Lucas](https://www.linkedin.com/in/maian-lucas-1a796026a/)

## Conhecimentos
92% de meu conhecimento foi adquirido pelo curso de programação Dev Quest, oa outros 8% foram de documentações de sites da internet como o proprio Frontend Mentor, W3schools e de videos da plataforma youtube.