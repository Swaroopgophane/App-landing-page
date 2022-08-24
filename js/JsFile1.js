var Header = document.getElementById('Myheader');
var Logobrand = document.getElementById('Brand');

window.onscroll = function()
{
    if(window.scrollY > 40)
    {
        Header.classList.add('activeheader')
        Logobrand.classList.add('activeLogo')
    }
    else
    {
        Header.classList.remove('activeheader')
        Logobrand.classList.remove('activeLogo')
    }
}

