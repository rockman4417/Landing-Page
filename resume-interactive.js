const picDissappear = () => {
  document.querySelector(".headshot").style.display = "none";
};

const phoneAppear = () => {
  document.querySelector(".phone").style.visibility = "visible";
};

const nameFadeIn = () => {
  const name = document.querySelector(".name");
  name.style.visibility = "visible";
  name.classList.add("animate__animated", "animate__fadeInRightBig");
};
