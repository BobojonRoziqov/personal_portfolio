const navToggle = document.querySelector(".menu");
const lists = document.querySelectorAll(".list");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("links-show");
});

lists.forEach(function(list) {
    list.addEventListener("click", ()=>{
        if(links.classList.contains("links-show")) links.classList.remove("links-show")
    })
})












