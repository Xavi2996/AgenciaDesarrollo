document.addEventListener("DOMContentLoaded", function () {
  //   seleccionar mis dos elemepntos principales
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");

  // funcion mostrar y ocultar menu
  const showHideMenu = () => {
    let show = document.querySelector(".menu-mobile-show");
    if (show) {
      mobile_menu.classList.remove("menu-mobile-show");
    } else {
      mobile_menu.classList.add("menu-mobile-show");
    }
  };

  //   al dar click al boton de menu responsive, se agrega o se quita la clase que muestra el menu
  mobile_btn.addEventListener("click", () => showHideMenu());

  //   al dimesionar la ventana, si es mayor a 1000px, se quita la clase que muestra el menu
  window.addEventListener("resize", () => {
    let window_width = parseInt(document.body.clientWidth);
    if (window_width > 1000) {
      mobile_menu.classList.remove("menu-mobile-show");
    }
  });

  //   cerrar el menu con el boton x
  let btn_close = document.querySelector(".menu-mobile__close");
  btn_close.addEventListener("click", () => showHideMenu());

  //   desplegar submenus
  let menu_item = document.querySelectorAll(".menu-mobile__item");
  menu_item.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;
      if (submenu.className.includes("menu-mobile__submenu-mobile")) {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
});
