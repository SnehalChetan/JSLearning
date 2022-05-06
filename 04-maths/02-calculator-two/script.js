/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    var performOperation = function(operation) {
        // perform the operation
        console.log("operation = "+operation);
                const val1 =parseInt(document.getElementById("op-one").value);
                const val2 =parseInt(document.getElementById("op-two").value);
                let res =0;
        switch(operation) {
            case 'addition':
              // code block
                 res = val1 + val2;
                 alert("Addition of "+val1+" + "+val2+" = "+res);
                break;
            case 'substraction':
                // code block
                res = val1-val2;
                alert("subtraction of "+val1+" - "+val2+" = "+res);
                break;
              case 'multiplication':
                res= val1*val2;
                alert("Multiplication of "+val1+" x "+val2+" = "+res);
                break;
            case 'division':
                res= val1/val2;
                alert("Division of "+val1+" / "+val2+" = "+res.toFixed(4));
                break;
            default:
              alert("invalid input");
          }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
