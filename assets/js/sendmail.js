function sendEmail() {
  var http = new XMLHttpRequest();

  http.open(
    'POST',
    'https://mandrillapp.com/api/1.0/messages/send.json',
    true
  );
  http.onload = function () {
      alert("complete: " + http.resposeText);
  }
  http.send(JSON.stringify({
    {
    'key': 'lkLGpjijZDMb31O3uw5sSA',
    'message': {
      'from_email': 'ant@onio.org',
      'to': [
          {
            'email': 'zeura@zeura.com'
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': 'Contacto zeura.com',
      'html': 'Contacto recibido en l formulario de zeura.com'
    }
  }));
}

var send_button = document.getElementById('notify');

send_button.onclick = function(){
  var form = this.parentElement;

  form.innerHTML = '<center><h4>Gracias, te informaremos en cuanto esté listo.</h4></center>'  
};
