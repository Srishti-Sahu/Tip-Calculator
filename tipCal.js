var people = document.querySelector("#people");
var amount = document.querySelector("#billAmt");
var span = document.querySelector("#span");
var good = document.querySelector("#r1");
var average = document.querySelector("#r2");
var bad = document.querySelector("#r3");
var review = document.querySelector("#review");

calculate.addEventListener("click", function () {
  var input1 = parseInt(amount.value);
    var input2 = parseInt(people.value);
  console.log(review.value);
  if( review.value ==="Good"){
    span.innerText=input1*input2*10/100;
  }
   if( review.value ==="Average"){
    span.innerText=input1*input2*5/100;
  }
   if( review.value ==="Bad"){
    span.innerText=input1*input2*2/100;
   }
 
 
})
                           