const d = document;

const menuIconDiv1 = d.getElementById('menu-icon-div1');
const menuIconDiv2 = d.getElementById('menu-icon-div2');
const menuIconDiv3 = d.getElementById('menu-icon-div3');
const menuIcon = d.getElementById('menu-icon');

const navBar = d.getElementById('navbar');

const startSection = d.getElementById('start-section');
const aboutSection = d.getElementById('about-section');
const skillsSection = d.getElementById('skills-section');
const projectsSection = d.getElementById('projects-section');
const contactSection = d.getElementById('contact-section');
const certificationSection = d.getElementById('certifications-section');

const navLink = d.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', () => {
  menuIconDiv1.classList.toggle('menu-click-style1');
  menuIconDiv2.classList.toggle('menu-click-style2');
  menuIconDiv3.classList.toggle('menu-click-style3');
  navBar.classList.toggle('navbar-collapse');
});

navLink.forEach((element) => {
  element.addEventListener('click', () => {
    menuIconDiv1.classList.toggle('menu-click-style1');
    menuIconDiv2.classList.toggle('menu-click-style2');
    menuIconDiv3.classList.toggle('menu-click-style3');
    navBar.classList.toggle('navbar-collapse');
  })
})


//---------- this is for typing animation --------
const node1 = d.getElementById('node1');
const node2 = d.getElementById('node2');
const node3 = d.getElementById('node3');
const text1 = `{ OscarMumm :`;
const text2 = `'Front-end Web`;
const text3 = `Developer};`;
let i = 0;
let j = 0;
let k = 0;
function typing1() {
  if (i < text1.length) {
    node1.innerHTML += `${text1.charAt(i)}`;
    i++;
    setTimeout(typing1, 50);
  }
}
function typing2() {
  if (j < text2.length) {
    node2.innerHTML += `${text2.charAt(j)}`;
    j++;
    setTimeout(typing2, 50);
  }
}
function typing3() {
  if (k < text3.length) {
    node3.innerHTML += `${text3.charAt(k)}`;
    k++;
    setTimeout(typing3, 50);
  }
}
window.addEventListener('load', () => {
  typing1();
  setTimeout(typing2, 900);
  setTimeout(typing3, 1800);
});


//---------------------- OBSERVER ----------------------
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