document.addEventListener("DOMContentLoaded", function(event){
  //una vez la página ha cargado
  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");

  var button_operators = document.querySelectorAll("#operators button");
  var i = 0;
  for(i=0; i<button_operators.length; i++){
    button_operators[i].addEventListener("click", calculator.check_input);
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  for(i=0; i<button_numbers.length; i++){
    console.log(button_numbers[i]);
    button_numbers[i].addEventListener(
      "click",
      calculator.set_number(button_numbers[i])
    );//addEventListener
  }
});

var calculator = {
  op1: null,
  op2: null,
  operator: null,
  check_input: function(){
    console.log("check_input");
    var input = document.getElementById("input"); // input del ususario
    var input_text = input.value; // texto
    var errors = document.querySelector("error");
    var input_number = Number(input_text);
    if(!Number.isNaN(input_number)){
      console.log("Is a Number");
      if(this.op1 === null){
        this.op1 = input_number;
      }else{
        this.op2 = input_number;
      }
    }else{
      console.log("Error");
    }
  },
  set_number: function(button){
    return function(){
      console.log(this);
      var input = document.getElementById("input"); // input del ususario
      input.value = ""+ input.value + button.textContent;
    };//return
  }//set_number
}; //Obj calculator
