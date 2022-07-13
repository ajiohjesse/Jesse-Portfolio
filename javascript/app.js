
//=======HERO TEXT SLIDER=======//
const slide = document.querySelector(".slide");
if (!document.hidden) {
  let value = 0;
  setInterval(() => {
    if (value < 2) {
      value++;
      changeSlide();
    } else {
      value = 0;
      changeSlide();
    }
  }, 3000);

  const changeSlide = () => {
    slide.style.bottom = `${value}00%`;
  };

  document.addEventListener("DOMContentLoaded", changeSlide());
} else {
  clearInterval()
}
//======= END HERO TEXT SLIDER=======//