function sendEmail(e) {
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
      'html': 'Contacto recibido en l formulario de zeura.com'+document.getElementById('subscribe').value;
    }
  }));
}

document.getElementById('notify').onclick = function(e){
  e.preventDefault();

  var form = this.parentElement;

  console.log('click');
  form.innerHTML = '<center><h4>Gracias, te informaremos en cuanto esté listo.</h4></center>'
};
