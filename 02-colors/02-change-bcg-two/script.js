/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const runButton = document.getElementById("run");
    const colorVal = document.getElementById("color").value;
 

    runButton.onclick=function(){
        if(document.getElementById("color").value != ''){
            console.log(document.getElementById("color").value);
        }else{
            console.log("reload page"+colorVal);
        }
        
       
        document.body.style.background = document.getElementById("color").value;  
    }
})();
