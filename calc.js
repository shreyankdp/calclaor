const span = document.querySelector('.p1 span');
const buttons = document.querySelectorAll('.in');

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const buttonText = button.textContent;
        console.log('Button clicked:', buttonText); // Debugging line
        if (buttonText === 'AC') {
            span.textContent = '';
        } else if (buttonText === '=') {
            try {
                span.textContent = eval(span.textContent);
            } catch (error) {
                console.error('Error:', error); // Debugging line
                span.textContent = 'Error';
            }
        } else {
            span.textContent += buttonText;
        }
    });
});
