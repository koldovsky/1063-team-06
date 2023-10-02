const accordions = document.querySelectorAll('.accordion');

// Add a click event listener to each accordion
accordions.forEach(accordion => {
    const question = accordion.querySelector('.question');
    const answer = accordion.querySelector('.answer');
    const plusMinus = question.querySelector('.plus-minus');

    // Initially hide the answer
    answer.style.maxHeight = '0';

    // Add a click event listener to the question
    question.addEventListener('click', () => {
        if (answer.style.maxHeight === '0px') {
            // Calculate the answer's height and set it
            answer.style.maxHeight = answer.scrollHeight + 'px';
            plusMinus.innerText = '-';
        } else {
            answer.style.maxHeight = '0';
            plusMinus.innerText = '+';
        }
    });
});
