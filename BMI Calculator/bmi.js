
function calc(){
 let displayEl=document.getElementById("display-el")

let conditionEl=document.getElementById("condition-el")

let Weight=parseFloat(document.getElementById("weight").value)

let Height=parseFloat(document.getElementById("height").value)

let Kilo=document.getElementById("kilo")

let Centi=document.getElementById("centi")

 Kilo.textContent = Weight + " kg";
 
 Centi.textContent = Height + " cm";
 
displayEl.textContent=(Weight/Math.pow((Height/100), 2)).toFixed(1);

let result=displayEl.textContent
    if (result<18.5){
        conditionEl.innerText='Under Weight'
    }else if(result>=18.5&& result<=24.9){
        conditionEl.innerText='Normal Weight'
    }else if(result>25&& result<=29.9){
        conditionEl.innerText='Over Weight'
    }else{
        conditionEl.innerText='Obese!'
    }
}

function calc2(){
 let displayEl2=document.getElementById("display-el2")

let conditionEl2=document.getElementById("condition-el2")

let Weight2=parseFloat(document.getElementById("weight2").value)

let Height2=parseFloat(document.getElementById("height2").value)

let Kilo2=document.getElementById("kilo2")

let Centi2=document.getElementById("centi2")

 Kilo2.textContent = Weight2 + " kg";
 
 Centi2.textContent = Height2 + " cm";
 
displayEl2.textContent=(Weight2/Math.pow((Height2/100), 2)).toFixed(1);

let result2=displayEl2.textContent
    if (result2<18.5){
        conditionEl2.innerText='Under Weight'
    }else if(result2>=18.5&& result2<=24.9){
        conditionEl2.innerText='Normal Weight'
    }else if(result2>25&& result2<=29.9){
        conditionEl2.innerText='Over Weight'
    }else{
        conditionEl2.innerText='Obese!'
    }
}

let changeEl=document.getElementById("bmi1")
let changeEl2=document.getElementById("bmi2")

move.addEventListener("click", function (){
   
       changeEl2.style.display="none"
        changeEl.style.display="block"
        move.style.color="white"
        move.style.backgroundColor="purple"
        removeEl.style.color="purple"
        removeEl.style.backgroundColor="white"
      
    
})
removeEl.addEventListener("click", function (){
  
       changeEl.style.display="none"
        changeEl2.style.display="block"
        move.style.color="purple"
        move.style.backgroundColor="white"
        removeEl.style.color="white"
        removeEl.style.backgroundColor="purple"
   })
