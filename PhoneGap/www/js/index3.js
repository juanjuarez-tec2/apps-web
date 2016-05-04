
var app = {
    // Inicializamos la instancia de los eventos
    initialize: function() {
        this.bindEvents();
    },
    //agregamos los eventos para que corran en el servicio de phonegapp
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    //Le decimos el evento
  
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Aqui le definimos el id  y saber si lo recibio o lo escucho
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        //le damos estilo 
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();