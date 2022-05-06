/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const runButton = document.getElementById("run");
    runButton.onclick=function(){
        let birthDay = document.getElementById('dob-day').value;
        let birthMonth = document.getElementById('dob-month').value;
        let birtYear = document.getElementById('dob-year').value;
         console.log("Selected BirthDate = "+birthDay+"/"+birthMonth+"/"+birtYear);
         
         alert("Selected Birthdate = "+birthDay+"/"+birthMonth+"/"+birtYear);
    }

})();
