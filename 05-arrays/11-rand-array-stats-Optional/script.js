/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //Math.floor(Math.random() * 1 - Low + High)) + Low // Low <= x < High
    document.getElementById("run").addEventListener("click",()=>{
        const low =1;
        const high=100;
        var numArray = new Array();

        //display random array of 10 elements
        for(let i=1;i<=10;i++){
            let x = Math.floor(Math.random() * (1 - low + high)) + low;
            //console.log("x ="+x);
            numArray.push(x);
            document.getElementById("n-"+i).innerHTML=x;
        }
        console.log("numArray ="+numArray);

        //numArray.sort();// It ruturns 100 to each sorted array to avoid it we need to use a Compare function that return negative(if(a > b) => a will be Place before b), zero(a == b) => No Change, or positive values(a < b ) => a will be place after b
        
        //smallest array element
        let minArrEle = Math.min(...numArray);//rest parameter
        let minEle = Math.min.apply(Math,numArray); // minimum array element using apply method
        let arrmin = numArray.reduce((num1,num2)=>Math.min(num1,num2)); // minimum element using reduce function

        //largest array element
        let maxArrEle = numArray.reduce((num1,num2)=>Math.max(num1,num2));

        //sum of all array element
        let sumArr = numArray.reduce((acc,current)=>acc+current,0); //using reduce function
        let len = numArray.length;
        let avgArr = sumArr/len;        


        document.getElementById("min").innerHTML=minArrEle;
        document.getElementById("max").innerHTML=maxArrEle;
        document.getElementById("sum").innerHTML=sumArr;
        document.getElementById("average").innerHTML=avgArr;
    });

})();
