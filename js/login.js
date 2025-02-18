// console.log('button clicking file added');

// step-1: Set event handler
// document.getElementById('button-login').addEventListener('click', function (event) {
//     // setp-2: Prevent default behavior (prevent reloading browser)
//     event.preventDefault(); //---> Vejal to begginers

//     // setp-3: Get the phone number & pin number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     // step-4: Validate phone and pin
//     // this is temporary. you should not do like this
//     if(phoneNumber==='5'& pinNumber==='1234'){
//         console.log('you are logged in');
//         // step-5: allow user to use the website
//     }
//     else{
//         alert('Wrong phone number or pin')
//     }
// })


document.getElementById('button-login')
    .addEventListener('click', function (event) {
        event.preventDefault();

        // get phone number and pin
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber,pinNumber);

        // bad way to validate
        if (phoneNumber === '5' && pinNumber === '1234') {
            console.log('you are logged in');
            // location.href = "http://127.0.0.1:5500/home.html";
            window.location.href = '/home.html'
        }
        else {
            alert('Wrong phone number or pin')
        }
    })