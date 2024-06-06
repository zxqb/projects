let messages = document.querySelector('#box');

var e = document.getElementById('wrapper_Scrollbottom');

function createMessage (style, text) {
    var message = document.createElement("p")
    message.classList.add(style)
    message.classList.add('message', 'animate__animated', 'animate__slideInUp', 'animate__faster')
    message.innerHTML = text
    
    
    return message
}

function createPhotoMessage (style, url, width, height) {
    var message = document.createElement("p")
    message.classList.add(style)
    message.classList.add('message', 'animate__animated', 'animate__slideInUp', 'animate__faster')
    message.style.width= width + 'px';
    message.style.height= height + 'px';
    message.style.backgroundImage = url;
    message.style.backgroundSize = 'cover';
    message.style.flexShrink =  0;
    return message
}

function createVideoMessage (style, url, width, height) {
    var message = document.createElement("video")
    message.classList.add(style)
    message.classList.add('message', 'animate__animated', 'animate__slideInUp', 'animate__faster')
    message.style.width= width + 'px';
    message.style.height= height + 'px';
    var source = document.createElement("source")
    source.src = url;
    message.setAttribute('autoplay', '')
    message.setAttribute('loop', '')
    message.setAttribute('muted', '')
    message.setAttribute('type', 'video/mp4')
    message.setAttribute('playsinline', '')
    message.append(source)
    message.style.flexShrink =  0;
    return message
}



function addMessage (style, text, time) {
    var x = createMessage (style, text)
    function add () { 
        e.before(x) 
        
        
    }
    setTimeout(add, time)
    
     
}
function addPhotoMessage (style, url, time, width, height) {
    var x = createPhotoMessage (style, url, width, height)
    
    function add () { 
        e.before(x) 
        
        
    }
    setTimeout(add, time)

}

function addVideoMessage (style, url, time, width, height) {
    var x = createVideoMessage (style, url, width, height)
    
    function add () { 
        e.before(x) 
        
        
    }
    setTimeout(add, time)

}

function circle(time, one, two) {

    
    function timer () {
       
        if (one!=''){
            document.getElementById(one).style.stroke = '#D33C3C';
        }
        if (two!='') {  
            
            document.getElementById(two).style.stroke = 'var(--receive-bg)';
        }
    }

    setTimeout(timer, time)
}




var intersectionObserver = new IntersectionObserver(function(entries) {
    if (entries[0].intersectionRatio <= 0) return;
    circle(1000, 'stages-circle-1','')
    addMessage ('receive', 'Добрый день! Хотим заказть столешницу 1000х800 - дерево оранжевое, река темная, прозрачная.', 1000)
    circle(2500,'stages-circle-2', 'stages-circle-1')
    addMessage ( 'send', 'Здравствуйте! Есть подходящий вариант из ольхи. Выглядеть будет примерно так:', 2500)    
    circle(4000,'stages-circle-3', 'stages-circle-2')
    addPhotoMessage ('send-photo', "url(img/table.jpg)", 2800, 250, 250)
    addMessage ('receive', 'Отлично, Нам подходит!', 4100)
    circle(6100, 'stages-circle-4', 'stages-circle-3')
    addMessage ('send', 'Слэб уже распилен:', 6100)
    addPhotoMessage ('send-photo', "url(img/cuttable.jpg)", 6400, 400, 150)
    addMessage ('receive', 'Хорошо', 7300)
    addMessage ('send', 'Заливаем смолу:', 8300)
    addVideoMessage ('send-photo', "img/epoxy.mp4", 8600, 300, 300)
    circle(10600, 'stages-circle-5', 'stages-circle-4')
    addMessage ('send', 'Столешница готова, куда отправить?', 10600)
    addPhotoMessage ('send-photo', "url(img/goodtable.jpg)", 10600, 300, 200)
    circle(12600, '', 'stages-circle-5')
    intersectionObserver.disconnect()
    
  });

intersectionObserver.observe(document.querySelector('#box'));
