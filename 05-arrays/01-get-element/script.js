/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
/*
* Query : When you click the button, display the fourth item from the array fruits in the console.
*/
(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
   document.getElementById("run").addEventListener("click",function(){
        console.log("4th item from fruit array = "+fruits[3]);
    });
    //or 
   /*  document.getElementById("run").addEventListener("click",()=>{
        console.log("4th item from fruit array = "+fruits[3]);
    });*/


})();
