function addUser() {
    quiztaker1_name = document.getElementById("quiztaker1_name_input").value;
    quiztaker2_name = document.getElementById("quiztaker2_name_input").value;

    localStorage.setItem("quiztaker1_name", quiztaker1_name);
    localStorage.setItem("quiztaker2_name", quiztaker2_name);
    window.location = "quiz.html";
}  