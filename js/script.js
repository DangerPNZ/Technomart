var map_link = document.querySelector(".map");
var map_expand = document.querySelector(".full_map");
var map_close = map_expand.querySelector(".btn_close");

var feedback_link = document.querySelector(".link_mail");
var feedback_open = document.querySelector(".feedback");
var feedback_close = feedback_open.querySelector(".btn_close");
var input_name = feedback_open.querySelector("#name");
var feedback_form = feedback_open.querySelector("form");
var input_mail = feedback_open.querySelector("#mail");
var feedback_textarea = feedback_open.querySelector("textarea");

var buy_link = document.querySelectorAll(".buy");
console.log(buy_link.length);

map_link.addEventListener("click", function(event) {
  event.preventDefault();
  map_expand.classList.add("full_map_show");
});
map_close.addEventListener("click", function(event) {
  event.preventDefault();
  map_expand.classList.remove("full_map_show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (map_expand.classList.contains("full_map_show")) {
      map_expand.classList.remove("full_map_show");
    }
  }
});

feedback_link.addEventListener("click", function(event) {
  event.preventDefault();
feedback_open.classList.add("feedback_show");
input_name.focus();
});
feedback_close.addEventListener("click", function(event) {
  event.preventDefault();
  feedback_open.classList.remove("feedback_show");
});
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedback_open.classList.contains("feedback_show")) {
      feedback_open.classList.remove("feedback_show");
    }
  }
});
feedback_form.addEventListener("submit", function(event) {
  if (!input_name.value || !input_mail.value || !feedback_textarea.value) {
  event.preventDefault();
  }
});
/*
buy_link.addEventListener("click", function(event) {
  event.preventDefault();
});
*/
