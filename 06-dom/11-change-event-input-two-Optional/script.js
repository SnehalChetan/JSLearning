/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //regular expression for atlest two digits /^(\D*\d){2}/
    const inputText =document.getElementById("pass-one");
    
    document.querySelector("#pass-one").addEventListener("keypress",()=>{
        let spanData = document.getElementById("validity");
        if(inputText.value.match(/^(\D*\d){2}/) && inputText.value.length >= 8){

            console.log("data = "+inputText.value);
            spanData.innerHTML="OK";
    }else{
        console.log("else section");
    }
    });
})();
