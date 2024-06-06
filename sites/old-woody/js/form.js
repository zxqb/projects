// //  cобираем радио в квизе
// let tableForm = document.getElementsByName('form');
// let tableEdge = document.getElementsByName('edge');
// let tableResin = document.getElementsByName('resin');
// let tableColor = document.getElementsByName('color');
//  Забираем элементы заявки 
// верхнюю
const form = document.getElementById('form-up')
// нижнюю
const formDown = document.getElementById('form-down')

 

// функция сбора радио

// function quizRadio(param) {
//   for (var i=0;i<param.length; i++) {
//     if (param[i].checked) {
//       return param
//     }
//   }
// }

//  Слушаем сабмиты заявок и по срабатыванию запускаем функцию отправки
form.addEventListener('submit', formSend);
formDown.addEventListener('submit', formDownSend);

// получаем элемент пуш
let push = document.querySelectorAll(".push")



//  Функция отправки заявки на сервер
function send(form){
  console.log(form)
  for (var value of new FormData(form).values()) {
    console.log(value);
 }
  fetch('https://old-woody.ru/cgi-bin/get.php', {
      method: 'POST',
      body: new FormData(form)
  }).then(function(response){
  console.log(response)
  
  }).catch(function(error){
  console.log(error);
  });
};


//  Функция запуска отправки
async function formDownSend(e) {
  e.preventDefault();
 
  let error = formValidate(formDown)
}

async function formSend(e) {
  e.preventDefault();
  let error = formValidate(form)
}

//  Проверяем заполнение заявки 
function formValidate(form) {
  let formReq = document.querySelectorAll('.just-validate-error-field')
  // Смотрим сколько полей с ошибкой по классу, если больше 0 то не отправляем 
  if (formReq.length > 0) {
    console.log('Отправка прервана, не заполнены поля!')
  }
  else {
    console.log('Отправка формы')
    send(form)
    clearForm(form) 
    pushForm() 
  }
}


// очистка формы
function clearForm(form) {
  form.reset();
}

// уведомление об отправке появляется

function pushForm() {
  push[0].style.display = 'inline-block';
  setTimeout(unPushForm, 2000)
}
// уведомление об отправке исчезает
function unPushForm() {
  push[0].style.display = 'none';
}


