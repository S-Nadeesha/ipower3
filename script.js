
var water_list = document.querySelector(".water-list");
water_list.addEventListener("click", () => {
  var water_list_div = document.querySelector(".water-list-div");
  water_list_div.classList.toggle("water_list_show");

  var innovations_div = document.querySelector(".innovations-list-div");
  innovations_div.classList.remove("innovations-list-div_show");
});

var innovations_list = document.querySelector(".innovations-list");
innovations_list.addEventListener("click", () => {
  var innovations_div = document.querySelector(".innovations-list-div");
  innovations_div.classList.toggle("innovations-list-div_show");

  var water_list_div = document.querySelector(".water-list-div");
  water_list_div.classList.remove("water_list_show");
});

var nav_menu_icon = document.querySelector(".nav-menu-icon");
nav_menu_icon.addEventListener("click", () => {
  var menu_icon = document.querySelector(".menu-icon");
  menu_icon.classList.toggle("fa-times");

  var nav_div = document.querySelector(".nav-div");
  nav_div.classList.toggle("nav-div_show");

  var water_list_div = document.querySelector(".water-list-div");
  water_list_div.classList.remove("water_list_show");

  var innovations_div = document.querySelector(".innovations-list-div");
  innovations_div.classList.remove("innovations-list_show");
});




