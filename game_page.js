
function addUser() {
  player1_name = document.getElementById("player1_name_input").value;
  player2_name = document.getElementById("player2_name_input").value;

    //Set "player1_name" using localStorage.setItem() function
  localStorage.setItem("player1_name", player1_name);
	  //Set "player2_name" using localStorage.setItem() function
  localStorage.setItem("player2_name", player2_name);
    
    window.location = "game_page.html";
}

function send()
{
  number1 = document.getElementById("number1").value;
  nember2 = document.getElementById("number2").value;
  actual_answer = parseInt(number1)*parseInt(number2)
  console.log(actual_answer);
  question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
  input_box = "<br>Answer : <input type='text' id'input_check_box'>";
  check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>";
  row = question_number + input_box + check_button;
  document.getElementById("output").innerHTML = row;
  document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
}

function check() 
{
  
}

