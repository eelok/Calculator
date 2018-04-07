// var plus_button = document.getElementById('plus');
// var minus_button = ducument.getElementById('minus');
// var multiply_button = document.getElementById('multiply');
// var divide_button = document.getElementById('divide');
// var equally_button = ducument.getElementById('equally');
// var pers_button = ducument.getElementById('pers');    
var delButton = document.getElementById('del');
var resultElement = document.querySelector('#result');
var numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(function(button) {    
    button.addEventListener('click', function(event) {
        var resultValue = parseInt(resultElement.innerHTML, 10);
        if (resultValue === 0) {
            resultElement.innerHTML = event.target.value;
        } else {
            resultElement.innerHTML += event.target.value;
        }
    });
});
delButton.addEventListener('click', function() {
    resultElement.innerHTML = 0;
});
