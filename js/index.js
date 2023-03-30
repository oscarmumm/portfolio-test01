const d = document;

const menuIconDiv1 = d.getElementById('menu-icon-div1');
const menuIconDiv2 = d.getElementById('menu-icon-div2');
const menuIconDiv3 = d.getElementById('menu-icon-div3');
const menuIcon = d.getElementById('menu-icon');

const navBar = d.getElementById('navbar');
const navLink = d.querySelectorAll('.nav-link');


//------------------------------------------ CONSTS FOR OBSERVER SECTIONS
const startSection = d.getElementById('start-section');
const aboutSection = d.getElementById('about-section');
const skillsSection = d.getElementById('skills-section');
const projectsSection = d.getElementById('projects-section');
const contactSection = d.getElementById('contact-section');
const certificationSection = d.getElementById('certifications-section');



//------------------------------------------ MENU ICON FUNCTION
menuIcon.addEventListener('click', () => {
  menuIconDiv1.classList.toggle('menu-click-style1');
  menuIconDiv2.classList.toggle('menu-click-style2');
  menuIconDiv3.classList.toggle('menu-click-style3');
  navBar.classList.toggle('navbar-collapse');
});


//------------------------------------------ NAV LINKS FUNCTION
navLink.forEach((element) => {
  element.addEventListener('click', () => {
    menuIconDiv1.classList.toggle('menu-click-style1');
    menuIconDiv2.classList.toggle('menu-click-style2');
    menuIconDiv3.classList.toggle('menu-click-style3');
    navBar.classList.toggle('navbar-collapse');
  })
})


//------------------------------------------ TYPING ANIMATION
const node1 = d.getElementById('node1');
const text1 = `const OscarMumm = { 'Front-end Web Developer' };`;
let typingIndex = 0;
function typing() {
  if (typingIndex < text1.length) {
    node1.innerHTML += `${text1.charAt(typingIndex)}`;
    typingIndex++;
    setTimeout(typing, 75);
  }
}

window.addEventListener('load', () => {
  typing();
});


//-------------------------------------------- OBSERVER 
const loadSection = (entries, observer) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
};

const observer = new IntersectionObserver(loadSection, {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0.5
});

observer.observe(aboutSection);
observer.observe(skillsSection);
observer.observe(projectsSection);
observer.observe(contactSection);
observer.observe(certificationSection);