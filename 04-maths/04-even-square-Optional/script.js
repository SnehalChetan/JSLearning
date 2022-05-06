/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        const sqrtNum = new Array();
        // your code here
        for(let i=1; i<=21; i++){
            let num = Math.sqrt(i); //may return the floating point number e.g: Math.sqrt(3)=1.73
            let val = num% 1 !== 0; // it gives original sqrt numbers
            if(!val){
                sqrtNum.push(i);
            }
        }
        document.getElementById("result").innerHTML=sqrtNum.join();
    });

})();
