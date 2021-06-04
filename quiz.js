quiztaker1_name = localStorage.getItem("quiztaker1_name");
quiztaker2_name = localStorage.getItem("quiztaker2_name");

quiztaker1_score = 0;
quiztaker2_score = 0;

document.getElementById("quiztaker1_name").innerHTML = quiztaker1_name + " :";
document.getElementById("quiztaker2_name").innerHTML = quiztaker2_name + " :";

document.getElementById("quiztaker1_score").innerHTML = quiztaker1_score;
document.getElementById("quiztaker2_score").innerHTML = quiztaker2_score;

document.getElementById("quiztaker_question").innerHTML = "Question Turn - " + quiztaker1_name;
document.getElementById("quiztaker_answer").innerHTML = "Answer Turn - " + quiztaker2_name;

function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log(actual_answer);
    
    question_number = "<h4>"+ number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}

question_turn = "quiztaker1";
answer_turn = "quiztaker2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) 
    {
        if (answer_turn == "quiztaker1")
        {
        quiztaker1_score = quiztaker1_score + 1;
        document.getElementById("quiztaker1_score").innerHTML = quiztaker1_score;
        }
        else
        {
        
        quiztaker2_score = quiztaker2_score + 1;
        document.getElementById("quiztaker2_score").innerHTML = quiztaker2_score;
        }
    }
    if (question_turn == "quiztaker1") 
    {
     question_turn = "quiztaker2";
     document.getElementById("quiztaker_question").innerHTML = "Question Turn - " + quiztaker2_name;
    }

    else 
    {
     question_turn = "quiztaker1";
     document.getElementById("quiztaker_question").innerHTML = "Question Turn - " + quiztaker1_name;
    
    }

    if (answer_turn == "quiztaker1") 
    {
        answer_turn = "quiztaker2";
        document.getElementById("quiztaker_answer").innerHTML = "Answer Turn - "  + quiztaker2_name;
    }
   
    else 
    {
     answer_turn = "quiztaker1";
     document.getElementById("quiztaker_answer").innerHTML = "Answer Turn - " + quiztaker1_name;
    }
    
    document.getElementById("output").innerHTML = "";
}

