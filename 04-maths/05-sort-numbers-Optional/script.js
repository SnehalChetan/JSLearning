/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        const givenStr = document.getElementById("numbers").value;
        let temp = 0;
        let strArray = givenStr.split(','); //convert string to array
                    //console.log("Num Array = "+strArray);//2, 4, 14, 10, 90, 23, 16
                    //let strArray=[2,4,14,10,90,16];
                    //console.log("arr Length = "+strArray.length);

        let numArray = new Array();
        for(let i=0; i < strArray.length; i++){
            numArray.push(parseInt(strArray[i]));
        }
        console.log("Num Array = "+numArray);

        for(let i=0; i<=(numArray.length-1); i++){

            for(let j=i+1; j < numArray.length; j++){
                console.log("i = "+i+"  j= "+j);
                console.log("temp = "+temp+" numArray["+i+"] = "+numArray[i]+" numArray["+j+"] = "+numArray[j]);
                if(numArray[i] > numArray[j]){ console.log("Inside if");
                    temp = numArray[i];
                    numArray[i] = numArray[j];
                    numArray[j] = temp;
                    /*console.log("After Conversion");
                    console.log("temp = "+temp+" numArray["+i+"] = "+numArray[i]+" numArray["+j+"] = "+numArray[j]);*/}
               // console.log("\n");
            }
           // console.log("new Array2 = "+numArray);
        }
        document.getElementById("result").innerHTML="The Sorted Array = "+numArray;
    });

})();
