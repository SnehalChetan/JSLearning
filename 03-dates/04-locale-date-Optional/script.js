/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDateTime = new Date();
    
    const day = weekDays[currentDateTime.getDay()];
    const todaysDate = currentDateTime.getDate();
    const month = months[currentDateTime.getMonth()];
    const thisYear = currentDateTime.getFullYear();
    const currentHour = currentDateTime.getHours();
    const currentMinutes = currentDateTime.getMinutes();
 
    const today = day+" "+todaysDate+" "+month+" "+thisYear+","+" "+currentHour+"h"+currentMinutes;
    document.getElementById("target").innerHTML = today;
    
    

})();
