const INCREASE_NUMBER_ANIMATION_SPEED = 50;
const elem = document.querySelector(".features__clients-count");

function increaseNumberAnimationStep(i, element, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      element.innerText = i + "+";
    } else if (i >= 1000) {
      element.innerText = i;
      i += 250;
    } else if (i >= 100) {
      element.innerText = i;
      i += 100;
    } else if (i >= 10) {
      element.innerText = i;
      i += 10;
    } else {
      element.innerText = i;
      i++;
    }
  }

  setTimeout(function () {
    increaseNumberAnimationStep(i, element, endNumber);
  }, INCREASE_NUMBER_ANIMATION_SPEED);
}

function initIncreaseNumberAnimation() {
  let element = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(0, element, 5000);
}

const select = document.querySelector("#budget");

select.addEventListener("change", function handleSelectChange(event) {
  if (event.target.value === "other") {
    const formContainer = document.createElement("div");
    formContainer.classList.add("form__group", "form__other-input");

    const input = document.createElement("input");
    input.placeholder = "Введите ваш вариант";
    input.type = "text";
    formContainer.append(input);

    const form = document.querySelector(".form form");
    const btn = document.querySelector(".form__submit");
    form.insertBefore(formContainer, btn);
  }
  const otherInput = document.querySelector(".form__other-input");
  if (event.target.value !== "other" && Boolean(otherInput)) {
    document.querySelector(".form form").removeChild(otherInput);
  }
});

document.addEventListener("scroll", updateScroll);

let countElementPosition = document.querySelector(
  ".features__clients-count"
).offsetTop;
let windowBottomPosition = window.scrollY + window.innerHeight;
let animationInited = false;

function updateScroll() {
  if (window.scrollY > 0) {
    document.querySelector("header").classList.add("header__scrolled");
  } else {
    document.querySelector("header").classList.remove("header__scrolled");
  }

  if (windowBottomPosition >= countElementPosition && !animationInited) {
    animationInited = true;
    initIncreaseNumberAnimation();
  }
}

window.addEventListener("scroll", updateScroll);

function addSmoothScroll(anchor) {
  anchor.addEventListener("click", onLinkClick);
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute("href")).scrollIntoView({
    behavior: "smooth",
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  addSmoothScroll(anchor);
});

addSmoothScroll(document.querySelector(".more-button"));
