const SLIDE = {
  title: "React is Declarative",
  bullets: [
    "imperative vs declarative",
    "The browser APIs are tedious to use",
    "React allows us to write what we want, and the library will take care of the DOM manipulation",
  ],
};

function createSlide(slide) {
  const slideElement = document.createElement("div");

  // TODO: add to slide
  const title = document.createElement("h1");
  title.innerHTML = SLIDE.title;
  return slideElement;
}
