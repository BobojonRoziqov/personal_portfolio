const navToggle = document.querySelector(".menu");
const homeLink = document.getElementById("home-link");
const portfolioLink =document.getElementById("portfolio-link");
const aboutLink =document.getElementById("about-link");
const testLink =document.getElementById("test-link");

const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
    links.classList.toggle("links-show");
  });

  homeLink.addEventListener("click", function () {

    links.classList.toggle("links-show");
});

portfolioLink.addEventListener("click", function () {
        links.classList.toggle("links-show");
});

aboutLink.addEventListener("click", function () {
    links.classList.toggle("links-show");
});

testLink.addEventListener("click", function () {

    links.classList.toggle("links-show");
});











// const menyuLinks = [navToggle, homeLink, portfolioLink, aboutLink, testLink]

// for (i = 0; i < 6; i++) {
// //     menyuLinks[i];
// //   }

//   menyuLinks[i].addEventListener("click", function () {

//     links.classList.toggle("links-show");
// });

