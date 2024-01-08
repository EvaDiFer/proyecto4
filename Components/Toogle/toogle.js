export const toggleThemeButton = document.querySelector('#toggleThemeButton');
const mainContainer = document.querySelector('#main');

toggleThemeButton.addEventListener('click', () => {
  mainContainer.classList.toggle('dark-theme');
  changeTheme();
});

export const changeTheme = () => {
  const ThemeButton = document.querySelector('#toggleThemeButton');
  if (ThemeButton.innerText === '☀️') {
    ThemeButton.innerText = '🌑';
  } else {
    ThemeButton.innerText = '☀️';
  }
};
