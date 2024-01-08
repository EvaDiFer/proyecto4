import './Home.css';

const PersonalData = {
  saludo: '¡Bienvenido a mi portfolio!',
  name: 'Eva Díaz Fernández',
  position: 'Estudiante de Desarrollo Web Full Stack',
  location: 'Almendralejo(Badajoz)',
  aboutme:
    'Hola! Me llamo Eva, y actualmente me encuentro sumergida en el mundo de la programación. Vengo del ámbito de las letras, y este cambio ha supuesto todo un reto para mi,justo por eso me motiva.',
  goals:
    'Mi objetivo es llegar a adquirir el máximo conocimiento posible y poder dedicarme profesionalmente al desarrollo web. ',
  moreinfo:
    'Estaría encantada de participar en cualquier proyecto que se me plantee para mejorar mis habilidades. ',
};

const Links = {
  LinkedinLink: 'https://www.linkedin.com/in/eva-diaz-485880168/',
  LinkedinIcon: '/icons/linke.png',
  GithubLink: 'http://github.com',
  GithubIcon: '/icons/github.png',
};

export const renderHome = () => {
  const main$$ = document.querySelector('#main');

  main$$.innerHTML = `
    <div class="main-data">
    <h1 class="hello">${PersonalData.saludo}</h1>
    <img class="personal-logo" src="/myAvatar.png" alt="introduced"/>
    <h2 class"name">${PersonalData.name}</h2>
    <h2 class=position">${PersonalData.position}</h2>
    <h3 class="location">${PersonalData.location}</h3>
    <p class="moreinfo">${PersonalData.aboutme}</p>
    <p class="moreinfo">${PersonalData.goals}</p>
    <p class="moreinfo">${PersonalData.moreinfo}</p>
    <a href="#" download="CV.pdf" id="btnDescargar">Descarga mi CV</a>
    </div>
   

    <div class="link-portfolio"
    <a href="${Links.LinkedinLink}" target="_blank"><img class="logo-img" src="${Links.LinkedinIcon}" alt="Linkedin"></a>
    <a href="${Links.GithubLink}" target="_blank"><img class="logo-img" src="${Links.GithubIcon}" alt="github"></a>
  </div>
    `;
};
