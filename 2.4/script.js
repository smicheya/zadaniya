var states = [];

var timer;
var doneTypingInterval = 500;

var input = document.getElementById('txt_input');

input.addEventListener("input", function(e) {
    clearTimeout(timer);
    if (input.value) {      
        timer = setTimeout(function() {         
            states.push(input.value);
        }
        , doneTypingInterval);
    }
});

document.getElementById('b_undo').addEventListener('click', function() {  
    if (states.length > 0) {
        states.pop();
        if (states.length === 0) {
            input.value = '';
        } else {            
            input.value = states[states.length - 1];
        }
    } 
});
