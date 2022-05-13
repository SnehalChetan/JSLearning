/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
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
    // on page load event fetch json array and pass it to new array to if the user can insert multiple entries to array.
    (async ()=>{   
        try {
            const fetchResponse = await fetch(`../../_shared/api.json`);
            const data = await fetchResponse.json();
            arrayHero = data.heroes;
        } catch (e) {
            console.log("error");
            console.log(e);
        } 
    })();

    document.getElementById("run").addEventListener("click",()=>{
        const heroName = document.getElementById("hero-name").value;
        const heroAlterEgo = document.getElementById("hero-alter-ego").value;
        const heroPowers = document.getElementById("hero-powers").value.split(',');
        if(heroName == '' || heroAlterEgo == '' || heroPowers == ''){
            alert("please enter all data");
        } else{
            insertHero(heroName,heroAlterEgo,heroPowers);
        }
    });
   function insertHero(heroName,heroAlterEgo,heroPowers){
        
        let len =arrayHero.length;
        let newHeroID = len+1;
        let newHero = {id: newHeroID,name:heroName,alerEgo:heroAlterEgo,abilities:heroPowers};
        arrayHero.push(newHero);
        console.log(arrayHero);/**/
    }
/* */
   
    //const result = await response.json();
    //console.log(response);
    
    
})();
