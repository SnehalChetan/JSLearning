/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        console.log("Given fruits Array = "+fruits);
        fruits.pop();//remove last element
        fruits.shift();//removes first element

        fruits.push("kiwi");//add last element
        fruits.unshift("banana");//add first element
        console.log("fruits array after changes = "+fruits);

    });

})();
