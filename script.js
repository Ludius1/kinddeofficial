/*STICKY HEADER*/
const nav = document.querySelector("nav");

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Check if the window's vertical scroll position is greater than 0
  if (window.scrollY > 0) {
    // If it is, add the 'window-scroll' class to the 'nav' element
    nav.classList.add("window-scroll");
  } else {
    // If it's not, remove the 'window-scroll' class from the 'nav' element
    nav.classList.remove("window-scroll");
  }
});






const menu = document.querySelector(".mid__nav");
const menuBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "block";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})


const closeNav = () => {
 menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)