window.onload = function myteam_fn() {
  
  // toggle button
  let toggle = document.querySelector("#navbar .navbar_menu_btn");
  let collapse = document.querySelector("#navbar_menu");
  let close = document.querySelector(".navbar_menu_image");

  toggle.addEventListener("click", () => {
    collapse.style.display = "block";
  });

  close.addEventListener("click", () => {
    collapse.style.display = "none";
  });
};
