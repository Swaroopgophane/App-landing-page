

// color slider script

var CommonColor = document.getElementById('commoncolorbtn');
var CommonColor2 = document.getElementById('commoncolorbtn2');
var CommonColor3 = document.getElementById('commoncolorbtn3');

var SetIcon = document.getElementById('Settingicon');
var Hiddenslider = document.getElementById('Colorslider');

var Colorbox1 = document.getElementById('color1');
var Colorbox2 = document.getElementById('color2');
var Colorbox3 = document.getElementById('color3');
var Colorbox4 = document.getElementById('color4');
var Colorbox5 = document.getElementById('color5');
var Colorbox6 = document.getElementById('color6');
var Colorbox7 = document.getElementById('color7');
var Colorbox8 = document.getElementById('color8');


Hiddenslider.style.transform = 'translateX(-230px)';

SetIcon.onclick = function () {
    if (Hiddenslider.style.transform == 'translateX(-230px)') {
        Hiddenslider.style.transform = 'translateX(0px)'
    }
    else {
        Hiddenslider.style.transform = 'translateX(-230px)'
    }
}

Colorbox1.onclick = function () {
    CommonColor.style.background = 'rgb(5, 228, 135)'
    CommonColor2.style.background = 'rgb(5, 228, 135)'
    CommonColor3.style.background = 'rgb(5, 228, 135)'
}
Colorbox2.onclick = function () {
    CommonColor.style.background = 'rgb(5, 195, 228)'
    CommonColor2.style.background = 'rgb(5, 195, 228)'
    CommonColor3.style.background = 'rgb(5, 195, 228)'
}
Colorbox3.onclick = function () {
    CommonColor.style.background = 'rgb(228, 5, 198)'
    CommonColor2.style.background = 'rgb(228, 5, 198)'
    CommonColor3.style.background = 'rgb(228, 5, 198)'
}
Colorbox4.onclick = function () {
    CommonColor.style.background = 'rgb(228, 12, 5)'
    CommonColor2.style.background = 'rgb(228, 12, 5)'
    CommonColor3.style.background = 'rgb(228, 12, 5)'
}
Colorbox5.onclick = function () {
    CommonColor.style.background = 'rgb(5, 228, 42)'
    CommonColor2.style.background = 'rgb(5, 228, 42)'
    CommonColor3.style.background = 'rgb(5, 228, 42)'
}
Colorbox6.onclick = function () {
    CommonColor.style.background = 'rgb(228, 5, 79)'
    CommonColor2.style.background = 'rgb(228, 5, 79)'
    CommonColor3.style.background = 'rgb(228, 5, 79)'
}
Colorbox7.onclick = function () {
    CommonColor.style.background = 'rgb(228, 113, 5)'
    CommonColor2.style.background = 'rgb(228, 113, 5)'
    CommonColor3.style.background = 'rgb(228, 113, 5)'
}
Colorbox8.onclick = function () {
    CommonColor.style.background = 'rgb(5, 83, 228)'
    CommonColor2.style.background = 'rgb(5, 83, 228)'
    CommonColor3.style.background = 'rgb(5, 83, 228)'
}