function sendEmail(email) {
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
    'key': 'lkLGpjijZDMb31O3uw5sSA',
    'message': {
      'from_email': 'ant@onio.org',
      'to': [
          {
            'email': 'zeura@zeura.com',
            'type': 'to'
          }
        ],
      'autotext': 'true',
      'subject': 'Contacto zeura.com',
      'html': email
    }
  }));
}

document.getElementById('notify').onclick = function(e){
  e.preventDefault();
  this.parentElement.style.display = 'none';
  sendMail(document.getElementById('subscribe').value);

  var brief = document.getElementById('brief');
  var new_item = document.createElement('h4');
  var text_node = document.createTextNode('Gracias, te informaremos en cuanto esté listo.')

  new_item.style.color = '#A40000';
  new_item.style.backgroundColor = '#FFFFFF';
  new_item.style.marginRight = 'auto';
  new_item.style.marginLeft = 'auto';
  brief.insertBefore(new_item);

};
