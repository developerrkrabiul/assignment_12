
// 1. Create a Age Calculator with age status alert by using DOM 


const ageButton = document.querySelector("#ageButton");
const name = document.querySelector("#name");
const year = document.querySelector("#year");
const info = document.querySelector("h2");


ageButton.addEventListener('click',  (e) => {

    e.preventDefault();

    if(name.value == '' || year.value == ''){

        info.innerHTML = `<p class = 'alert alert-danger text-center'>All Fields are required.</p>`
    }else{


        info.innerHTML = ageCal(name.value, year.value);
        
    }
    name.value = "";
    year.value = "";

    

});

/** Age Cal Function.
 * 
 * @param {*} name 
 * @param {*} year 
 * @returns year and if;
 */

function ageCal(name, year){

    let date = new Date();
    
    age = date.getFullYear() - year;

    return `<h2 class = 'alert alert-success'> Hi ${name} you are ${age} Years old </h2>`;


};