const colorThief = new ColorThief();
const img = document.getElementById("album-image");
console.log(img);
const tiltedImg = document.getElementsByClassName("rotate-image");
console.log(tiltedImg);
const mainCoverHome = document.getElementById("main-cover");
console.log(mainCoverHome);

window.onload = () => {
  if (img) {
    const color = colorThief.getColor(img);
    console.log(color);
    const colorStr = JSON.stringify(color);
    console.log(colorStr);
    const rgbValue = colorStr.replaceAll("[", "(").replaceAll("]", ")");
    console.log(rgbValue);
    const changeBg = document.getElementById("central-bar-container");
    changeBg.style.backgroundColor = "rgb" + rgbValue;
  } else {
    imgArr = Array.from(tiltedImg);
    console.log(imgArr);

    imgArr.forEach((elem) => {
      const color = colorThief.getColor(elem);
      console.log(elem);
      const colorStr = JSON.stringify(color);
      console.log(colorStr);
      const rgbValue = colorStr.replaceAll("[", "(").replaceAll("]", ")");
      console.log(rgbValue);
      const changeBg = elem.closest("div");
      changeBg.style.backgroundColor = "rgb" + rgbValue;
    });
  }
};
