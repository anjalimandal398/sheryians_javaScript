
const onButton = document.querySelector('.on');
const offButton = document.querySelector('.off');
const circle = document.querySelector('.circle');

onButton.addEventListener('click', () => {
    circle.style.backgroundColor = 'yellow';
});
offButton.addEventListener('click', () => {
    circle.style.backgroundColor = 'black';
});


