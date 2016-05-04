      //Inicializamos la instancia de nuestra aplicacion
      var app = {  

          initialize: function() {
              this.bindEvents();
          },
         
          bindEvents: function() { 
            //Establecemos los eventos para buscar y tomar las fotos
      
              var takePhoto = document.getElementById('takePhoto');
              takePhoto.addEventListener('click', app.takePhoto, false);
              var sendPhoto = document.getElementById('sendPhoto');
              sendPhoto.addEventListener('click', app.sendPhoto, false);
          },
          //mostramos un mensaje al momento de enviar la imagen
          sendPhoto: function() {
              alert('Imagen enviada al servidor');
          },
          //Creamos una funcion la cual buscara el destino de la foto
          takePhoto: function(){
              navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20, 
                  allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });
          },
          //Accedemos a los recursos de phonegap para ver si se hizo con exito o fallo
          //la operacion
          onPhotoDataSuccess: function(imageData) {
         
            var photo = document.getElementById('photo');

            photo.style.display = 'block';

            photo.src = "data:image/jpeg;base64," + imageData;

            var sendPhoto = document.getElementById('sendPhoto');
            sendPhoto.style.display = 'block';
            //Simplemente si todo resulto bien agregamos la imagen
          },
          //Si ocurrio un problema mostramos un mensaje
          onFail: function(message) {
            alert('Failed because: ' + message);
          }

      };

     
