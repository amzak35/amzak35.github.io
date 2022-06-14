let toggle = document.querySelector('.toggle-theme');

// Turn the theme off if the 'funky' key exists in localStorage
if (localStorage.getItem('funky')) {
  document.body.classList.add('funky');
  toggle.innerText = 'Turn theme off';
}

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('funky')) {
    document.body.classList.remove('funky');
    toggle.innerText = 'Turn theme on';
    localStorage.removeItem('funky');
  } else {
    document.body.classList.add('funky');
    toggle.innerText = 'Turn theme off';
    localStorage.setItem('funky', true);
  }
});
