// add  money to the amount
// step-1: Add an event handler to the Add Money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();

    // step-2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput);

    // step-3: verify pin number
    // wrong way to validate pin number
    if (pinNumberInput === '1234') {
        console.log('adding money to your account');

        // step-4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // step-6: update the new balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
       alert('Faild to add money! Please try again.')
    }
})