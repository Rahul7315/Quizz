const username = document.getElementById('username');
const saveScorebtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScore = JSON.parse(localStorage.getItem('highScore')) || [];

const finalScore = document.getElementById('finalScore');
const Max_High_Scores = 5;
finalScore.innerText = mostRecentScore;
username.addEventListener('keyup', () =>{
    saveScorebtn.disabled = !username.value;
});

saveHighScore = e => {
    
    e.preventDefault();

    const score = {
        score : mostRecentScore,
        name : username.value
    };
    highScore.push(score);
    highScore.sort((a,b) =>b.score - a.score);   
    highScore.splice(5);
    localStorage.setItem('highScores',JSON.stringify(highScore));
    window.location = ('/../startQuizz.html');
    console.log(highScore);
};