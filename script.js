//starting variables
let billAmtInput = document.querySelector('.bill--input')
let numPeopleInput = document.querySelector('.num__people--input')
let inputCustom = document.querySelector('.input--custom')
const btnTip = document.querySelectorAll('.btn--tip')
const tipAmountValue = document.querySelector('.tip__amount--value')
const totalPersonValue = document.querySelector('.total__person--value')
const resetBtn = document.querySelector('.btn--reset')
const error = document.querySelector('.error')

let tipCalcPerc, tipAmount, numPeopleTip, totalPerPerson, inputCustomValue

resetBtn.classList.add('btn--reset-selected')

const init = function () {
  resetBtn.classList.add('btn--reset-selected')
  billAmtInput.value = ''
  numPeopleInput.value = ''
  inputCustom.value = ''
  tipAmountValue.textContent = '0.00'
  totalPersonValue.textContent = '0.00'
}

init()

function selectBtn(e) {
  btnTip.forEach((btn) => {
    btn === e
      ? btn.classList.add('btn--selected')
      : btn.classList.remove('btn--selected')
  })
}

for (let i = 0; i < btnTip.length; i++) {
  btnTip[i].addEventListener('click', function (e) {
    selectBtn()
    if (
      Number(billAmtInput.value) === 0 ||
      Number(numPeopleInput.value) === 0
    ) {
      numPeopleInput.classList.add('num__people--error')
      error.classList.remove('error--hidden')
    } else {
      btnTip[i].classList.toggle('btn--selected')
      resetBtn.classList.remove('btn--reset-selected')
      numPeopleInput.classList.remove('num__people--error')
      error.classList.add('error--hidden')
      tipCalcPerc = parseInt(btnTip[i].textContent) / 100
      numPeopleTip = billAmtInput.value / numPeopleInput.value
      tipAmount = numPeopleTip * tipCalcPerc
      tipAmountValue.textContent = tipAmount.toFixed(2)
      totalPerPerson = numPeopleTip + tipAmount
      totalPersonValue.textContent = totalPerPerson.toFixed(2)
    }
  })
}

inputCustom.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    btnTip.forEach((btn) => {
      btn.classList.remove('btn--selected')
    })
    inputCustomValue = inputCustom.value / 100
    numPeopleTip = billAmtInput.value / numPeopleInput.value
    calcCustomTip = numPeopleTip * inputCustomValue
    tipAmountValue.textContent = calcCustomTip.toFixed(2)
    totalCustomTip = numPeopleTip + calcCustomTip
    totalPersonValue.textContent = totalCustomTip.toFixed(2)
  }
})

resetBtn.addEventListener('click', init)
