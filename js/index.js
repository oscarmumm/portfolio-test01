const d = document;

const menuIconDiv1 = d.getElementById('menu-icon-div1');
const menuIconDiv2 = d.getElementById('menu-icon-div2');
const menuIconDiv3 = d.getElementById('menu-icon-div3');
const menuIcon = d.getElementById('menu-icon');

const navBar = d.getElementById('navbar');

const presentationPhase1 = d.getElementById('presentationPhase1');
const presentationPhase2 = d.getElementById('presentationPhase2');

const profilePicture = d.getElementById('profile-picture');

menuIcon.addEventListener('click', () => {
  menuIconDiv1.classList.toggle('menu-click-style1');
  menuIconDiv2.classList.toggle('menu-click-style2');
  menuIconDiv3.classList.toggle('menu-click-style3');
  navBar.classList.toggle('navbar-collapse');
});

//---------- this is for typing animation ----------

const node1 = d.getElementById('node1');
const node2 = d.getElementById('node2');
const node3 = d.getElementById('node3');
const text1 = `function OscarMumm () {`;
const text2 = ` return 'Front-end Web Developer';`;
const text3 = `};`;
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

function colorizePresentation () {
  presentationPhase1.style.display = 'block';
  presentationPhase2.style.display = 'none';
  profilePicture.classList.remove('hidden');
}
window.addEventListener('load', () => {
  typing1();
  setTimeout(typing2, 1500);
  setTimeout(typing3, 3500);
  setTimeout(colorizePresentation, 4200);
});

