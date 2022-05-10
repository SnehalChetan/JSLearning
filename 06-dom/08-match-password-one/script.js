/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
/**
 * password must be 8-15 charachters
 * contains atleast one special character /['~!@#$%&*_+=]/
 * one capital letter /[a-zA-Z]/
 * atlest one number  /\d/
 * 
 */
 

    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        const pwd1 = document.getElementById("pass-one");
        const pwd2 = document.getElementById("pass-two");

        pwd1Val = String(pwd1.value);
        pwd2Val = String(pwd2.value);
       
        if(pwd1Val.match(/\d/) && pwd1Val.match(/[a-zA-Z]/) && pwd1Val.match(/['~!@#$%&*_+=]/)){
            if(pwd1Val.length >= 8 && pwd1Val != '') {
                if(pwd1Val == pwd2Val && pwd1Val.length == pwd2Val.length){
                    console.log("password matching "+pwd1);
                    pwd1.style.borderColor="green";
                    pwd2.style.borderColor="green";
                }else{
                    pwd1.style.borderColor="red";
                    pwd2.style.borderColor="red";
                    console.log("Please enter similar password in both fields");
                }
            }else{ console.log("password must not be empty");
                pwd1.style.borderColor="red";
                pwd2.style.borderColor="red";
            }
        } else{
            pwd1.style.borderColor="red";
            pwd2.style.borderColor="red";
            alert("invalid password.Match all cases"+"\n 1. password must be 8-15 charachter long \n 2. Contains atleast one special character \n 3. One capital letter \n4. atlest one number");
        }
});

})();
