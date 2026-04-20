const navbar = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", function() {
    const navClassList = navbar.classList;
    if (window.scrollY > 1) {
        navClassList.replace("bg-transparent", "nav-color");
    } else if (window.scrollY <= 1) { 
        navClassList.replace("nav-color", "bg-transparent");
    }
});