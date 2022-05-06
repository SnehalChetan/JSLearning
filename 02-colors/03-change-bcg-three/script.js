/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    const runButton = document.getElementById("run");
    runButton.onclick=function(){
        const color = '#';
        const colorChars = 'abcdef123456789';
        for (let i = 0; i < 6; i++) {
            color += colorChars.charAt(Math.floor(Math.random() * colorChars.length));
        }console.log("Color = "+color);
        if(color !=''){
            document.body.style.background = color;
        }
    }

})();
