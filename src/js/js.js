const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html')

darkToggle.addEventListener('click', function() {
  if(darkToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
})

// condition toggle if dark mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

// sidebar
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelectorAll(".sidebar");

  sidebar.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const sidebarOpen = toggle.querySelector(".sidebarOpen");

      sidebarOpen.classList.toggle('hidden');
    });
  });
});

// responsive sidebar
const sidebarToggle = document.querySelector('#sidebar-toggle')
const drawerToggle = document.querySelector('.drawer-toggle')
const sidebar = document.querySelector('#sidebar');

drawerToggle.addEventListener('click', () => {

  if(drawerToggle.checked) {
    sidebar.classList.remove('hidden')

    sidebarToggle.addEventListener('click', () => {
      drawerToggle.checked = false
    })

  } else {
    sidebar.classList.add('hidden')
  }
});