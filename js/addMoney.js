/**
 * step-1: add event listener to the add Money button (form submit) 
 * make sure to preventDefault so that page doesn't reloads
 * step-2: get the money user wants to add
 * also , get the pin number provided
 * step-3: verify the pin number. for wrong pin number ===> failed to add
 * for right pin number , allow  to add the number to the account balance.
 * 
 * step-4: get the current balance 
 * step-5: add money to be added to the current balance
 * step-6: display/update the balance in the DOM/UI
 */

document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        console.log('added event handler')

        // get money & the pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;
        // console.log(addMoney, pinNumber);

        if (pinNumber === '1234') {
            // add money to the account
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);

            // new balance
            const newBalance = balanceNumber + addMoneyNumber;

            // update the dom with updated balance
            document.getElementById('account-balance').innerText = newBalance;
        }
        else {
            alert('Faild to add money !Please try again.')
        }
    })