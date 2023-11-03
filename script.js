//---------------------переключения языка---------------------------//

const btnLanguage = document.querySelector(".btn-language");
const languageMenu = btnLanguage.querySelector(".language-menu");
const currentLanguage = btnLanguage.querySelector(".current-language");
const languageOptions = languageMenu.querySelectorAll(".language-option");

// Переключение видимости меню по клику
btnLanguage.addEventListener("click", () => {
  languageMenu.style.display =
    languageMenu.style.display === "block" ? "none" : "block";
  btnLanguage.classList.toggle("active");
});

// Закрытие меню при клике вне него
document.addEventListener("click", (event) => {
  if (!btnLanguage.contains(event.target)) {
    languageMenu.style.display = "none";
    btnLanguage.classList.remove("active");
  }
});

// Обработчик выбора языка
function handleLanguageSelection(event) {
  const selectedLanguage = event.target.textContent;
  const previousLanguage = document.createElement("li");
  previousLanguage.classList.add("language-option");
  previousLanguage.textContent = currentLanguage.textContent;
  previousLanguage.addEventListener("click", handleLanguageSelection);
  languageMenu.appendChild(previousLanguage);
  currentLanguage.textContent = selectedLanguage;
  languageMenu.removeChild(event.target);
}

languageOptions.forEach((option) => {
  option.addEventListener("click", handleLanguageSelection);
});

//----------------------------------------------------------------//

// Добавьте этот код, если вы хотите скрыть скроллбары
const scrollContainer = document.querySelector(".scroll-container");

scrollContainer.addEventListener("wheel", (e) => {
  // Предотвращаем стандартное поведение колеса мыши
  e.preventDefault();

  // Прокручиваем контейнер в зависимости от направления скроллинга
  if (e.deltaY < 0) {
    scrollContainer.scrollTop -= 50; // На сколько пикселей прокрутить вверх
  } else {
    scrollContainer.scrollTop += 50; // На сколько пикселей прокрутить вниз
  }
});

const scrollContainer1 = document.querySelector(".scroll-container");
const scrollableImage = document.querySelector(".scrollable-image");

scrollContainer1.addEventListener("scroll", () => {
  // Get the current scroll position of the container
  const scrollPosition = scrollContainer1.scrollTop;

  // Adjust the left position of the image based on the scroll position
  scrollableImage.style.top = `${scrollPosition}px`;
});

let iconMenu = document.querySelector(".menu__icon");
let menu = document.querySelector(".header__menu");
let body = document.body;

if (iconMenu) {
  let btnsToInclude = document.querySelectorAll(".btn-js");
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("modal-open"); // Добавить класс, чтобы предотвратить прокрутку
    btnsToInclude.forEach((btn) => {
      btn.classList.toggle("active");
    });
  });
}
