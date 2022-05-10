/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var i=10;
    // your code here
   
    //use keypress event as it ignore the special keys, backspace, ctrl,alt,shift
    document.querySelector("#pass-one").addEventListener("keypress",()=>{
        //
        const inputText = document.getElementById("pass-one");
        let spanData = document.getElementById("counter");
        let len= inputText.value.length;

        if(len < 10){
           spanData.innerHTML=len+1;         
        }else{
            inputText.disabled=true;
            console.log("you can enter only 10 characters");
        }
        });
    

})();
