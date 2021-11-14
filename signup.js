let email = document.getElementById("email");
let password = document.getElementById("password");
let number = document.getElementById("number");
function validate(){
    let regemail=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(.[a-z]{2,8})?$/;
    let regpwd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let numberreg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(regemail.test(email.value)){
        error.innerHTML = "valid email format";
        error.style.color = "green";
        var lengthy = password.value.length;
        if(numberreg.test(number.value)){
            error2.innerHTML="Valid Number format";
            error2.style.color="green";
        if(regpwd.test(password.value)){
            if(lengthy<10){
                error1.innerHTML = "poor password length";
                error1.style.color = "red";
                return true;
            }
            else if(lengthy<13){
                error1.innerHTML = "Medium password length";
                error1.style.color = "orange";
                return true;
            }
            else{
                error1.innerHTML = "Strong password length";
                error1.style.color = "green";
                return true;
            }
        }
        else{
            error1.innerHTML = "Invalid Password format";
            error1.style.color = "red";
            return false;
        }
    }
    else{
        error2.innerHTML="Invalid Number format";
        error2.style.color="red";
        return false;
    }
    }
    else{
        error.innerHTML = "invalid, please enter a valid email";
        error.style.color = "red";
        return false;
    }
    
}