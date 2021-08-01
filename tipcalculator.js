function calculateTip() {

    document.getElementById('tip').innerHTML=
    document.getElementById("amount").value*
    document.querySelector('input[name="serviceLevel"]:checked').value 
    /document.getElementById("persons").value
    /100;
   }
