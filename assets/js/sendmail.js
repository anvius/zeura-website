function sendEmail(email) {
  var http = new XMLHttpRequest();

  http.open(
    'POST',
    'https://mandrillapp.com/api/1.0/messages/send.json',
    true
  );
  http.onreadystatechange = function(){
    if(http.status==200){
      document.getElementById('notify').disable = true;
      document.getElementById('subscribe').disable = true;
      document.getElementById('notify').value = 'Enviado';
    }
  }

  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  http.send(JSON.stringify({
    "key": "lkLGpjijZDMb31O3uw5sSA",
    "message": {
      "from_email": "ant@onio.org",
      "to": [
          {
            "email": "zeura@zeura.com",
            "type": "to"
          }
        ],
      "autotext": "true",
      "subject": "Contacto zeura.com",
      "html": "email"
    }
  }));
}

document.getElementById('notify').onclick = function(e){
  var regex_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2,4})?)$/i;
  e.preventDefault();
  if(regex_email.test(document.getElementById('subscribe').value))
    sendEmail(document.getElementById('subscribe').value);
};
