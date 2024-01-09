import './Projects.css';

const projects = [
  {
    image: '/proyectos.jpg',
    title: 'Landing page',
    tech: 'HTML5-CSS3',
    link: 'https://proyecto-1-rc.vercel.app/',
    git: 'https://github.com/EvaDiFer/proyecto-1-rc',
  },

  {
    image: '/proyectos.jpg',
    title: 'Coffe-Shop-Filters',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://segundo-proyecto.vercel.app/',
    git: 'https://github.com/EvaDiFer/SegundoProyecto',
  },

  {
    image: '/proyectos.jpg',
    title: 'Color-Flipper',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://color-flipper-jade.vercel.app/',
    git: 'https://github.com/EvaDiFer/portfolio',
  },

  {
    image: '/proyectos.jpg',
    title: 'Landing page',
    tech: 'HTML5 - CSS3 ',
    link: 'https://teal-marshmallow-600270.netlify.app/',
    git: 'https://github.com/EvaDiFer/LandingPage',
  },

  {
    image: '/proyectos.jpg',
    title: 'Art-Gallery',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://artgalleryevadiaz.netlify.app/',
    git: 'https://github.com/EvaDiFer/ArtGallery',
  },

  {
    image: '/proyectos.jpg',
    title: 'EpicSnap',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://steady-dragon-5e9002.netlify.app/',
    git: 'https://github.com/EvaDiFer/EpicSnap',
  },
];

export const renderProjects = () => {
  const myProjects = document.querySelector('#main');
  const divProjects = document.createElement('div');
  divProjects.className = 'projects-container';

  projects.forEach((project) => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const image = document.createElement('img');
    image.className = 'projects-images';
    image.src = project.image;
    image.alt = project.title;
    projectDiv.appendChild(image);

    const title = document.createElement('h3');
    title.textContent = project.title;
    projectDiv.appendChild(title);

    const tech = document.createElement('p');
    tech.textContent = project.tech;
    projectDiv.appendChild(tech);

    const button = document.createElement('button');
    button.className = 'cta';

    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';

    const span = document.createElement('span');
    span.className = 'hover-underline-animation';
    span.textContent = 'Deployment 📎';

    link.appendChild(span);

    button.appendChild(link);

    const githubLink = document.createElement('a');
    githubLink.href = project.git;
    githubLink.target = '_blank';

    const codeText = document.createElement('span');
    codeText.textContent = 'Code';
    codeText.className = 'codigo';
    githubLink.appendChild(codeText);

    const githubIcon = document.createElement('img');
    githubIcon.className = 'github-icon';
    githubIcon.src = '/public/icons/github.png';
    githubIcon.alt = 'GitHub Repository';
    githubLink.appendChild(githubIcon);

    button.appendChild(githubLink);

    projectDiv.appendChild(button);

    divProjects.appendChild(projectDiv);
  });

  myProjects.appendChild(divProjects);
};
