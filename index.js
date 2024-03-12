document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mon-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });
});

const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};

const filterizr = new Filterizr(".portfolio-elements", options);

let filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});

function toggleMenu() {
  var menu = document.querySelector(".menu");
  var number = document.querySelector(".number");
  var smallMenu = document.querySelector(".small_menu");

  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  number.style.display = number.style.display === "block" ? "none" : "block";

  smallMenu.style.display =
    smallMenu.style.display === "none" ? "block" : "none";
}

document.addEventListener("DOMContentLoaded", function () {
  var phoneNumber = document.getElementById("phoneNumber");
  var phoneNumberText = phoneNumber.textContent.trim();

  var phoneNumberLink = document.createElement("a");
  phoneNumberLink.href = "tel:" + phoneNumberText;
  phoneNumberLink.textContent = phoneNumberText;

  phoneNumber.parentNode.replaceChild(phoneNumberLink, phoneNumber);
});
