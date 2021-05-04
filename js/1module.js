let base = prompt("Input the number");
base = Number(base);
console.log(base);

let power = prompt("Input the power");
power = Number(power);
console.log(power);

let result = Math.pow(base, power);
console.log(result);

///////////////

let firstName = prompt("Input your first name");
let lastName = prompt("Input your last name");
let fullName = firstName + " " + lastName;
console.log(fullName);

/////////////////

Таблица умножения

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(`${ i } * ${ j } = ${ i * j }`);
    }
}

////////////////

const message = `Вы заказали дроидов на сумму ${orderedQuantity} * ${pricePerDroid} кредитов. Доставка ${deliveryFee} кредитов включена в сумму заказа.`;

/////////////

function isValidPassword(password) {
    const SAVED_PASSWORD = 'jqueryismyjam';
    let message;
  // Пиши код ниже этой строки
    switch (passwort) {
        case null:
            message = "Отменено пользователем";
            break;
        
        case SAVED_PASSWORD:
            message = "Добро пожаловать!";
            break;
        
        default:
            message = "Доступ запрещён, неверный пароль!";
            break;
    }
  // Пиши код выше этой строки
  return message;
}


проверяет равенство сохранённого и введённого паролей

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  const isMatch = SAVED_PASSWORD === password;
  return isMatch;
}

/// проверяет, входит ли число в промежуток 

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; 
  return isInRange;
}

////////////// проверка вхождения

function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}

////////////////// SPAM AND SALE

function checkForSpam(message) {
  const messageLow = message.toLowerCase();
  let result;
  if (messageLow.includes ("spam") || messageLow.includes ("sale")) {
    result = true; 
  } else {
    result = false;
  }
  return result;
}