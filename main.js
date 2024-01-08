import './style.css';
import { renderHome } from './Components/Home/Home';
import { renderProjects } from './Components/Projects/Projects';
import { renderContact } from './Components/Contact/Contact';
import { changeTheme } from './Components/Toogle/toogle';

changeTheme();

// SPA

const main$$ = document.querySelector('#main');
const printHome = (event) => {
  event?.preventDefault();

  main$$.innerHTML = '';
  renderHome();
};

const printProjects = (event) => {
  event.preventDefault();

  main$$.innerHTML = '';
  renderProjects();
};

renderProjects();

const printContact = (event) => {
  event.preventDefault();

  main$$.innerHTML = '';

  renderContact();
};

renderContact();

const changeHome = document.querySelector('.to-home');
changeHome.addEventListener('click', printHome);

const changeProjects = document.querySelector('.to-projects');
changeProjects.addEventListener('click', printProjects);

const changeContact = document.querySelector('.to-contact');
changeContact.addEventListener('click', printContact);

const ChangeTouchLogo = document.querySelector('.logo');
ChangeTouchLogo.addEventListener('click', printHome);
renderHome();
