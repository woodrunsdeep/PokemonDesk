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

const phoneNumber = prompt('Введите номер телефона в следующем формате +71234567890');

function formatString (str) {
	let result = '';
  if (str.length >= 10 && str.length <= 12) {
		for (let i = (str.length - 10); i < str.length; i++) {
		result += str[i];
		}
  } else {
    alert('Формат номера неверный');
    return;
  }
	return result;
}

function formatPhoneNumber (phoneNumber) {
  const countryCode = '+7 ';
  let formattedNumber = '';
  phoneNumber = formatString(phoneNumber);
  if (phoneNumber) {
    const regionCode = phoneNumber.slice(0, 3);
    const firstSection = phoneNumber.slice(3, 6);
    const secondSection = phoneNumber.slice(6, 8);
    const thirdSection = phoneNumber.slice(8, 10);
    formattedNumber = countryCode + '(' + regionCode + ') ' + firstSection + '-' + secondSection + '-' + thirdSection;
    alert(formattedNumber);
    return;
  } else {
    return;
  }
}

formatPhoneNumber(phoneNumber);
