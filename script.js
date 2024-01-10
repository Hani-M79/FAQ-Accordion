/* answers[i].style.display: this just consider inline styles */
/* getComputedStyle(answers[i]).display: this consider all styles even in css file*/

const plusIcons = document.querySelectorAll(".icon");
const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

plusIcons.forEach((plusIcon, i) =>
  plusIcon.addEventListener("click", () => {
    const answerVisibilityStyle = getComputedStyle(answers[i]).visibility;
    answers[i].classList.toggle("active");

    if (answerVisibilityStyle === "hidden") {
      answers[i].style.visibility = "visible";
      plusIcon.src = "./assets/images/icon-minus.svg";
    } else {
      answers[i].style.visibility = "hidden";
      plusIcon.src = "./assets/images/icon-plus.svg";
    }
  })
);

questions.forEach((q, i) =>
  q.addEventListener("click", () => {
    const answerVisibilityStyle = getComputedStyle(answers[i]).visibility;
    answers[i].classList.toggle("active");

    if (answerVisibilityStyle === "hidden") {
      answers[i].style.visibility = "visible";
      plusIcons[i].src = "./assets/images/icon-minus.svg";
    } else {
      answers[i].style.visibility = "hidden";
      plusIcons[i].src = "./assets/images/icon-plus.svg";
    }
  })
);
