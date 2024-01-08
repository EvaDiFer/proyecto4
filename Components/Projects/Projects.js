import './Projects.css';

const projects = [
  {
    image: '/proyectos.jpg',
    title: 'Landing page',
    tech: 'HTML5-CSS3',
    link: 'https://proyecto-1-rc.vercel.app/',
  },

  {
    image: '/proyectos.jpg',
    title: 'Coffe-Shop-Filters',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://segundo-proyecto.vercel.app/',
  },

  {
    image: '/proyectos.jpg',
    title: 'Color-Flipper',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://color-flipper-jade.vercel.app/',
  },

  {
    image: '/proyectos.jpg',
    title: 'Landding page',
    tech: 'HTML5 - CSS3 ',
    link: 'https://teal-marshmallow-600270.netlify.app/',
  },

  {
    image: '/proyectos.jpg',
    title: 'Art-Gallery',
    tech: 'HTML5 - CSS3 - JavaScript',
    link: 'https://artgalleryevadiaz.netlify.app/',
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
    span.textContent = 'VER PROYECTO';

    link.appendChild(span);

    button.appendChild(link);
    projectDiv.appendChild(button);

    divProjects.appendChild(projectDiv);
  });

  myProjects.appendChild(divProjects);
};
