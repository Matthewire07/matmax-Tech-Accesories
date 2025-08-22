const btn = document.querySelector(".ham")
const mobileNav = document.querySelector(".container1")
let isOpen = false

btn.addEventListener("click", function() {
    console.log("I was Clicked")

    if (!isOpen){
        isOpen = true
        btn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        mobileNav.classList.remove("fadeOut")
        mobileNav.classList.remove("hidden")
    }
    else{
        isOpen = false
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>'
        mobileNav.classList.add("fadeOut")
        setTimeout(() => {
            mobileNav.classList.add("hidden")
        }, 900);
        
    }
    console.log(isOpen)
})



const toggleBtn = document.getElementById('mode');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light-theme');
});

// On page load, restore saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = 'Light Mode';
}
