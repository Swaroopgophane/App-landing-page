



var Innercol = document.getElementById('Colinner');
var Innercol2 = document.getElementById('Colinner2');
var Innercol3 = document.getElementById('Colinner3');
var Innercol4 = document.getElementById('Colinner4');
var Innercol5 = document.getElementById('Colinner5');
var Innercol6 = document.getElementById('Colinner6');


var Tipinfo = document.getElementById('Hiddentip');
var Tipinfo2 = document.getElementById('Hiddentip2');
var Tipinfo3 = document.getElementById('Hiddentip3');
var Tipinfo4 = document.getElementById('Hiddentip4');
var Tipinfo5 = document.getElementById('Hiddentip5');
var Tipinfo6 = document.getElementById('Hiddentip6');


var Labelque = document.getElementById('Tiplabel');
var Labelque2 = document.getElementById('Tiplabel2');
var Labelque3 = document.getElementById('Tiplabel3');
var Labelque4 = document.getElementById('Tiplabel4');
var Labelque5 = document.getElementById('Tiplabel5');
var Labelque6 = document.getElementById('Tiplabel6');


var Plussign = document.getElementById('plus');
var Plussign2 = document.getElementById('plus2');
var Plussign3 = document.getElementById('plus3');
var Plussign4 = document.getElementById('plus4');
var Plussign5 = document.getElementById('plus5');
var Plussign6 = document.getElementById('plus6');

var Minussign = document.getElementById('minus');
var Minussign2 = document.getElementById('minus2');
var Minussign3 = document.getElementById('minus3');
var Minussign4 = document.getElementById('minus4');
var Minussign5 = document.getElementById('minus5');
var Minussign6 = document.getElementById('minus6');

Tipinfo.style.maxHeight = '0px';

Labelque.onclick = function()
{
    Innercol.style.background = 'rgba(0,0,0,.6)'
    Innercol.style.color = '#fff'
    Innercol2.style.background = ''
    Innercol2.style.color = ''
    Innercol3.style.background = ''
    Innercol3.style.color = ''
   

    Tipinfo.style.maxHeight = '100vh'
    Tipinfo2.style.maxHeight = '0'
    Tipinfo3.style.maxHeight = '0'

    Plussign.style.opacity = '0'
    Minussign.style.opacity = '1'

    Plussign2.style.opacity = '1'
    Minussign2.style.opacity = '0'

    Plussign3.style.opacity = '1'
    Minussign3.style.opacity = '0'
}

Labelque2.onclick = function()
{
    Innercol.style.background = ''
    Innercol.style.color = ''
    Innercol2.style.background = 'rgba(0,0,0,.6)'
    Innercol2.style.color = '#fff'
    Innercol3.style.background = ''
    Innercol3.style.color = ''

    Tipinfo.style.maxHeight = '0'
    Tipinfo2.style.maxHeight = '100vh'
    Tipinfo3.style.maxHeight = '0'

    Plussign.style.opacity = '1'
    Minussign.style.opacity = '0'

    Plussign2.style.opacity = '0'
    Minussign2.style.opacity = '1'

    Plussign3.style.opacity = '1'
    Minussign3.style.opacity = '0'
}

Labelque3.onclick = function()
{

    Innercol.style.background = ''
    Innercol.style.color = ''
    Innercol2.style.background = ''
    Innercol2.style.color = ''
    Innercol3.style.background = 'rgba(0,0,0,.6)'
    Innercol3.style.color = '#fff'

    Tipinfo.style.maxHeight = '0'
    Tipinfo2.style.maxHeight = '0'
    Tipinfo3.style.maxHeight = '100vh'

    Plussign.style.opacity = '1'
    Minussign.style.opacity = '0'

    Plussign2.style.opacity = '1'
    Minussign2.style.opacity = '0'

    Plussign3.style.opacity = '0'
    Minussign3.style.opacity = '1'
}

Labelque4.onclick = function()
{

    Innercol4.style.background = 'rgba(0,0,0,.6)'
    Innercol4.style.color = '#fff'
    Innercol5.style.background = ''
    Innercol5.style.color = ''
    Innercol6.style.background = ''
    Innercol6.style.color = ''

    Tipinfo4.style.maxHeight = '100vh'
    Tipinfo5.style.maxHeight = '0'
    Tipinfo6.style.maxHeight = '0'

    Plussign4.style.opacity = '0'
    Minussign4.style.opacity = '1'

    Plussign5.style.opacity = '1'
    Minussign5.style.opacity = '0'

    Plussign6.style.opacity = '1'
    Minussign6.style.opacity = '0'
}

Labelque5.onclick = function()
{

    Innercol4.style.background = ''
    Innercol4.style.color = ''
    Innercol5.style.background = 'rgba(0,0,0,.6)'
    Innercol5.style.color = '#fff'
    Innercol6.style.background = ''
    Innercol6.style.color = ''

    Tipinfo4.style.maxHeight = '0'
    Tipinfo5.style.maxHeight = '100vh'
    Tipinfo6.style.maxHeight = '0'

    Plussign4.style.opacity = '1'
    Minussign4.style.opacity = '0'

    Plussign5.style.opacity = '0'
    Minussign5.style.opacity = '1'

    Plussign6.style.opacity = '1'
    Minussign6.style.opacity = '0'
}

Labelque6.onclick = function()
{

    Innercol4.style.background = ''
    Innercol4.style.color = ''
    Innercol5.style.background = ''
    Innercol5.style.color = ''
    Innercol6.style.background = 'rgba(0,0,0,.6)'
    Innercol6.style.color = '#fff'

    Tipinfo4.style.maxHeight = '0'
    Tipinfo5.style.maxHeight = '0'
    Tipinfo6.style.maxHeight = '100vh'

    Plussign4.style.opacity = '1'
    Minussign4.style.opacity = '0'

    Plussign5.style.opacity = '1'
    Minussign5.style.opacity = '0'

    Plussign6.style.opacity = '0'
    Minussign6.style.opacity = '1'
}