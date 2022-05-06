/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    const months    = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const runBtn = document.getElementById("run");
    const date = new Date();  //console.log("date= "+date.getDate()+" day= "+date.getDay()+" year= "+date.getFullYear());
    const spookyDate = 13;
    const spookyMonth = new Array();
    runBtn.onclick=function(){
        const year = document.getElementById("year").value; // 2000 
        date.setFullYear(year); //console.log("year = "+date.getFullYear()); //2000
        date.setDate(spookyDate); //console.log("day  = "+date.getDate()); 
        months.forEach((month, index, months)=>{
           

            date.setMonth(index); //console.log("set month = "+date.getMonth());
            if(date.getDay()==5){
                    /*console.log("spooky day = "+date.getDate()+","+weekDays[date.getDay()]+"Date = "+date);*/
                    spookyMonth.push(month);
            }
            console.log("spookeyMonths = "+spookyMonth);
            document.getElementById("givenyear").innerHTML = "The spookey months of the year "+date.getFullYear();
            document.getElementById("result").innerHTML = spookyMonth.join();
        });
    }   



})();
