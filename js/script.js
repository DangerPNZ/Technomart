var left_btn = document.querySelector(".icon-left");
var right_btn = document.querySelector(".icon-right");
var slide_1 = document.querySelector("#perforators_show");
var slide_2 = document.querySelector("#drills_show");

if (left_btn) {
  left_btn.addEventListener("click", function(event) {
  event.preventDefault();
  slide_1.checked = true;
});
}
if (right_btn) {
  right_btn.addEventListener("click", function(event) {
    event.preventDefault();
    slide_2.checked = true;
  });  
}

var map_link = document.querySelector(".map");
var map_expand = document.querySelector(".full_map");
if (map_expand) {
    var map_close = map_expand.querySelector(".btn_close");
    map_close.addEventListener("click", function(event) {
        event.preventDefault();
        map_expand.classList.remove("full_map_show");
    });
    map_link.addEventListener("click", function(event) {
        event.preventDefault();
        map_expand.classList.add("full_map_show");
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (map_expand.classList.contains("full_map_show")) {
                map_expand.classList.remove("full_map_show");
            }
        }
    });
}

var feedback_link = document.querySelector(".link_mail");
var feedback_open = document.querySelector(".feedback");
if (feedback_open) {
    var feedback_close = feedback_open.querySelector(".btn_close");
    feedback_close.addEventListener("click", function(event) {
        event.preventDefault();
        feedback_open.classList.remove("feedback_show");
    });
    var input_name = feedback_open.querySelector("#name");
    var feedback_form = feedback_open.querySelector("form");
    var input_mail = feedback_open.querySelector("#mail");
    var feedback_textarea = feedback_open.querySelector("textarea");
    feedback_link.addEventListener("click", function(event) {
        event.preventDefault();
        feedback_open.classList.add("feedback_show");
        input_name.focus();
    });
    feedback_close.addEventListener("click", function(event) {
        event.preventDefault();
        feedback_open.classList.remove("feedback_show");
        feedback_open.classList.remove("feedback_send_error");
    });
    feedback_form.addEventListener("submit", function(event) {
        if (!input_name.value || !input_mail.value || !feedback_textarea.value) {
            event.preventDefault();
            feedback_open.classList.remove("feedback_send_error");
            feedback_open.offsetWidth = feedback_open.offsetWidth;
            feedback_open.classList.add("feedback_send_error");
        }
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (feedback_open.classList.contains("feedback_show")) {
                feedback_open.classList.remove("feedback_show");
                feedback_open.classList.remove("feedback_send_error");
            }
        }
    });
}

var buy_link = document.querySelectorAll(".buy");
for (var i = 0; i < buy_link.length; i++) {
    buy_link[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (add_open) {
            add_open.classList.add("add_product_show");
        }
    });
}
var add_open = document.querySelector(".add_product");
if (add_open) {
    var add_close = add_open.querySelector(".btn_close");
    add_close.addEventListener("click", function(event) {
        event.preventDefault();
        add_open.classList.remove("add_product_show");
    });
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (add_open.classList.contains("add_product_show")) {
                add_open.classList.remove("add_product_show");
            }
        }
    });
}
