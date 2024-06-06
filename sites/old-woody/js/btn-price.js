let btn = document.querySelector('.btn-price');
let el = document.getElementById('price-calc');

btn.onclick = function () {
    el.scrollIntoView()
}

// Получаем нужный элемент
let element= document.getElementById('price');
let footer = document.getElementById('footer');


// Создаем новый observer (наблюдатель)
let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            btn.style.opacity = '0'
            btn.style.transform = 'translate(500px, 0px)'
        }
        else {
            btn.style.opacity = '1'
            btn.style.transform = 'translate(0px, 0px)'
        }
    });
});

// Прикрепляем элемент к «наблюдателю»

observer.observe(element);
observer.observe(footer);