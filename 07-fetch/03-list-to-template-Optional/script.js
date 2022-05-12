/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click",()=>{
        
        const url = "../../_shared/api.json";
        getHeroData(url);
    });
    async function getHeroData(url){
        const heroData = await fetch(url);
        const heroDataJson = await heroData.json();
        //console.log(heroDataArrJson);
        const heroArr = heroDataJson['heroes'];
        displayHero(heroArr);
    }
    async function displayHero(heroArr){
        heroArr.forEach(hero => {
            console.log(hero);
            let tmpl = document.getElementById("tpl-hero");
            let clone = tmpl.content.cloneNode(true);
            let name = clone.querySelector(".name");
            let alterEgo = clone.querySelector(".alter-ego");
            let powers = clone.querySelector(".powers");

            name.innerText = hero.name;
            alterEgo.innerText = hero.alterEgo;
            powers.innerText = hero.abilities;
            console.log("inside Array");
            document.getElementById("target").appendChild(clone);
    
        });
    }
})();
