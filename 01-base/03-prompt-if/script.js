/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  let uname = prompt("Enter your name : ");
    let ugender = prompt("Enter your Gender : ");
    let ucity = prompt("Where do you live : ");
    if(uname !='' && ugender !=''&&ucity !=''){
        let udata = confirm("Does your information correct?"+ "\nName : "+uname+"\nGender : "+ugender+"\nCity : "+ucity);
        if( udata == true ){
            alert(" Thank you!"); 
        }
        else{
            alert("Please refill the information");
            location.reload();
        }
    }else{
        alert("Please refill all the information");
        location.reload();
    }

})();