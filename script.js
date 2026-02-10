const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

let noCount = 0;
const phrases = [
    "No",
    "¿Estás segura?",
    "¿De verdad?",
    "Piénsalo otra vez...",
    "¡Por favooor!",
    "Te daré un chocolate",
    "¿Y si te lo pido bonito?",
    "Me vas a romper el corazón",
    "Ya morí...",
    "Es una broma, ¿verdad?",
    "No seas así :(",
    "¡DI QUE SÍ!"
];

noBtn.addEventListener('click', () => {
    noCount++;


    const phraseIndex = Math.min(noCount, phrases.length - 1);
    noBtn.innerText = phrases[phraseIndex];

    const newSize = 30 + (noCount * 12);
    yesBtn.style.fontSize = `${newSize}px`;


    const newPadding = 10 + (noCount * 5);
    yesBtn.style.padding = `${newPadding}px ${newPadding * 2}px`;


    if (newSize > 100) {
        noBtn.style.right = "20px";
    }
});

yesBtn.addEventListener('click', () => {

    questionSection.style.display = 'none';
    successSection.style.display = 'block';
});