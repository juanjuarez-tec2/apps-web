//Establecemos ciertas opciones para nuestro navegador
phonon.options({
    navigator:{
        defaultPage: 'home',
        animatedPages: true,
        enableBrowserBackButton: true,
        templateRootDirectory: './tpl'
    },
    i18n: null
});

//Iniciamos phonon
var app = phonon.navigator();

//Esta es la primer pagina, la iniciamos
app.on({page: 'home', preventClose: false, content: null});
//Esta es la segunda pagina, si seleccionamos comprar o si se cancela la cuenta
app.on({page: 'pagetwo', preventClose: true, content: 'pagetwo.html', readyDelay: 1},
    function(activity){
        var action = null;
        var onAction = function(evt){
            var target = evt.target;
            action = 'ok';
            if(target.getAttribute('data-order') === 'order'){
                phonon.alert('Gracias por su compra!', 'Estimado cliente');
            }else{
                phonon.alert('Su orden a sido cancelada', 'Estimado cliente');
            }
        };
        //Mandamos llamar a las acciones de cancelar y ordenar
        activity.onCreate(function(){
            document.querySelector('.order').on('tap', onAction);
            document.querySelector('.cancel').on('tap', onAction);
        });
        //ponemos una alerta para forzar a que el usuario eliga una accion.
        activity.onClose(function(self){
            if(action !== null){
                self.close();
            }else{
                phonon.alert('Antes de dejar esta pagina, debes realizar una accion', 'Accion requerida');
            }
        });
    
        activity.onHidden(function(){
            action = null;
        });
        //seleccionamos el elemento pizza
        activity.onHashChanged(function(pizza){
            document.querySelector('.pizza').textContent = pizza;
        });
    });

app.start();