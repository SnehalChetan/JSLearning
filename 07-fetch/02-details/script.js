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
    const url = "../../_shared/api.json";
    document.querySelector("#run").addEventListener("click",()=>{
        let getHero  = document.querySelector("#hero-id").value;
        displayHeroData(getHero,url);
    });

    async function displayHeroData(getHero,url){
        const responseHero = await getHeroData(url);
        let tmplHero = document.getElementById("tpl-hero");
        let cloneTmpl = tmplHero.content.cloneNode(true);// console.log(responseHero);
        const heroArr = responseHero['heroes'];//console.log("length ="+heroArr.length);console.log(heroArr);
        let nametag = cloneTmpl.querySelector('.name');
       // nametag.innerText = "hello";
        let egotag = cloneTmpl.querySelector('.alter-ego');
        let powertag = cloneTmpl.querySelector(".powers");


         heroArr.forEach(hero => {
                //console.log(hero);
                if(hero['id']==getHero){
                    console.log(hero['id']+" "+hero['name']+" "+hero['alterEgo']+" "+hero['abilities']);
                    nametag.innerText = hero['name'];
                    egotag.innerText = hero['alterEgo'];
                    powertag.innerText = hero['abilities'];
                    
                }
            });/**/
        document.getElementById('target').appendChild(cloneTmpl);
    } 
    async function getHeroData(url){
        let heroData = await fetch(url);
        let heroJson = await heroData.json();
        return heroJson;
    }

})();
