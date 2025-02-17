// console.log('button clicking file added');

// step-1: Set event handler
document.getElementById('button-login').addEventListener('click', function(event){
    // setp-2: Prevent default behavior (prevent reloading browser)
    event.preventDefault(); //---> Vejal to begginers
    console.log('login button click');
    // setp-3: Get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber)
})


