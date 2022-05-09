/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const target = document.querySelector("#target");
    const table=document.createElement("table");
    for(let i =1;i<=10;i++){
        const row = document.createElement("tr");
        for(let j=1; j<=10;j++){
            let column = document.createElement("td");
            column.style.border="1px solid green";
            column.innerHTML = i*j;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    target.appendChild(table);

})();
