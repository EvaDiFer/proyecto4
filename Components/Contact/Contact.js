import './Contact.css';

const MoreInfo = {
  moreexperience:
    '🎨Grado Historia del Arte y Patrimonio Histórico-Artístico(UEX)',
  curso1: '💻Curso Iniciación Salesforce',
  curso2: '💻Curso Administración Salesforce ',
  aboutme:
    'Te dejo aquí un formulario por si puedo resolverte cualquier duda. ¡Estaré encantada!',
};

export const renderContact = () => {
  const main$$ = document.querySelector('#main');

  main$$.innerHTML = `
  <div class="mi-div">
  <h3 class="experience">${MoreInfo.moreexperience}</h3>
  <h3 class="experience">${MoreInfo.curso1}</h3>
  <h3 class="experience">${MoreInfo.curso2}</h3>
  
</div>
    <form id="form">
    <div class="field">
      <label for="from_name">Nombre</label>
      <input type="text" name="from_name" id="from_name">
    </div>
    <div class="field">
    <label for="email_id">Tu email</label>
    <input type="text" name="email_id" id="email_id">
  </div>
    <div class="field">
      <label for="message">Mensaje</label>
      <input class="messageInput" type="text" name="message" id="message">
    </div>
  
    <input type="submit" id="button" value="Enviar" >

    <h3 class="more-info">${MoreInfo.aboutme}</h3>
  </form>
  

 
        `;

  const btn = document.getElementById('button');

  document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_18vj25i';

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = 'Send Email';
        alert('Enviado');
      },
      (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      }
    );
  });
};

renderContact();
