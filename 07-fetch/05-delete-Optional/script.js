/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const url = "../../_shared/api.json";
    var arrayHero = new Array();
    (async ()=>{   
        try {
            const fetchResponse = await fetch(`../../_shared/api.json`);
            const data = await fetchResponse.json();
            arrayHero = data.heroes;
            console.log(arrayHero);
        } catch (e) {
            console.log("error");
            console.log(e);
        } 
    })();

    
    document.getElementById("run").addEventListener("click",()=>{
        let removeHero = document.getElementById("hero-id").value;
        let found = arrayHero.find(hero => hero.id == removeHero ); // find() returns complete data of specific id
       
       if(found){
            arrayHero.splice(arrayHero.indexOf(found),1); 
            console.log(arrayHero);
        } else{
           alert("Hero not available, please check for another hero");
        } 
        

    });
})();
