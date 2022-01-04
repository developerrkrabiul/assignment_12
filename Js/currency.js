
// 2. Create a Currency Converter for Pound, CAD, USD, Euro to BDT by using DOM 



const convert = document.querySelector("#conv-btn");
const curType = document.querySelector("#cur-type");
const amount = document.querySelector("#amount");
const result = document.querySelector(".cur-output");

/**
 * The main function, what users will see.
 */


convert.addEventListener('click', () => {
    
    let taka = curType.value * amount.value;

    result.innerHTML = (curType.value == 'Currency type' || amount == '') ? `<p class = 'alert alert-danger'>All Fields are required.</p>` : `<p class = 'alert alert-success'> your converting amount is ${taka} TAKA</p>`;
    

});