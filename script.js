let outputScreen = document.getElementById('output-screen');
let buttons = document.querySelectorAll('button');

function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value =eval(outputScreen.value);
    }
    catch(err)
    {
        outputScreen.value = ("Syntax Error")
    }
}
function gear(){
    outputScreen.value = "";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}
         