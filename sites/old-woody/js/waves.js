let last_known_scroll_position = 0;
let ticking = false;
let obj = document.getElementById('wave-up');
let obj2 = document.getElementById('wave-up-back');
let obj3 = document.getElementById('wave-down');
let obj4 = document.getElementById('wave-down-back');

function waveUp(scroll_pos) {

    let pos = -scroll_pos*0.6
    let slowPos = -scroll_pos*0.2
    if (scroll_pos < 650) {
        
        obj.style.transform = "translateX("+pos+"px)";
        obj2.style.transform = "translateX("+slowPos+"px)";
    }
    
    if (650 < scroll_pos < 900) {
        obj3.style.transform = "translateX("+pos+"px)";
        obj4.style.transform = "translateX("+slowPos+"px)";
    }
}

window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;


    if (!ticking) {
    window.requestAnimationFrame(function() {
        waveUp(last_known_scroll_position);
        ticking = false;
    });

    ticking = true;
    }
    


});