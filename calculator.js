document.addEventListener("DOMContentLoaded", function() {

    const inputField = document.querySelector('.input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            let buttonText = button.textContent;
            switch (buttonText) {
                case '=':
                    calculateResult();
                    break;
                case 'C':
                    clearInput();
                    break;
                default:
                    appendToInput(buttonText);
            }
        });
    });

    function appendToInput(value) {
        inputField.value += value;
    }


    function clearInput() {
        inputField.value = '';
    }


    function calculateResult() {
        try {
            inputField.value = eval(inputField.value);
        } catch (error) {

            inputField.value = 'Error';
        }
    }
});