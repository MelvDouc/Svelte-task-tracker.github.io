export function setElementHeights() {
  window.addEventListener("DOMContentLoaded", () => {
    const mainElement = document.querySelector("main");
    const mainHeight = getComputedStyle(mainElement).height;
    document.documentElement.style.setProperty(
      "--height1",
      `calc(${mainHeight} - 2em)`
    );
  });
}