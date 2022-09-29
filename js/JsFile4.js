

var HiddenBtn = document.getElementById('hidddenmenubtn');
var HiddenSlidemenu = document.getElementById('hiddenmenulinks');

HiddenSlidemenu.style.right = '-300px';

HiddenBtn.onclick = function()
{
    if(HiddenSlidemenu.style.right == '-300px')
    {
        HiddenSlidemenu.style.right = '0px'
    }
    else
    {
        HiddenSlidemenu.style.right = '-300px'
    }
}

