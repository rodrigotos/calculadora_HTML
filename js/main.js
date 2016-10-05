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
  var button_clear = controlpad.querySelector("#clear");
  console.log(button_clear);
  button_clear.addEventListener("click", calculator.clear);
});

var calculator = {
  result: null,
  operator: null,
  check_input: function(){
    var self = calculator;
    console.log("check_input");
    var input = document.getElementById("input"); // input del ususario
    var input_text = input.value; // texto
    var errors = document.querySelector("error");
    var input_number = Number(input_text);
    if(Number.isNaN(input_number)){
      input.value = "";
    }
  },
  set_number: function(button){
    return function(){
      console.log(this);
      var input = document.getElementById("input"); // input del ususario
      input.value = ""+ input.value + button.textContent;
    };//return
  },//set_number
  exec_operator: function(button){
    var self = calculator;
    return function(){
      if(self.result === null){

      }
      self.operator = button.textContent;
    };
  },
  clear: function(){
    var self = calculator;
    self.result = null;
    self.operator = null;
    var input = document.getElementById("input"); // input del ususario
    input.value = "";
  },
}; //Obj calculator
