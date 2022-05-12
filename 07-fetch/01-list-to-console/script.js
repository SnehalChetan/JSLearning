/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
/*
* Using Fetch API
* the fetch api always returns a promise
* we can use it in two ways, both ways are async
*/
// one way : without using a function 

 /*   document.getElementById("run").addEventListener("click",()=>{
        fetch("../../_shared/api.json")
        .then(res=>res.json())
        .then(data =>console.log(data));
    });
*/
// second way using a await 


document.getElementById("run").addEventListener("click",()=>{
  
    let url = "../../_shared/api.json";
   
    
/* The fetch async await function does not return the parsed array. for that you need the external async function to display it on console ot anywhere else.
* If we does not using this external function then it return the promise object.
* if we does not retun it and display the output on the same fetch call function then it display the response data correctly but while returning the data it gives promise pending or promise object which we unable to console or access.
*/
    (async ()=>{
        console.log(await getData(url));
    
    })();

    });
    async function getData(url){
    
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
   
})();
