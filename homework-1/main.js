const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';

function countChar(str, char) {
  let counter =  0;
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char.toLowerCase()) {
      counter++;
    }
  }
  return counter;
}

function getRow(firstRow, secondRow) {
  const char = prompt('Пожалуйста, введите букву', 'а');
  const charsInFirstRow = countChar(firstRow, char);
  const charsInSecondRow = countChar(secondRow, char);
  let result;
  if (charsInFirstRow === charsInSecondRow) {
    result = 'Количество букв ' + char + ' в строках одинаковое - ' + charsInFirstRow;
  } else if (charsInFirstRow > charsInSecondRow) {
    result = firstRow;
  } else {
    result = secondRow;
  }

  alert(result);
}

getRow(firstRow, secondRow);
