const Navbar = document.getElementById("Navbar")

function showSection(sectionId) {
  const sections = ['Home-Content', 'About-Content', 'Project-Content', 'Contact-Content'];
  sections.forEach(id => {
    const el = document.getElementById(id); //ngambil id dari var sections
    if (el) {
      el.classList.add('hidden'); //hiddenin semua div
    }
  });

  const target = document.getElementById(sectionId); //ambil ud dari parameter function
  if (target) {
    target.classList.remove('hidden'); //rmove property hidden di element id
  }
}
// Home()
 About()
// Project();
//  Contact();
function Home() {
  showSection('Home-Content');
  Navbar.classList.add('hidden')
}

function About() {
  showSection('About-Content');
  Navbar.classList.remove('hidden')
}

function Project() {
  showSection('Project-Content');
  Navbar.classList.remove('hidden')
}

function Contact() {
  showSection('Contact-Content');
  Navbar.classList.remove('hidden')
}
