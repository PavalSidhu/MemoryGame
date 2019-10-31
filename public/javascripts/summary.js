window.addEventListener('load', () => {
    
    let score = localStorage.getItem('score');
    let endScore = document.querySelector('#score');

    endScore.value = score;
    endScore.readOnly = true;
});