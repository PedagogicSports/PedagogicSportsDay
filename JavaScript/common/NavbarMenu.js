const button = document.querySelector(".nav-menu-image");
const menu = document.querySelector(".nav-menu-links");

let isOpened = false;

export default function NavbarMenu() {
  MenuController();
}

function MenuController() {
  button.addEventListener("click", () => {
    isOpened ? false : true;
    Menu();
  });
}

function Menu() {
  if (isOpened) {
    menu.style.pointerEvents = "none";
    button.style.opacity = 0.5;
    menu.style.opacity = 0;
    isOpened = false;
    return;
  }

  menu.style.pointerEvents = "all";
  button.style.opacity = 1;
  menu.style.opacity = 1;
  isOpened = true;
}
