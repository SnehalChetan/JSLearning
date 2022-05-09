/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.querySelector("#target");
    const table = document.createElement("table");
    const row = document.createElement("tr");
    for(i=0;i<10;i++){
        let td = document.createElement("td");
            td.style.border="solid 1px green";
        row.appendChild(td);

    }
    table.appendChild(row);
    target.appendChild(table);
})();
