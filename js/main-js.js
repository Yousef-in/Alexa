
/* change background headth */
// function scrollheader(){
//   const nav = document.getElementById('header')

//   if ( this.scrolly >= 1 ){
//   nav.classlist.add('scroll-header');
//   }
//   else {
//     nav.classlist.remove('scroll-header');
//   }
// }
// window.addEventListener('scroll', scrollheader)
// ========Menu=============
// var education = document.getElementById("education");
// var work = document.getElementById("work");
// var educationTitle = document.getElementById("titleEducation")
// var workTitle = document.getElementById("titleWork")
// function openwork(){
//   education.style.display = "none";
//   work.style.display = "grid";
//   workTitle.style.color = "var(--first-color)";
//   educationTitle.style.color = "var(--text-color)";
// }
// function openEducation(){
//   education.style.display = "grid";
//   work.style.display = "none";
//   educationTitle.style.color = "var(--first-color)";
//   workTitle.style.color = "var(--text-color)";
// }
//=============menu===========



//=============dark mode======

var icon = document.getElementById("darkMode")

icon.onclick = function (){
  document.body.classList.toggle("dark-mode");
}

//=============dark mode======



// ==========nav for mopile===========

var apps = document.getElementById("apps");
var icons = document.getElementById('icon');

function openMenuIcon() {
  icons.style.top = '-200%'
}
function cluseMenuIcon() {
  icons.style.top = '100%'
}

// ==========nav for mopile===========