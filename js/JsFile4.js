

var HiddenBtn = document.getElementById('hidddenmenubtn');
var HiddenSlidemenu = document.getElementById('hiddenmenulinks');

HiddenSlidemenu.style.transform = 'translateX(650px)';

HiddenBtn.onclick = function()
{
    if(HiddenSlidemenu.style.transform == 'translateX(650px)')
    {
        HiddenSlidemenu.style.transform = 'translateX(0px)'
    }
    else
    {
        HiddenSlidemenu.style.transform = 'translateX(650px)'
    }
}

