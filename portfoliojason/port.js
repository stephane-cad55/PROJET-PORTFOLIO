document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll("nav ul li a")
    links.forEach(element => {
        element.addEventListener("click", function (e) {
            let active = document.querySelector(".active")
            if (active) {
                active.classList.remove("active")
            }
            element.classList.add("active")
        })
    });
})

