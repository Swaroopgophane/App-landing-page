

var HiddenBtn = document.getElementById('hidddenmenubtn');
var HiddenSlidemenu = document.getElementById('hiddenmenulinks');
var CrossMenu = document.getElementById('Closemenu');

HiddenSlidemenu.style.right = '-400px';

HiddenBtn.onclick = function()
{
    if(HiddenSlidemenu.style.right == '-400px')
    {
        HiddenSlidemenu.style.right = '0px'
    }
}

CrossMenu.onclick = function()
{
    if(HiddenSlidemenu.style.right == '0px')
    {
        HiddenSlidemenu.style.right = '-400px'
    }
}

