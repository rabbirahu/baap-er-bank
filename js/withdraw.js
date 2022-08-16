/*
1. add event handler with the withdraw button
2. get the amount fron the withdraw input firld
2-5. also make sure to convert the input into a number by using parseFloat
3. get previous withdraw total

4. calculate total withdraw amount
4-5. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total

7. clear the input field
*/


// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number');
        return;
    }

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    console.log(previousWithdrawTotal);

    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previouBalanceTotalString = balanceTotalElement.innerText;
    const previouBalanceTotal = parseFloat(previouBalanceTotalString);

    if (newWithdrawAmount > previouBalanceTotal) {
        alert('Baap er bank e ato taka nai');
        return;
    }
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6
    const newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
})