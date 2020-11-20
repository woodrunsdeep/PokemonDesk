const $btns = document.querySelectorAll('.button');

const character = {
  name: 'Pikachu',
  hpCurrent: 100,
  hpDefault: 100,
  hpIndicator: document.getElementById('health-character'),
  hpProgressBar: document.getElementById('progressbar-character'),
  moves:
    {
      kick: 30,
      jab: 10,
    }
}

const enemy = {
  name: 'Charmander',
  hpCurrent: 100,
  hpDefault: 100,
  hpIndicator: document.getElementById('health-enemy'),
  hpProgressBar: document.getElementById('progressbar-enemy'),
}

for ($btn of $btns) {
  $btn.addEventListener('click', function () {
    changeHP(random(character.moves[$btn.id]), enemy);
  })
}

function init() {
  console.log('Start Game');
  renderHP(character);
  renderHP(enemy);
}

function renderHPLeft (person) {
  person.hpIndicator.innerText = person.hpCurrent + ' / ' + person.hpDefault;
}

function renderHPProgressBar (person) {
  person.hpProgressBar.style.width = person.hpCurrent + '%';
}

function renderHP (person) {
  renderHPLeft(person);
  renderHPProgressBar(person);
}

function changeHP (count, person) {
  if (person.hpCurrent < count) {
    person.hpCurrent = 0;
    renderHP(person);
    alert ('Бедный ' + person.name + ' Проиграл!');
    for ($btn of $btns) {
      $btn.disabled = true;
    }
  } else {
    person.hpCurrent -= count;
  }
  renderHP(person);
}

function random (num) {
  return Math.ceil(Math.random() * num);
}

init();
