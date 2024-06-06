

//  Забираем элементы заявки 
const form = document.getElementById('order')

//  Слушаем сабмиты заявок и по срабатыванию запускаем функцию отправки
form.addEventListener('submit', formSend);

// получаем элемент пуш
let push = document.querySelectorAll(".push")
// oreder number
let orderNumber = document.getElementById('orderNumber').textContent
// order image
let orderImage =  document.getElementById('img').src


//  Функция отправки заявки на сервер
function send(form){
    
    let p = new FormData(form)
    
    p.append('number', orderNumber)
    p.append('image', orderImage)
    console.log(orderNumber)
    console.log(p)

    fetch('https://old-woody.ru/cgi-bin/get.php', {
        method: 'POST',
        body: p
    }).then(function(response){
    console.log(response)
    
    }).then((data) =>  console.log(data));
    
    // .catch(function(error){
    // console.log(error);
    // });
};


//  Функция запуска отправки

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
  setTimeout(unPushForm, 5000)
}
// уведомление об отправке исчезает
function unPushForm() {
  push[0].style.display = 'none';
}





