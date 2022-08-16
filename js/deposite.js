// step-1: add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('deposite button clicked');
    // step-2: get the deposite amount from the deposite input field
    // for input field use .value to the value inside input field
    const depositeField = document.getElementById('depesite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    // step-3: get the current deposite total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);

    // step-4: add numbers to set total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;
    // set the deposite total
    depositeTotalElement.innerText = currentDepositeTotal;

    // step-5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previouBalanceTotalString);

    // step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    //step-7: clear the deposite field
    depositeField.value = '';
})