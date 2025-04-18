const gameContainer = document.querySelector('.container'),
  userResult = document.querySelector('.user_result img'),
  cpuResult = document.querySelector('.cpu_result img'),
  result = document.querySelector('.result'),
  optionImages = document.querySelectorAll('.option_image');

optionImages.forEach((image, index) => {
  image.addEventListener('click', (e) => {
    image.classList.add('active');
    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove('active');
    });
    imageSrc = e.target.querySelector('img').src;
    userResult.src = imageSrc;

    let randomNumber = Math.floor(Math.random() * 3);
    cpuImages = ['images/rock.png', 'images/paper.png', 'images/scissors.png'];
    cpuResult.src = cpuImages[randomNumber];

    let cpuValue = ['R', 'P', 'S'][randomNumber];
    let userValue = ['R', 'P', 'S'][index];

    let outcomes = {
      RR: 'Draw',
      RP: 'Cpu', // Paper beats Rock
      RS: 'User', // Rock beats Scissors
      PP: 'Draw',
      PR: 'User', // Paper beats Rock
      PS: 'Cpu', // Scissors beats Paper
      SS: 'Draw',
      SR: 'Cpu', // Rock beats Scissors
      SP: 'User', // Scissors beats Paper
    };
    console.log(userValue + cpuValue);
    result.textContent =
      cpuValue === userValue
        ? 'Match Draw'
        : `${outcomes[userValue + cpuValue]} Won `;
  });
});
