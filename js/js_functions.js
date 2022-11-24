//UC1 - validate name
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is incorrect";
});

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});


//UC2 - validate email
const emailId = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
emailId.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-z]{1,}(.[a-z]{1,})?@bl.co(.in)?$');
    if(emailRegex.test(emailId.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Invalid Email address";
});


//UC3 - validate phone number
const phoneNo = document.querySelector('#tel');
const phoneError = document.querySelector('.tel-error');
phoneNo.addEventListener('input', function(){
    let phoneRegex = RegExp('^[0-9]{2} [0-9]{10}$');
    if(phoneRegex.test(phoneNo.value))
        phoneError.textContent = "";
    else
        phoneError.textContent = "Invalid Phone number";
});