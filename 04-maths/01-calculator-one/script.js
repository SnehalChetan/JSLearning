/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        const val1 =parseInt(document.getElementById("op-one").value);
        const val2 =parseInt(document.getElementById("op-two").value);
        console.log("val1 =".val1); 
        console.log("val2 =".val2);
        let res = val1 + val2;
        console.log("Add ="+res);
        document.getElementById("result").innerHTML = res;
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        const val1 =parseInt(document.getElementById("op-one").value);
        const val2 =parseInt(document.getElementById("op-two").value);
        console.log("val1 =".val1); console.log("val2 =".val2);
        let res = val1-val2;
        console.log("sub ="+res);
        document.getElementById("result").innerHTML = res;

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        const val1 =document.getElementById("op-one").value;
        const val2 =document.getElementById("op-two").value;
        console.log("val1 =".val1); console.log("val2 =".val2);
        let res = val1*val2;console.log("multi ="+res);
        document.getElementById("result").innerHTML = res;
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        const val1 =document.getElementById("op-one").value;
        const val2 =document.getElementById("op-two").value;
        console.log("val1 =".val1); console.log("val2 =".val2);
        let res = val1/val2;console.log("Div ="+res);
        document.getElementById("result").innerHTML = res;
    });
})();
