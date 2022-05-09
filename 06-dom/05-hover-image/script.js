/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const imgTag = document.querySelector("img:not([class])"); //As image tag don't have class

    const dataHoverVal = imgTag.getAttribute("data-hover");
    
    imgTag.src = dataHoverVal; //assign value directly to attribute.

    imgTag.setAttribute("src",dataHoverVal); //assign value using setAttribute method

})();
