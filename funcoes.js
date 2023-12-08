$(document).ready(function(){
    var temaEsc = localStorage.getItem('tema');

    if (temaEsc)
     {
        appTema(temaEsc);
    }

    $('#t-light').on('click', function()
    {
     appTema('claro');
     localStorage.setItem('tema', 'claro');
    });
    $('#t-dark').on('click', function()
    {
        appTema('escuro');
     localStorage.setItem('tema', 'escuro');
    });

    function appTema(tema){
        if (tema === 'claro')
         {
            $('body').removeClass('tema-escuro').addClass('tema-claro');
            } else {
                $('body').removeClass('tema-claro').addClass('tema-escuro');
            }
    }
});